import json, re

with open('src/data/projects.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Bounding box & projection formula matching Ethiopia SVG (800 x 620)
min_lon, max_lon = 33.002, 47.959
min_lat, max_lat = 3.400, 14.846
PAD_X = 40
PAD_Y = 30
USABLE_W = 720
USABLE_H = 560

def project(lon, lat):
    x = PAD_X + ((lon - min_lon) / (max_lon - min_lon)) * USABLE_W
    y = PAD_Y + ((max_lat - lat) / (max_lat - min_lat)) * USABLE_H
    return round(x, 1), round(y, 1)

# Geographic coordinates for towns / sites in Ethiopia:
COORDS = {
    'addis_ababa': (38.742, 9.032),     # Addis Ababa
    'meki': (38.824, 8.156),            # Meki, Lake Ziway
    'shallo': (38.600, 7.150),          # Shallo, West Arsi
    'gidabo': (38.200, 6.550),          # Gidabo, Oromia/Sidama
    'gesuba': (37.550, 6.720),          # Gesuba, Wolayita
    'debre_berhan': (39.530, 9.680),    # Debre Berhan
    'nettle': (40.500, 9.400),          # Nettle, Awash Valley / Afar
    'dawro': (37.150, 7.140),           # Tercha / Dawro Zone
    'eldima': (39.250, 8.450),          # Eldima, East Shewa
    'manisa': (37.850, 6.900),          # Manisa, SNNPR
    'modjo': (39.120, 8.600),           # Modjo Dry Port
    'dukem': (38.900, 8.790),           # Dukem / Eastern Industrial Zone
    'jimma': (36.830, 7.670),           # Jimma Welene
    'bahir_dar': (37.390, 11.590),      # Bahir Dar / Amhara
    'dire_dawa': (41.860, 9.600),       # Dire Dawa Infrastructure
    'harar': (42.130, 9.310),           # Harar / Harari
    'jijiga': (42.800, 9.350),          # Somali Region
    'mekelle': (39.470, 13.500),        # Tigray Region
    'asosa': (34.530, 10.070),          # Benishangul-Gumuz
    'gambela_town': (34.580, 8.250),    # Gambela
    'adama': (39.270, 8.540),           # Adama / Oromia
    'north_shewa': (39.300, 9.850),     # North Shewa
    'arba_minch': (37.560, 6.030)       # Southern Lakes
}

# Parse all projects from projects.js
pattern = r'\{\s*slug:\s*[\'"]([^\'"]+)[\'"](.*?)completion:\s*[\'"]([^\'"]+)[\'"]'
matches = re.findall(pattern, content, re.DOTALL)

print(f"Found {len(matches)} projects in projects.js")

def determine_location_info(slug, title, loc, client):
    s = (slug + ' ' + title + ' ' + loc + ' ' + client).lower()
    
    if 'meki' in s:
        c = COORDS['meki']
        return {
            'city': 'Meki, Lake Ziway',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 140,
            'highway': 'Addis–Adama Expressway & Route A7',
            'transitTime': '~2.5 hrs rapid dispatch',
            'fleet': 'Flatbed pivot transporters & span alignment crew'
        }
    elif 'shallo' in s:
        c = COORDS['shallo']
        return {
            'city': 'Shallo Farm, West Arsi',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 265,
            'highway': 'Mojo–Hawassa Expressway / Route A7',
            'transitTime': '~4.5 hrs heavy convoy dispatch',
            'fleet': 'Hydraulic crane trucks, deep-well lowering gear'
        }
    elif 'gidabo' in s:
        c = COORDS['gidabo']
        return {
            'city': 'Gidabo',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 340,
            'highway': 'Hawassa–Dilla Highway / Route A8',
            'transitTime': '~5.5 hrs mobilization',
            'fleet': 'Topographic GPS survey unit, hydraulic modeling team'
        }
    elif 'gesuba' in s:
        c = COORDS['gesuba']
        return {
            'city': 'Gesuba, Wolayita',
            'region': 'SNNPR / South',
            'regionId': 'snnpr',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 385,
            'highway': 'Sodo–Wolayita Regional Corridor',
            'transitTime': '~7.5 hrs mobilization',
            'fleet': 'Civil concrete batching equipment, ductile pipe installation team'
        }
    elif 'debre' in s or 'debrebrhan' in s or 'birhan abuhay' in s:
        c = COORDS['debre_berhan'] if 'debre' in s else COORDS['north_shewa']
        return {
            'city': 'Debre Berhan, North Shewa',
            'region': 'Amhara',
            'regionId': 'amhara',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 130,
            'highway': 'Addis–Dessie Highway / Route A2',
            'transitTime': '~2.0 hrs rapid dispatch',
            'fleet': 'Electromechanical instrumentation team, booster skid transport'
        }
    elif 'nettle' in s:
        c = COORDS['nettle']
        return {
            'city': 'Awash Valley',
            'region': 'Afar / Rift Basin',
            'regionId': 'afar',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 260,
            'highway': 'Ethio-Djibouti Corridor (Route A1)',
            'transitTime': '~4.5 hrs heavy convoy dispatch',
            'fleet': 'Heavy crane, high-diameter steel suction manifold welders'
        }
    elif 'dawro' in s or 'tercha' in s:
        c = COORDS['dawro']
        return {
            'city': 'Tercha Town, Dawro Zone',
            'region': 'SNNPR / South',
            'regionId': 'snnpr',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 460,
            'highway': 'Jimma–Chida–Tercha Corridor',
            'transitTime': '~8.5 hrs mobilization',
            'fleet': 'Mobile deep-well winch truck, electrical diagnostic unit'
        }
    elif 'manisa' in s:
        c = COORDS['manisa']
        return {
            'city': 'Manisa',
            'region': 'SNNPR / South',
            'regionId': 'snnpr',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 365,
            'highway': 'Wolayita–Sodo Southern Corridor',
            'transitTime': '~7.0 hrs mobilization',
            'fleet': 'HDPE electrofusion rig, hydrocyclone filtration specialists'
        }
    elif 'eldima' in s:
        c = COORDS['eldima']
        return {
            'city': 'Eldima',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 110,
            'highway': 'Addis–Adama Expressway Corridor',
            'transitTime': '~2.0 hrs rapid dispatch',
            'fleet': 'Pivot erection team, drive alignment torque instruments'
        }
    elif 'modjo' in s or 'shipping' in s:
        c = COORDS['modjo']
        return {
            'city': 'Modjo Dry Port',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 75,
            'highway': 'Addis–Adama Expressway',
            'transitTime': '~1.2 hrs rapid dispatch',
            'fleet': 'Submersible pump calibration team'
        }
    elif 'seregela' in s or 'chemical' in s or 'dukem' in s:
        c = COORDS['dukem']
        return {
            'city': 'Dukem Industrial Zone',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 40,
            'highway': 'Addis–Bishoftu Highway',
            'transitTime': '~45 mins rapid dispatch',
            'fleet': 'Rotary borehole drilling rig and test manifold'
        }
    elif 'ecwc' in s or 'dire dawa' in s or 'harar' in s:
        c = COORDS['dire_dawa']
        return {
            'city': 'Dire Dawa Transport Corridor',
            'region': 'Dire Dawa',
            'regionId': 'dire-dawa',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 450,
            'highway': 'Ethio-Djibouti Highway A1',
            'transitTime': '~7.5 hrs mobilization',
            'fleet': 'Infrastructure electromechanical installation team'
        }
    elif 'jimma' in s or 'welene' in s:
        c = COORDS['jimma']
        return {
            'city': 'Jimma Welene',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 350,
            'highway': 'Addis–Jimma Highway',
            'transitTime': '~6.0 hrs mobilization',
            'fleet': 'Mobile generator and pump delivery team'
        }
    elif 'ata' in s or 'agricultural transformation' in s:
        c = COORDS['adama']
        return {
            'city': 'Adama / ATA Regional Center',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 95,
            'highway': 'Addis–Adama Expressway',
            'transitTime': '~1.5 hrs rapid dispatch',
            'fleet': 'Precision drip demonstration mobile team'
        }
    elif 'demonstration' in s or 'ministry of agriculture' in s:
        c = COORDS['arba_minch']
        return {
            'city': 'National Agri Demonstration Site',
            'region': 'SNNPR / South',
            'regionId': 'snnpr',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 430,
            'highway': 'Hawassa–Arba Minch Corridor',
            'transitTime': '~7.5 hrs mobilization',
            'fleet': 'Valley center pivot demonstration crew'
        }
    elif 'rama' in s or 'kmd' in s:
        c = (38.850 + (len(slug) % 5) * 0.1, 8.800 + (len(slug) % 7) * 0.08)
        return {
            'city': 'National Infrastructure Site',
            'region': 'Oromia',
            'regionId': 'oromia',
            'lon': c[0], 'lat': c[1],
            'distanceKm': 60,
            'highway': 'Central Trunk Corridor',
            'transitTime': '~1.0 hr rapid dispatch',
            'fleet': 'HDPE butt-fusion welding and pressure testing units'
        }
    else:
        # Addis Ababa urban / facility projects
        c = COORDS['addis_ababa']
        # slight offset for multiple Addis projects so pins don't overlap completely
        offset_x = ((hash(slug) % 7) - 3) * 0.02
        offset_y = (((hash(slug) // 7) % 7) - 3) * 0.02
        return {
            'city': 'Addis Ababa',
            'region': 'Addis Ababa',
            'regionId': 'addis-ababa',
            'lon': c[0] + offset_x, 'lat': c[1] + offset_y,
            'distanceKm': 0 if 'palace' in s else 8,
            'highway': 'Bole Sub-City / Urban Infrastructure',
            'transitTime': 'Central Dispatch Depot',
            'fleet': 'Urban plumbing & booster electromechanical crew'
        }

mapped_projects = []
for slug, block, comp in matches:
    title_m = re.search(r'title:\s*[\'"]([^\'"]+)[\'"]', block)
    loc_m = re.search(r'location:\s*[\'"]([^\'"]+)[\'"]', block)
    val_m = re.search(r'value:\s*[\'"]([^\'"]+)[\'"]', block)
    type_m = re.search(r'type:\s*[\'"]([^\'"]+)[\'"]', block)
    area_m = re.search(r'area:\s*[\'"]([^\'"]+)[\'"]', block)
    client_m = re.search(r'client:\s*[\'"]([^\'"]+)[\'"]', block)
    img_m = re.search(r'img:\s*[\'"]([^\'"]+)[\'"]', block)
    results_m = re.search(r'results:\s*\[(.*?)\]', block, re.DOTALL)
    
    title = title_m.group(1) if title_m else slug
    loc = loc_m.group(1) if loc_m else ''
    val = val_m.group(1) if val_m else 'Contract Works'
    ptype = type_m.group(1) if type_m else 'Water Engineering'
    area = area_m.group(1) if area_m else 'Scheme'
    client = client_m.group(1) if client_m else 'Commercial Client'
    img = img_m.group(1) if img_m else '/images/projects/shallo-pivot-truss-assembly.webp'
    
    highlights = []
    if results_m:
        raw_items = results_m.group(1).split('\n')
        for item in raw_items:
            clean = item.strip().strip("',\"")
            if clean and not clean.startswith('//'):
                highlights.append(clean)
    if not highlights:
        highlights = [
            f'Turnkey delivery of {ptype}',
            f'Client: {client}',
            f'Certified Grade-1 Water Works execution'
        ]
        
    loc_info = determine_location_info(slug, title, loc, client)
    px, py = project(loc_info['lon'], loc_info['lat'])
    
    mapped_projects.append({
        'id': slug,
        'slug': slug,
        'name': title,
        'city': loc_info['city'],
        'region': loc_info['region'],
        'regionId': loc_info['regionId'],
        'x': px,
        'y': py,
        'value': val,
        'area': area,
        'type': ptype,
        'client': client,
        'image': img,
        'isHQ': (slug == 'pop-up-sprinkler-for-president-palace'),
        'distanceKm': loc_info['distanceKm'],
        'highway': loc_info['highway'],
        'transitTime': loc_info['transitTime'],
        'fleet': loc_info['fleet'],
        'highlights': highlights[:4]
    })

print(f"Generated {len(mapped_projects)} mapped projects:")
regions_count = {}
for p in mapped_projects:
    r = p['region']
    regions_count[r] = regions_count.get(r, 0) + 1

for r, count in regions_count.items():
    print(f"  {r}: {count} projects")

with open('scratch/mapped_projects_all.json', 'w', encoding='utf-8') as f:
    json.dump(mapped_projects, f, indent=2)

print("Saved to scratch/mapped_projects_all.json")
