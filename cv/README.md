# CV

Versiones de la hoja de vida. El contenido de todas debe ser trazable a
[`../knowledge/sources/cv-2026-08.md`](../knowledge/sources/cv-2026-08.md).

| Archivo | Idioma | Uso | Fuente |
|---|---|---|---|
| [`cv.pdf`](cv.pdf) | Inglés | CV maestro: becas internacionales, investigación, industria | — (PDF original) |
| [`cv-bootcamp-legislativo-2026-es.pdf`](cv-bootcamp-legislativo-2026-es.pdf) | Español | Boot Camp Legislativo 2026, Asamblea Nacional del Ecuador | [`.tex`](cv-bootcamp-legislativo-2026-es.tex) |

## Compilar la versión en español

```bash
cd cv && pdflatex cv-bootcamp-legislativo-2026-es.tex
```

Requiere una instalación de LaTeX con `titlesec`, `enumitem`, `lmodern`,
`geometry`, `hyperref` y `babel-spanish`.

## Variantes

Cada convocatoria puede necesitar un reordenamiento distinto. La lógica de
adaptación de cada versión se documenta en
[`../knowledge/applications/`](../knowledge/applications/), no en este
directorio. Al crear una variante nueva, parte del `.tex` más cercano y
registra las decisiones en el archivo de la postulación.

> El PDF servido en el sitio web (`website/public/cv.pdf`) es una copia del
> CV maestro en inglés — actualiza ambos a la vez.
