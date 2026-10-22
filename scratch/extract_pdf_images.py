import os
from pathlib import Path
from pypdf import PdfReader
from PIL import Image
import io

pdf_path = Path(r"C:\Users\eyoel\.gemini\antigravity-ide\brain\631d7ac3-6f2d-4810-81fe-ea2a162be3e2\.user_uploaded\media_1792611959587.pdf")
output_dir = Path("public/images/pdf_extracted")
output_dir.mkdir(parents=True, exist_ok=True)

print(f"Reading PDF: {pdf_path}")
reader = PdfReader(str(pdf_path))
print(f"Total pages: {len(reader.pages)}")

extracted = []
for page_num, page in enumerate(reader.pages):
    # Check images in page
    for img_idx, img_file in enumerate(page.images):
        name = img_file.name
        data = img_file.data
        try:
            im = Image.open(io.BytesIO(data))
            # Only save meaningful photos, skip tiny logos or decorative borders if any
            if im.width >= 150 and im.height >= 150:
                out_name = f"page_{page_num+1}_img_{img_idx}_{im.width}x{im.height}.webp"
                out_path = output_dir / out_name
                im.save(out_path, format="WEBP", quality=85)
                print(f"Page {page_num+1}: saved {out_name} ({im.width}x{im.height})")
                extracted.append((page_num+1, out_path))
        except Exception as e:
            print(f"Page {page_num+1} image {img_idx} error: {e}")

print(f"\nExtracted {len(extracted)} valid project images to {output_dir}")
