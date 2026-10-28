import urllib.request
import re

urls = [
    'https://ethiorain.com/',
    'https://ethiorain.com/team/',
    'https://ethiorain.com/about-us/',
    'https://ethiorain.com/our-products-services/',
    'https://ethiorain.com/qualification/',
    'https://ethiorain.com/contact/'
]
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        print('=== URL:', url, 'Length:', len(html))
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
        print('Images count:', len(imgs))
        for img in imgs:
            print('  IMG:', img)
        bg = re.findall(r'url\(["\']?([^"\')]+)["\']?\)', html)
        for b in bg:
            if 'uploads' in b:
                print('  BG:', b)
    except Exception as e:
        print('Error fetching', url, e)
