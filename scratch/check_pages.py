import urllib.request
import json
import re

req = urllib.request.Request('https://ethiorain.com/wp-json/wp/v2/pages?per_page=100', headers={'User-Agent': 'Mozilla/5.0'})
try:
    pages = json.loads(urllib.request.urlopen(req, timeout=10).read().decode('utf-8'))
    print(f'Pages found: {len(pages)}')
    for p in pages:
        title = p.get('title', {}).get('rendered', '')
        content = p.get('content', {}).get('rendered', '')
        imgs = re.findall(r'https?://[^\s"\'<>]+uploads[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', content, re.IGNORECASE)
        print(f"Page: {title} ({len(imgs)} imgs)")
        for img in imgs:
            print(f"  {img}")
except Exception as e:
    print('Error pages:', e)
