from pypdf import PdfReader

reader = PdfReader(r"C:\Users\eyoel\.gemini\antigravity-ide\brain\631d7ac3-6f2d-4810-81fe-ea2a162be3e2\.user_uploaded\media_1792611959587.pdf")

for p in range(24, 45):
    page = reader.pages[p]
    text = page.extract_text() or ""
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    print(f"--- PAGE {p+1} ---")
    for l in lines[:5]:
        print("  ", l)
