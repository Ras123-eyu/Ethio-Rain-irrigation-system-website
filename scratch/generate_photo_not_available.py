from PIL import Image, ImageDraw, ImageFont
import math

# Create a modern, high-res 1200x800 "Photo Not Available" graphic
w, h = 1200, 800
img = Image.new('RGB', (w, h), color=(15, 23, 42)) # Slate 900
draw = ImageDraw.Draw(img)

# Draw subtle grid lines
grid_color = (30, 41, 59) # Slate 800
step = 40
for x in range(0, w, step):
    draw.line([(x, 0), (x, h)], fill=grid_color, width=1)
for y in range(0, h, step):
    draw.line([(0, y), (w, y)], fill=grid_color, width=1)

# Subtle vignette / radial glow in center
center_x, center_y = w // 2, h // 2 - 30

# Draw camera icon placeholder
icon_box = [center_x - 60, center_y - 60, center_x + 60, center_y + 60]
draw.rounded_rectangle(icon_box, radius=20, fill=(30, 41, 59), outline=(56, 189, 248), width=3)

# Camera lens
draw.ellipse([center_x - 28, center_y - 28, center_x + 28, center_y + 28], outline=(56, 189, 248), width=3)
# Flash / slash
draw.line([center_x - 45, center_y - 45, center_x + 45, center_y + 45], fill=(239, 68, 68), width=4)

# Text: PHOTO NOT AVAILABLE
# Using default or bitmap font if TTF not specified
try:
    font_large = ImageFont.truetype("arial.ttf", 36)
    font_sub = ImageFont.truetype("arial.ttf", 20)
    font_badge = ImageFont.truetype("arial.ttf", 16)
except:
    font_large = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_badge = ImageFont.load_default()

text1 = "PHOTO NOT AVAILABLE"
text2 = "Verified Contract Records & Technical BOQ on File"
text3 = "GRADE-1 WATER WORKS CONTRACTOR"

# Draw text1
bbox1 = draw.textbbox((0, 0), text1, font=font_large)
tw1 = bbox1[2] - bbox1[0]
draw.text((center_x - tw1 // 2, center_y + 90), text1, fill=(241, 245, 249), font=font_large)

# Draw text2
bbox2 = draw.textbbox((0, 0), text2, font=font_sub)
tw2 = bbox2[2] - bbox2[0]
draw.text((center_x - tw2 // 2, center_y + 145), text2, fill=(148, 163, 184), font=font_sub)

# Badge: GRADE-1 WATER WORKS CONTRACTOR
bbox3 = draw.textbbox((0, 0), text3, font=font_badge)
tw3 = bbox3[2] - bbox3[0]
th3 = bbox3[3] - bbox3[1]
badge_pad_x, badge_pad_y = 16, 8
badge_rect = [
    center_x - tw3 // 2 - badge_pad_x,
    center_y + 195 - badge_pad_y,
    center_x + tw3 // 2 + badge_pad_x,
    center_y + 195 + th3 + badge_pad_y
]
draw.rounded_rectangle(badge_rect, radius=12, fill=(3, 105, 161), outline=(56, 189, 248), width=1)
draw.text((center_x - tw3 // 2, center_y + 195), text3, fill=(255, 255, 255), font=font_badge)

img.save('public/images/photo-not-available.webp', format='WEBP', quality=90)
print("Saved public/images/photo-not-available.webp successfully!")
