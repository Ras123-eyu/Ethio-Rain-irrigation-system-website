import os
from pathlib import Path
from pypdf import PdfReader

pdf_path = Path(r"C:\Users\eyoel\.gemini\antigravity-ide\brain\631d7ac3-6f2d-4810-81fe-ea2a162be3e2\.user_uploaded\media_1792611959587.pdf")
reader = PdfReader(str(pdf_path))
print(f"Total pages in PDF: {len(reader.pages)}")

for idx, page in enumerate(reader.pages):
    imgs = list(page.images)
    text = page.extract_text() or ""
    first_line = text.strip().split('\n')[0] if text.strip() else "[NO TEXT]"
    if len(imgs) > 0:
        print(f"Page {idx+1}: {len(imgs)} images | Header: {first_line[:70]}")
