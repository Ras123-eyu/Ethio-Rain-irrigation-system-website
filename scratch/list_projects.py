import re

with open('src/data/projects.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match each object in projectsData
project_blocks = re.findall(r'\{\s*slug:\s*[\'"]([^\'"]+)[\'"](.*?)completion:', content, re.DOTALL)
print(f"Total project blocks matched: {len(project_blocks)}")

all_projects = []
for slug, block in project_blocks:
    title_m = re.search(r'title:\s*[\'"]([^\'"]+)[\'"]', block)
    loc_m = re.search(r'location:\s*[\'"]([^\'"]+)[\'"]', block)
    val_m = re.search(r'value:\s*[\'"]([^\'"]+)[\'"]', block)
    type_m = re.search(r'type:\s*[\'"]([^\'"]+)[\'"]', block)
    area_m = re.search(r'area:\s*[\'"]([^\'"]+)[\'"]', block)
    client_m = re.search(r'client:\s*[\'"]([^\'"]+)[\'"]', block)
    
    title = title_m.group(1) if title_m else slug
    loc = loc_m.group(1) if loc_m else ''
    val = val_m.group(1) if val_m else ''
    ptype = type_m.group(1) if type_m else ''
    area = area_m.group(1) if area_m else ''
    client = client_m.group(1) if client_m else ''
    
    all_projects.append({
        'slug': slug,
        'title': title,
        'location': loc,
        'value': val,
        'type': ptype,
        'area': area,
        'client': client
    })

print(f"\nExtracted {len(all_projects)} projects:")
for idx, p in enumerate(all_projects):
    print(f"{idx+1}. [{p['slug']}]")
    print(f"   Title: {p['title']}")
    print(f"   Location: {p['location']}")
    print(f"   Value: {p['value']} | Client: {p['client']}")
