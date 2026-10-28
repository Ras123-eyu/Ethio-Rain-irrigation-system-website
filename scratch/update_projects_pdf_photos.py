import re

# Slugs of the 7 authentic projects that have real photos in the PDF booklet
PDF_PROJECTS = {
    'gesuba-small-towns-water-supply-and-sanitation-project',
    'submersible-pump-supply-and-installation',
    'center-pivot-irrigation-system-design-installation',
    'nettle-irrigation-project-1000ha',
    'debrebrhan-university-water-supply-and-elector-mechanical-porject',
    'eldima-center-pivot-installation',
    'glory-real-state-submersible-ground-water-pump-delivery-instalation'
}

with open('src/data/projects.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect each project in src/data/projects.js
# We want to replace img: '...' with img: '/images/photo-not-available.webp' for any project not in PDF_PROJECTS
# And replace gallery: [...] with gallery: [] for any project not in PDF_PROJECTS

proj_blocks = re.split(r'(\{\s*slug:\s*[\'"][^\'"]+[\'"])', content)
print(f"Parts length: {len(proj_blocks)}")

# Let's do a structured parse and rewrite
output_parts = [proj_blocks[0]] # Header before first project

for i in range(1, len(proj_blocks), 2):
    header = proj_blocks[i]
    body = proj_blocks[i+1]
    
    slug_m = re.search(r"slug:\s*['\"]([^'\"]+)['\"]", header)
    if not slug_m:
        output_parts.extend([header, body])
        continue
    
    slug = slug_m.group(1)
    
    if slug in PDF_PROJECTS:
        # Keep real PDF photos!
        # Make sure hasPhoto: true is present
        if 'hasPhoto:' not in body:
            body = re.sub(r"(img:\s*['\"][^'\"]+['\"],)", r"\1\n    hasPhoto: true,", body)
        output_parts.extend([header, body])
        print(f"KEPT PDF PROJECT: {slug}")
    else:
        # Replace img with photo-not-available
        body = re.sub(r"img:\s*['\"][^'\"]+['\"],", "img: '/images/photo-not-available.webp',\n    hasPhoto: false,", body)
        # Empty gallery
        body = re.sub(r"gallery:\s*\[[^\]]*\]", "gallery: []", body)
        output_parts.extend([header, body])
        print(f"UPDATED NON-PDF PROJECT: {slug} -> Photo Not Available")

new_content = "".join(output_parts)
with open('src/data/projects.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("\nDone updating src/data/projects.js!")
