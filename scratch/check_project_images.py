import re

with open('src/data/projects.js', 'r', encoding='utf-8') as f:
    text = f.read()

proj_blocks = re.split(r'\{\s*slug:', text)[1:]
pdf_projects = []
non_pdf_projects = []

for block in proj_blocks:
    slug_m = re.match(r"\s*['\"]([^'\"]+)['\"]", block)
    title_m = re.search(r"title:\s*['\"]([^'\"]+)['\"]", block)
    img_m = re.search(r"img:\s*['\"]([^'\"]+)['\"]", block)
    
    slug = slug_m.group(1) if slug_m else ''
    title = title_m.group(1) if title_m else ''
    img = img_m.group(1) if img_m else ''
    
    is_pdf = '/projects/' in img
    if is_pdf:
        pdf_projects.append((slug, title, img))
    else:
        non_pdf_projects.append((slug, title, img))

print(f"Projects WITH PDF images ({len(pdf_projects)}):")
for s, t, i in pdf_projects:
    print(f"  [PDF] {s}: {i}")

print(f"\nProjects WITHOUT PDF images ({len(non_pdf_projects)}):")
for s, t, i in non_pdf_projects:
    print(f"  [EXTERNAL] {s}: {i}")
