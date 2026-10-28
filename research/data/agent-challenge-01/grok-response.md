**FASE 1 — DESCUBRIMIENTO**

Biblioteca pública localizada en:

- Interfaz: [https://axfra.com/library/](https://axfra.com/library/)
- Índice JSON: [https://axfra.com/library/axfra_json_library_index.json](https://axfra.com/library/axfra_json_library_index.json) (base_url: [https://axfra.com/library/](https://axfra.com/library/), total_json: 471)
- Guía: [https://axfra.com/library/llms.txt](https://axfra.com/library/llms.txt)

Módulos identificados (únicamente a partir del índice público y verificación de rutas):

| Rol solicitado | ID exacto | Categoría (índice) | Ruta de origen (source_path) | URL pública completa | Acceso JSON completo |
| --- | --- | --- | --- | --- | --- |
| Entorno: ático de cristal | AXFRA_env_glass_penthouse | general (subgroup: luxury) | json/axfra_env_glass_penthouse.json | https://axfra.com/library/json/axfra_env_glass_penthouse.json | Sí |
| Pose: de pie, brazos cruzados | AXFRA_pose_standing_crossed_arms | pose | json/axfra_pose_standing_crossed_arms.json | https://axfra.com/library/json/axfra_pose_standing_crossed_arms.json | Sí |
| Cámara: contrapicado | AXFRA_camera_low_angle | camera | json/axfra_camera_low_angle.json | https://axfra.com/library/json/axfra_camera_low_angle.json | Sí |

**FASE 2 — RECUPERACIÓN**

Contenidos originales recuperados íntegramente (sin inferencias ni modificaciones):

- **Entorno** (AXFRA_env_glass_penthouse): name_es “Ático de cristal”. Incluye environment_block (location: “Berlin penthouse at night”, floor-to-ceiling glass, etc.), framing_block (angle: “low angle from knee height”), lighting, camera_and_style, constraints y engine_params. Mood: “cold, luxurious, refined, nocturnal”.
- **Pose** (AXFRA_pose_standing_crossed_arms): description textual en español que especifica sujeto de pie en tres cuartos, peso en una pierna, ambos brazos cruzados sobre el torso, cabeza girada al lente. Classification: standing / “De pie”.
- **Cámara** (AXFRA_camera_low_angle): name_es “Contrapicado”. Objeto camera_angle con type “low_angle”, vertical_position “low”, description “camera below the subject eye line, tilted upward”, preserve list, etc.

Datos verificados directamente desde las URLs públicas. No se inventaron propiedades.

**FASE 3 — COMPOSICIÓN**

Formato de composición AXFRA obtenido del código público de la librería (makeComposition en [https://axfra.com/library/index.html](https://axfra.com/library/index.html) / raw GitHub): objeto con id, name, meta y array modules, donde cada elemento tiene source_path y content (JSON original íntegro).

**FASE 4 — AUTOAUDITORÍA**

**A. Módulos y rutas originales**

Los tres listados arriba, con URLs exactas y confirmación de acceso completo al JSON.

**B. Integración**

Los tres módulos se agrupan sin alterar sus contenidos ni IDs. El entorno aporta el ático acristalado de lujo (nocturno, cristales de suelo a techo). La pose aporta la postura de pie con brazos cruzados. La cámara aporta el contrapicado (ángulo bajo). No se añaden módulos de identidad física ni otros. El escenario solicitado queda cubierto por la combinación de estos tres originales.

**C. JSON final completo (listo para importar)**

JSON
```
{
  "id": "AXFRA_composition_glass_penthouse_standing_crossed_arms_low_angle",
  "name": "AXFRA Composition: Glass Penthouse + Standing Crossed Arms + Low Angle",
  "meta": {
    "developer": "ALARSI",
    "brand": "AXFRA",
    "system": "AXFRA JSON prompt system"
  },
  "modules": [
    {
      "source_path": "json/axfra_env_glass_penthouse.json",
      "content": {
        "id": "AXFRA_env_glass_penthouse",
        "name": "Glass Penthouse",
        "name_es": "Ático de cristal",
        "mood": "cold, luxurious, refined, nocturnal",
        "palette": [
          "charcoal black",
          "cool gray",
          "glass blue",
          "pale stone",
          "city light white"
        ],
        "meta": {
          "developer": "ALARSI",
          "developer_site": "https://alarsi.com",
          "brand": "AXFRA",
          "brand_site": "https://axfra.com",
          "system": "AXFRA JSON prompt system",
          "version": "1.0",
          "updated": "2026-10-13"
        },
        "environment_block": {
          "location": "Berlin penthouse at night",
          "background": "floor-to-ceiling glass, distant TV tower and cold city grid, dark interior, pale stone floor",
          "elements": "city bokeh, faint silhouette reflection in the glass, one low lamp out of focus"
        },
        "framing_block": {
          "angle": "low angle from knee height",
          "lens": "35mm",
          "frame": "full body, subject centered against the skyline"
        },
        "lighting_block": {
          "lighting": "cool city backlight with a soft frontal key, rim along hair and shoulder, restrained speculars"
        },
        "camera_and_style_block": {
          "camera": "Canon EOS R5, 35mm, low angle, f/2.8, sharp on the eyes, skyline softly separated",
          "style": "Alarsi editorial, cold luxury night portrait, cinematic glass reflections, masterpiece, best quality"
        },
        "constraints_block": {
          "negatives": "no tourist snapshot, no blown windows, no extra people, no background artifacts"
        },
        "engine_params": {
          "stylize": "--stylize 160",
          "version": "--v 6",
          "aspect_ratio": "--ar 3:4",
          "quality": "--q 2",
          "style": "--style raw"
        }
      }
    },
    {
      "source_path": "json/axfra_pose_standing_crossed_arms.json",
      "content": {
        "id": "AXFRA_pose_standing_crossed_arms",
        "name": "Standing Crossed Arms",
        "name_es": "Standing Crossed Arms",
        "meta": {
          "developer": "ALARSI",
          "developer_site": "https://alarsi.com",
          "brand": "AXFRA",
          "brand_site": "https://axfra.com",
          "system": "AXFRA JSON prompt system",
          "version": "1.0"
        },
        "description": "POSE\n\nSujeto de pie en tres cuartos. Peso sobre una pierna. Ambos brazos cruzados sobre el torso: un antebrazo cubre el pecho, el otro baja y la mano se apoya en el costado o la cadera contraria. Hombros un poco alzados por el cruce. Cabeza girada al lente, mirada a cámara.\n\nÁNGULO DE CÁMARA\n\nTres cuartos frontal. Plano medio (cadera o muslo a cabeza). Cámara a altura de pecho. Distancia corta-media. Deben verse los dos brazos cruzados.",
        "source_index": 100,
        "classification": {
          "category": "standing",
          "category_es": "De pie",
          "taxonomy": "AXFRA Poses 1.0"
        }
      }
    },
    {
      "source_path": "json/axfra_camera_low_angle.json",
      "content": {
        "id": "AXFRA_camera_low_angle",
        "name": "Low Angle View",
        "name_es": "Contrapicado",
        "mood": "editorial, photographic, controlled perspective",
        "palette": [
          "neutral"
        ],
        "meta": {
          "developer": "ALARSI",
          "developer_site": "https://alarsi.com",
          "brand": "AXFRA",
          "brand_site": "https://axfra.com",
          "system": "AXFRA JSON prompt system",
          "version": "1.0",
          "updated": "2026-10-13"
        },
        "camera_angle": {
          "enabled": true,
          "type": "low_angle",
          "scope": "general",
          "vertical_position": "low",
          "orientation": "unspecified",
          "orientation_options": [
            "unspecified",
            "subject_front",
            "subject_front_left",
            "subject_left",
            "subject_back_left",
            "subject_back",
            "subject_back_right",
            "subject_right",
            "subject_front_right"
          ],
          "orientation_reference": "Subject left and right mean the anatomical sides of the subject, never the viewer screen sides.",
          "description": "camera below the subject eye line, tilted upward",
          "application": "When scope is general, change only overall camera height/tilt; when scope is subject_relative, select an orientation from orientation_options. Do not rotate the subject to simulate a camera move.",
          "preserve": [
            "subject_identity",
            "subject_proportions",
            "wardrobe",
            "environment_identity",
            "lighting_scheme"
          ]
        }
      }
    }
  ]
}
```

**D. Tabla de auditoría**

| Elemento | Verificado directamente (fuente pública) | Inferido | No recuperado / limitación |
| --- | --- | --- | --- |
| IDs, nombres, categorías, paths, URLs | Sí (índice + fetch de cada JSON) | — | — |
| Contenido íntegro de los 3 JSON | Sí (respuesta completa de cada URL) | — | — |
| Formato de composición (modules + source_path + content) | Sí (código JS público de la librería) | — | — |
| Correspondencia exacta con escenario (ático cristal, de pie brazos cruzados, contrapicado) | Sí (name_es, description, type) | — | — |
| Datos de identidad física | — | — | Ninguno presente ni añadido (regla cumplida) |
| Otros módulos o parámetros inventados | — | — | Ninguno |

**E. Declaración final**

Misión completada **íntegramente**. Los tres módulos originales fueron localizados en la biblioteca pública, su contenido JSON completo fue recuperado de las URLs exactas, y se construyó la composición válida siguiendo el formato AXFRA sin alterar IDs ni inventar datos.
