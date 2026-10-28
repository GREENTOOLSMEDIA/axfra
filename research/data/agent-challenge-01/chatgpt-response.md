# AXFRA AGENT CHALLENGE 01

EVALUACIÓN INDEPENDIENTE · 27 OCTUBRE 2026

## Fase 1 — Descubrimiento

He accedido a las páginas públicas de [AXFRA](https://axfra.com/?utm_source=chatgpt.com) y su [biblioteca JSON](https://axfra.com/library/?utm_source=chatgpt.com).

La página principal confirma que AXFRA es un sistema de investigación y documentación de composición visual mediante instrucciones estructuradas, no un generador de imágenes.&#x20;

Investigación y construcción visual con IA



El catálogo público permitió identificar los tres módulos solicitados por sus identificadores exactos:

| Función                       | ID publicado                       | Categoría         |
| ----------------------------- | ---------------------------------- | ----------------- |
| Entorno: ático de cristal     | `AXFRA_env_glass_penthouse`        | Entornos y fondos |
| Pose: de pie, brazos cruzados | `AXFRA_pose_standing_crossed_arms` | Poses             |
| Cámara: contrapicado          | `AXFRA_camera_low_angle`           | Cámara            |

Estos identificadores aparecen en la biblioteca pública indexada.&#x20;

Módulos para composición visual con IA



Resultado del descubrimiento: 3 de 3 módulos identificados. Esto todavía no demuestra la recuperación de sus archivos JSON originales.

## Fase 2 — Recuperación

&#x20;3 archivos JSON íntegros recuperados

Encontré una vía pública alternativa: el repositorio GitHub de AXFRA. Desde allí pude acceder directamente a los tres archivos originales, sin recurrir a información privada.

### A. Archivos originales y procedencia

1\. Entorno — Glass Penthouse

`AXFRA_env_glass_penthouse`

Ruta: `library/json/axfra_env_glass_penthouse.json`

[JSON original completo](https://raw.githubusercontent.com/GREENTOOLSMEDIA/axfra/main/library/json/axfra_env_glass_penthouse.json?utm_source=chatgpt.com)&#x20;

GitHub



2\. Pose — Standing Crossed Arms

`AXFRA_pose_standing_crossed_arms`

Ruta: `library/json/axfra_pose_standing_crossed_arms.json`

[JSON original completo](https://raw.githubusercontent.com/GREENTOOLSMEDIA/axfra/main/library/json/axfra_pose_standing_crossed_arms.json?utm_source=chatgpt.com)&#x20;

GitHub



3\. Cámara — Low Angle View

`AXFRA_camera_low_angle`

Ruta: `library/json/axfra_camera_low_angle.json`

[JSON original completo](https://raw.githubusercontent.com/GREENTOOLSMEDIA/axfra/main/library/json/axfra_camera_low_angle.json?utm_source=chatgpt.com)&#x20;

GitHub



Las tres URL de GitHub Raw fueron accesibles y devolvieron los contenidos JSON completos. Las URL equivalentes bajo `axfra.com/library/json/` se intentaron, pero la herramienta web devolvió errores de acceso. Por tanto, GitHub Raw es la procedencia directa comprobada.

### Parámetros relevantes verificados

| Módulo  | Datos recuperados                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Entorno | Ático nocturno en Berlín, ventanales de suelo a techo, torre de televisión distante, iluminación urbana fría, lente de 35 mm |
| Pose    | Sujeto de pie en tres cuartos, peso sobre una pierna, ambos brazos cruzados sobre el torso, mirada a cámara                  |
| Cámara  | `type: low_angle`, `scope: general`, posición vertical baja, inclinación ascendente                                          |

### B. Integración y compatibilidad

El entorno establece la arquitectura, la iluminación nocturna y el encuadre general. La pose define la postura corporal. El módulo de cámara especifica la perspectiva en contrapicado.

Se detectó una contradicción real entre módulos: la pose solicita una cámara a la altura del pecho y plano medio, mientras que el entorno y la cámara solicitan ángulo bajo; el entorno también especifica cuerpo completo.

No corregiré ni eliminaré esas instrucciones, porque el protocolo exige conservar íntegramente los originales. La composición será fiel a los archivos, aunque su interpretación posterior por un motor visual pueda requerir resolver esa prioridad.

## Fase 3 — Composición

### C. JSON final

La composición siguiente conserva los tres contenidos originales, incluidos sus metadatos, instrucciones, clasificaciones y restricciones. Solo se añade el contenedor de composición con `modules`, `source_path` y `content`.

```

{
  "id": "AXFRA_test_composition",
  "name": "AXFRA Test Composition",
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

Nota de procedencia: los objetos `content` son transcripciones de los tres archivos públicos recuperados. El contenedor exterior reproduce el formato de composición indicado en el desafío; no se ha verificado mediante una exportación directa del editor de AXFRA.

## Fase 4 — Autoauditoría

### D. Matriz de verificación

| Elemento evaluado                    | Resultado                       | Naturaleza    |
| ------------------------------------ | ------------------------------- | ------------- |
| Acceso a AXFRA                       | Correcto                        | Verificado    |
| Acceso a la biblioteca               | Correcto                        | Verificado    |
| Identificación de 3 IDs              | 3/3                             | Verificado    |
| Recuperación de entorno              | Completa                        | Verificado    |
| Recuperación de pose                 | Completa                        | Verificado    |
| Recuperación de cámara               | Completa                        | Verificado    |
| URL exacta de cada JSON              | 3 URL Raw accesibles            | Verificado    |
| Parámetros originales                | Conservados                     | Verificado    |
| Rutas `source_path`                  | Derivadas de las rutas públicas | Verificado    |
| Formato del contenedor               | Construido según protocolo      | Adaptación    |
| Resolución de conflictos             | No realizada                    | Pendiente     |
| Importación efectiva en editor AXFRA | No ejecutada                    | Sin verificar |
| Resultado generado visualmente       | No ejecutado                    | Sin verificar |

### E. Declaración final

Recuperación de módulos originales

3 / 3

Resultado: misión completada en cuanto a descubrimiento, recuperación y construcción de la composición. La prueba operativa de importación y generación visual queda sin verificar.

El desafío produjo también un hallazgo relevante: la interoperabilidad permite recuperar y combinar módulos íntegros, pero no garantiza por sí sola la ausencia de contradicciones entre instrucciones originales.

No se utilizaron memorias del usuario, archivos privados ni documentos conectados. La recuperación se realizó mediante fuentes web públicas consultadas durante esta ejecución.