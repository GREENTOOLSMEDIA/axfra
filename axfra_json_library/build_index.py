#!/usr/bin/env python3
"""
AXFRA JSON Library — Generador de índice (versión simple)
=========================================================
Estructura esperada:

axfra_json_library/
├── axfra_json_library.html
├── axfra_json_library_index.json   ← se regenera
├── json/                           ← todos los .json sueltos aquí
└── thumbs/                         ← miniaturas 1:1 (mismo nombre que el id)

Uso:
  1. Sube los .json a la carpeta json/
  2. Sube las miniaturas a thumbs/ (nombre = id del JSON, ej: AXFRA_expression_anger.jpg)
  3. Ejecuta: python3 build_index.py
  4. Sube el index.json actualizado (o haz commit si usas git)

El HTML lee el índice y busca la miniatura por id.
"""

import json
from pathlib import Path
from collections import defaultdict

# Ajusta si tu estructura local es distinta
ROOT = Path(__file__).parent / "axfra_json_library"
JSON_DIR = ROOT / "json"
THUMBS_DIR = ROOT / "thumbs"
INDEX_FILE = ROOT / "axfra_json_library_index_v001.json"
BASE_URL = "https://axfra.com/axfra_json_library/"

def build():
    if not JSON_DIR.exists():
        print(f"No existe {JSON_DIR}. Créala y pon los JSON ahí.")
        return

    THUMBS_DIR.mkdir(exist_ok=True)

    files_info = []
    categories = defaultdict(int)
    missing_thumbs = []

    for path in sorted(JSON_DIR.glob("*.json")):
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"  ✗ {path.name} — JSON inválido: {e}")
            continue

        jid = data.get("id") or path.stem
        # Categoría simple: usa el campo category o un fallback
        cat = data.get("category") or data.get("piece_family") or "general"
        cat = str(cat).strip().lower().replace(" ", "_")

        # Miniatura: busca por id (jpg, jpeg, png, webp)
        thumb_rel = None
        for ext in (".jpg", ".jpeg", ".png", ".webp"):
            candidate = THUMBS_DIR / f"{jid}{ext}"
            if candidate.exists():
                thumb_rel = f"thumbs/{candidate.name}"
                break
        if not thumb_rel:
            missing_thumbs.append(jid)

        entry = {
            "id": jid,
            "name": data.get("name"),
            "name_es": data.get("name_es"),
            "category": cat,
            "path": f"json/{path.name}",
            "url": BASE_URL + f"json/{path.name}",
            "thumb": (BASE_URL + thumb_rel) if thumb_rel else None,
        }
        files_info.append(entry)
        categories[cat] += 1

    index = {
        "library": "AXFRA JSON Library",
        "meta": {
            "developer": "ALARSI",
            "developer_site": "https://alarsi.com",
            "brand": "AXFRA",
            "brand_site": "https://axfra.com",
            "system": "AXFRA JSON prompt system",
        },
        "base_url": BASE_URL,
        "total_json": len(files_info),
        "categories": dict(sorted(categories.items())),
        "files": files_info,
    }

    INDEX_FILE.write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Índice generado: {len(files_info)} archivos")
    print(f"Categorías: {len(categories)}")
    if missing_thumbs:
        print(f"\nMiniaturas faltantes ({len(missing_thumbs)}):")
        for m in missing_thumbs[:20]:
            print(f"  - {m}.jpg")
        if len(missing_thumbs) > 20:
            print(f"  ... y {len(missing_thumbs)-20} más")
    else:
        print("Todas las miniaturas están presentes.")

if __name__ == "__main__":
    build()
