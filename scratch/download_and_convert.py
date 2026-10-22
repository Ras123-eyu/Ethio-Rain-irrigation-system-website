import os
import re
import urllib.request
import hashlib
import subprocess
from pathlib import Path

SRC_DIR = Path('src')
PUBLIC_IMG_DIR = Path('public/images')
PUBLIC_IMG_DIR.mkdir(parents=True, exist_ok=True)

# Regex to match image URLs
URL_PATTERN = re.compile(r'https?://[^\s\'"`,;()<>{}\[\]]+')

IMAGE_DOMAINS = [
    'unsplash.com',
    'image2url.com',
    'valmont.com',
    'damsagri.com',
    'tantairrigation.com',
    'valleyagelectric.com',
    'momentindustry.com',
    'encrypted-tbn0.gstatic.com',
    'amwua.org',
    'i.pinimg.com'
]

def is_image_url(url):
    lower = url.lower()
    if any(ext in lower for ext in ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.blob', 'photo-']):
        return True
    if any(domain in lower for domain in IMAGE_DOMAINS):
        return True
    return False

# Scan all files
files = list(SRC_DIR.rglob('*.js')) + list(SRC_DIR.rglob('*.jsx'))
url_to_local = {}

for f in files:
    content = f.read_text(encoding='utf-8')
    matches = URL_PATTERN.findall(content)
    for url in matches:
        # Strip trailing syntax if any
        clean_url = url.rstrip('\\').rstrip(';')
        if is_image_url(clean_url) and not clean_url.endswith('.svg'):
            url_to_local[clean_url] = None

print(f"Found {len(url_to_local)} unique image URLs to download and convert to .webp")

# Download and convert
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

success_count = 0
fail_count = 0

for i, url in enumerate(url_to_local.keys()):
    url_hash = hashlib.md5(url.encode('utf-8')).hexdigest()[:12]
    # Clean filename based on context if possible or hash
    target_webp = PUBLIC_IMG_DIR / f"img_{url_hash}.webp"
    local_path = f"/images/img_{url_hash}.webp"
    
    if target_webp.exists() and target_webp.stat().st_size > 500:
        url_to_local[url] = local_path
        continue
        
    temp_input = PUBLIC_IMG_DIR / f"temp_{url_hash}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            temp_input.write_bytes(data)
            
        # Convert to webp with ffmpeg
        cmd = [
            'ffmpeg', '-y', '-i', str(temp_input),
            '-c:v', 'libwebp',
            '-quality', '82',
            '-compression_level', '6',
            str(target_webp)
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0 and target_webp.exists() and target_webp.stat().st_size > 0:
            url_to_local[url] = local_path
            success_count += 1
            print(f"[{i+1}/{len(url_to_local)}] Converted: {url[:60]}... -> {target_webp.name} ({target_webp.stat().st_size // 1024} KB)")
        else:
            print(f"[{i+1}/{len(url_to_local)}] FFmpeg failed for {url[:60]}: {result.stderr[:100]}")
            fail_count += 1
    except Exception as e:
        print(f"[{i+1}/{len(url_to_local)}] Error downloading {url[:60]}: {e}")
        fail_count += 1
    finally:
        if temp_input.exists():
            temp_input.unlink()

print(f"\nCompleted: {success_count} converted, {fail_count} failed, total mapping: {len([v for v in url_to_local.values() if v])}")

# Replace URLs in all files
replaced_files = 0
for f in files:
    content = f.read_text(encoding='utf-8')
    original_content = content
    for url, local_path in url_to_local.items():
        if local_path and url in content:
            content = content.replace(url, local_path)
    if content != original_content:
        f.write_text(content, encoding='utf-8')
        replaced_files += 1
        print(f"Updated image paths in {f}")

print(f"Finished updating {replaced_files} files with local .webp paths.")
