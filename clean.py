import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def clean_name(m):
    name = m.group(1)
    name = re.sub(r'\s+\+', '+', name)
    name = re.sub(r'\s+-\s+', '-', name)
    return f"name: '{name}',"

content = re.sub(r"name:\s*'([^']+)',", clean_name, content)

def clean_desc(m):
    desc = m.group(1)
    
    desc = re.sub(r'^\((.*?)\)\s*FOR FOLIAR SPRAY$', r'\1 for Foliar Spray', desc, flags=re.IGNORECASE)
    
    desc = re.sub(r'\bFOR FOLIAR SPRAY\b', 'for Foliar Spray', desc)
    desc = re.sub(r'\bFOR SOIL APPLICATION\b', 'for Soil Application', desc)
    desc = re.sub(r'\bSOIL APPLICATION\b', 'Soil Application', desc)
    desc = re.sub(r'\bBIOSTIMULANT\b', 'Biostimulant', desc)
    desc = re.sub(r'\bMICRONUTRIENT FERTILIZER\b', 'Micronutrient Fertilizer', desc)
    
    desc = re.sub(r'\bBORAX \(SODIUM TETRA BORATE\)\b', 'Borax (Sodium Tetra Borate)', desc)
    desc = re.sub(r'\bZINC SULPHATE\b', 'Zinc Sulphate', desc)
    desc = re.sub(r'\bHUMIC ACID\b', 'Humic Acid', desc)
    desc = re.sub(r'\bCALCIUM NITRATE\b', 'Calcium Nitrate', desc)
    
    desc = desc.replace('For Foliar Application', 'for Foliar Application')
    desc = desc.replace('For Soil Application', 'for Soil Application')
    desc = desc.replace('For crops and plants', 'for Crops and Plants')
    desc = desc.replace('For Foliar Spray', 'for Foliar Spray')
    
    desc = desc.replace('Sulphate-(Mg-9.5%)', 'Sulphate (Mg-9.5%)')
    
    desc = desc.replace('(Foliar Application)', 'Foliar Application')
    
    desc = desc.replace('Fe- EDTA', 'Fe-EDTA')
    
    return f"shortDescription: '{desc}',"

content = re.sub(r"shortDescription:\s*'([^']+)',", clean_desc, content)

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
