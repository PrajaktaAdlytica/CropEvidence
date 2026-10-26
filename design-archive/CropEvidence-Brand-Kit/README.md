# CropEvidence — Evidence Layers brand kit

Selected identity: the user's attached Evidence Layers board, 26 October 2026. This selection replaces Margin Notes as the active identity.

## Included

- **svg/**: 12 true outlined SVGs: full horizontal logo, symbol and wordmark, each in olive, ivory, black and white. Transparent backgrounds. All lettering is converted to paths; no font installation required and no embedded raster images.
- **png/**: matching transparent exports. Full logo 2500 px wide; wordmark 2000 px wide; symbol 1024 px wide.
- **print/**: olive PDF and EPS versions of all three marks. Vector artwork, RGB color. For commercial printing, have the printer convert to its requested CMYK/profile; no Pantone equivalence is asserted.
- **web/**: favicon SVG; multi-resolution ICO (16/32/48); PNG favicons (16/32/48); Apple touch icon (180); Android/PWA icons (192/512); safe-area maskable icon (512); manifest and HTML head snippet.
- **reference/**: unchanged selected image, retained for provenance.
- **index.html**: visual asset guide with actual-size favicon specimens and download links.
- **verification.json**: structural and source-silhouette checks.

## Fidelity and construction

The largest logo in the supplied raster board was isolated and traced to cubic vector outlines. The symbol, wordmark and their original relationship were preserved. Raster shading and paper background were removed; fills are normalized to the established dark olive #39472C. This is a vectorization of the selected artwork, not a substitute font or a newly generated design. Slight subpixel contour differences are inherent in tracing a raster source.

The upper large symbol is the canonical master. Smaller generated examples in the original board differ slightly; those differences are not mixed into this kit. Future exports should come from the SVG masters.

## Usage

- Primary: olive logo on ivory #F7F4EA or white. Reverse: ivory/white on olive.
- Maintain clear space around the full logo equal to at least 25% of the symbol's height. These masters are tightly bounded; add clear space in layout rather than stretching the SVG.
- Recommended minimum full-logo width: 180 CSS px. Use symbol-only for favicons and compact navigation. Check the actual placement if using smaller.
- Do not alter the symbol/wordmark proportions, recolor separate leaves, add shadows, skew, outline the lettering or recreate it using a similar font.
- The web icon uses an ivory background for consistent browser-tab visibility. Maskable icon uses ivory artwork on olive and a larger safe area.
- Copy files inside web/ into the website's public root and use web/head-snippet.html. Adjust absolute URLs if the site is served from a subdirectory. Replace any default favicon references. Manifest installation behavior also depends on the eventual application configuration.

## Production note

The files are actual vector/export assets. This kit does not change or deploy the website. SVG/PDF/EPS are suitable for import into design applications; SVG lettering consists of editable paths, not editable font text.
