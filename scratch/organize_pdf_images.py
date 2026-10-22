import shutil
from pathlib import Path

src_dir = Path("public/images/pdf_extracted")
dest_dir = Path("public/images/projects")
dest_dir.mkdir(parents=True, exist_ok=True)

mapping = {
    # Gesuba Water Supply Project
    "page_25_img_1_1000x750.webp": "gesuba-water-supply-signboard.webp",
    "page_26_img_1_750x1000.webp": "gesuba-water-reservoir.webp",
    "page_26_img_2_424x715.webp": "gesuba-dci-pipe-trench.webp",
    "page_27_img_1_859x595.webp": "gesuba-generator-house.webp",
    "page_28_img_1_750x1000.webp": "gesuba-spring-water-capping.webp",
    "page_28_img_2_583x309.webp": "gesuba-treatment-sedimentation.webp",

    # Dawro Submersible Pump Installation
    "page_29_img_1_976x1301.webp": "dawro-submersible-pump-installation.webp",

    # Shallo 3 / 7 Pivots Irrigation Project (Elfora Agro Industry, Shallo Farm)
    "page_30_img_1_976x549.webp": "shallo-pivot-pad-excavation.webp",
    "page_31_img_1_418x743.webp": "shallo-pivot-survey-track.webp",
    "page_31_img_2_426x757.webp": "shallo-pivot-grader-clearing.webp",
    "page_32_img_1_447x884.webp": "shallo-pivot-pipe-assembly.webp",
    "page_32_img_2_735x1306.webp": "shallo-pivot-tower-erection.webp",
    "page_33_img_1_976x549.webp": "shallo-pivot-truss-assembly.webp",
    "page_34_img_1_904x509.webp": "shallo-pivot-installation-tools.webp",
    "page_35_img_1_449x827.webp": "shallo-pivot-assembly-crew.webp",
    "page_35_img_2_679x1208.webp": "shallo-pivot-span-alignment.webp",

    # Nettle Irrigation Project 1000 ha
    "page_36_img_1_746x420.webp": "nettle-pump-discharge-test.webp",
    "page_36_img_2_975x549.webp": "nettle-pump-manifold-crane.webp",
    "page_37_img_1_1432x947.webp": "nettle-center-pivot-field.webp",
    "page_38_img_1_1249x937.webp": "nettle-pumping-station-manifold.webp",
    "page_38_img_2_848x570.webp": "nettle-pivot-spraying-crops.webp",

    # Debre Berhan University Water Supply Project
    "page_39_img_1_960x1280.webp": "debre-berhan-booster-pumps.webp",
    "page_39_img_2_565x311.webp": "debre-berhan-pipe-manifold.webp",
    "page_39_img_3_765x346.webp": "debre-berhan-storage-reservoirs.webp",

    # Eldima (Eldama) Center Pivot Project
    "page_41_img_1_975x731.webp": "eldima-center-pivot-spraying.webp",
    "page_42_img_1_977x701.webp": "eldima-center-pivot-field.webp",

    # Glory Real Estate Borehole Project
    "page_44_img_1_960x1280.webp": "glory-real-estate-crane-borehole.webp",
    "page_45_img_1_960x1280.webp": "glory-real-estate-control-panel.webp",
    "page_45_img_2_960x1280.webp": "glory-real-estate-submersible-pump.webp",
}

for src_name, dest_name in mapping.items():
    s = src_dir / src_name
    d = dest_dir / dest_name
    if s.exists():
        shutil.copy2(s, d)
        print(f"Copied: {src_name} -> {d.name}")
    else:
        print(f"Missing: {src_name}")

print(f"\nDone! Copied {len(list(dest_dir.glob('*.webp')))} project images to {dest_dir}")
