import urllib.request
import re

urls = [
    'https://ethiorain.com/',
    'https://ethiorain.com/about-us/',
    'https://ethiorain.com/our-products-services/',
    'https://ethiorain.com/team/',
    'https://ethiorain.com/qualification/',
    'https://ethiorain.com/contact/',
    'https://ethiorain.com/category/projects/',
    'https://ethiorain.com/category/news/'
]

all_uploads = set()
for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https?://[^\s"\'<>]*(?:uploads|images)[^\s"\'<>]*\.(?:jpg|jpeg|png|webp)', html, re.IGNORECASE)
        for m in matches:
            all_uploads.add(m)
    except Exception as e:
        print(f"Error {url}: {e}")

print("Found image URLs:")
for u in sorted(all_uploads):
    print(u)
