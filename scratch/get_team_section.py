import urllib.request
import re

req = urllib.request.Request('https://ethiorain.com/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

idx = html.find('Our Executive Team')
if idx != -1:
    section = html[idx:idx+4500]
    print(section)
else:
    print('Not found')
