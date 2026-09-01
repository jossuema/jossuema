# MangroveNet (2024)

Mapping and monitoring mangrove ecosystems with a U²-Net model on satellite
imagery.

- **Source:** [`../sources/cv-2026-08.md`](../sources/cv-2026-08.md)
- **Area:** remote sensing, semantic segmentation, environmental monitoring

## What it is

A deep learning model based on **U²-Net** for mangrove segmentation using
satellite imagery from **Landsat 7, Landsat 8 and Sentinel-2**.

## What I did

- Preprocessed satellite data, removing noise (clouds, shadows) using
  **CFMASK**.
- Optimized U²-Net for **multispectral** segmentation with RGB, NIR, SWIR-1
  and SWIR-2 bands.

## Why it matters

Mangroves are critical coastal ecosystems in Ecuador; automated mapping from
free satellite imagery enables low-cost monitoring of their extent over time.

## Reuse notes

- Good flagship story for remote sensing / environmental ML applications.
- Pairs naturally with [TreeSeg-ALS](treeseg-als.md) as an "environmental
  monitoring with CV" narrative.

TODO(jossuema): repo link, dataset details, metrics (IoU/F1), any report or
poster produced.
