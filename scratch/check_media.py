import urllib.request
import json

page = 1
while True:
    try:
        url = f'https://ethiorain.com/wp-json/wp/v2/media?per_page=20&page={page}'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=10)
        items = json.loads(res.read().decode('utf-8'))
        if not items:
            break
        print(f"=== Media Page {page}: {len(items)} items ===")
        for item in items:
            title = item.get('title', {}).get('rendered', '')
            src = item.get('source_url', '')
            print(f"  {title}: {src}")
        page += 1
    except Exception as e:
        print(f"Done or error at page {page}: {e}")
        break
