import json, math

with open('scratch/ethiopia_regions.geojson', 'r', encoding='utf-8') as f:
    data = json.load(f)

PROJECTS = [
    {'id': 'addis-ababa', 'name': 'Addis Ababa', 'lat': 9.032, 'lon': 38.742, 'region': 'Addis Ababa'},
    {'id': 'meki', 'name': 'Meki', 'lat': 8.156, 'lon': 38.824, 'region': 'Oromia'},
    {'id': 'shallo', 'name': 'Shallo', 'lat': 7.150, 'lon': 38.600, 'region': 'Oromia'},
    {'id': 'gidabo', 'name': 'Gidabo', 'lat': 6.550, 'lon': 38.200, 'region': 'Oromia'},
    {'id': 'gesuba', 'name': 'Gesuba', 'lat': 6.720, 'lon': 37.550, 'region': 'SNNPR / South'},
    {'id': 'dawro', 'name': 'Dawro', 'lat': 7.140, 'lon': 37.150, 'region': 'SNNPR / South'},
    {'id': 'debre-berhan', 'name': 'Debre Berhan', 'lat': 9.680, 'lon': 39.530, 'region': 'Amhara'},
    {'id': 'eldima', 'name': 'Eldima', 'lat': 8.450, 'lon': 39.250, 'region': 'Oromia'},
    {'id': 'nettle', 'name': 'Nettle', 'lat': 9.400, 'lon': 40.500, 'region': 'Afar / Rift Basin'},
    {'id': 'manisa', 'name': 'Manisa', 'lat': 6.900, 'lon': 37.850, 'region': 'SNNPR / South'}
]

# Exact bounding box of the geoBoundaries dataset
min_lon, max_lon = 33.002, 47.959
min_lat, max_lat = 3.400, 14.846

# Target SVG Canvas: 800 x 620
PAD_X = 40
PAD_Y = 30
USABLE_W = 800 - 2 * PAD_X # 720
USABLE_H = 620 - 2 * PAD_Y # 560

def project(lon, lat):
    x = PAD_X + ((lon - min_lon) / (max_lon - min_lon)) * USABLE_W
    y = PAD_Y + ((max_lat - lat) / (max_lat - min_lat)) * USABLE_H
    return round(x, 1), round(y, 1)

print('Projected coordinates:')
for p in PROJECTS:
    px, py = project(p['lon'], p['lat'])
    print(f"{p['id']:15} ({p['region']:18}): x={px}, y={py}")

# Douglas-Peucker point reduction for smooth, clean SVG rendering
def perpendicular_distance(pt, line_start, line_end):
    if line_start == line_end:
        return math.hypot(pt[0] - line_start[0], pt[1] - line_start[1])
    num = abs((line_end[1] - line_start[1]) * pt[0] - (line_end[0] - line_start[0]) * pt[1] + line_end[0] * line_start[1] - line_end[1] * line_start[0])
    den = math.hypot(line_end[1] - line_start[1], line_end[0] - line_start[0])
    return num / den if den != 0 else 0

def simplify_points(pts, epsilon=0.6):
    if len(pts) <= 2:
        return pts
    dmax = 0
    index = 0
    for i in range(1, len(pts) - 1):
        d = perpendicular_distance(pts[i], pts[0], pts[-1])
        if d > dmax:
            index = i
            dmax = d
    if dmax > epsilon:
        rec1 = simplify_points(pts[:index+1], epsilon)
        rec2 = simplify_points(pts[index:], epsilon)
        return rec1[:-1] + rec2
    else:
        return [pts[0], pts[-1]]

def ring_to_svg_path(ring):
    pts = [project(pt[0], pt[1]) for pt in ring]
    sim = simplify_points(pts, epsilon=0.55)
    if not sim:
        return ""
    d_parts = [f"M {sim[0][0]},{sim[0][1]}"]
    for p in sim[1:]:
        d_parts.append(f"L {p[0]},{p[1]}")
    d_parts.append("Z")
    return " ".join(d_parts)

region_results = []
for feat in data['features']:
    props = feat['properties']
    raw_name = props.get('shapeName') or props.get('name')
    geom = feat['geometry']
    gtype = geom['type']
    coords = geom['coordinates']
    
    path_d = ""
    all_pts = []
    
    if gtype == 'Polygon':
        for ring in coords:
            path_d += (" " if path_d else "") + ring_to_svg_path(ring)
            all_pts.extend([project(pt[0], pt[1]) for pt in ring])
    elif gtype == 'MultiPolygon':
        for poly in coords:
            for ring in poly:
                path_d += (" " if path_d else "") + ring_to_svg_path(ring)
                all_pts.extend([project(pt[0], pt[1]) for pt in ring])
                
    # Centroid
    cx = round(sum(p[0] for p in all_pts) / len(all_pts), 1) if all_pts else 400
    cy = round(sum(p[1] for p in all_pts) / len(all_pts), 1) if all_pts else 300
    
    region_results.append({
        'name': raw_name,
        'path': path_d,
        'cx': cx,
        'cy': cy,
        'pts_count': len(all_pts)
    })

print(f"\nProcessed {len(region_results)} regions:")
for r in region_results:
    print(f"  {r['name']:20}: centroid=({r['cx']}, {r['cy']}), path_len={len(r['path'])}")

with open('scratch/regions_svg.json', 'w', encoding='utf-8') as out:
    json.dump(region_results, out, indent=2)
print("Saved to scratch/regions_svg.json")
