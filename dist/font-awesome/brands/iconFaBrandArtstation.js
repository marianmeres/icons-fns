export const iconFaBrandArtstation = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M2.1 377.4l43 74.3c4.3 8.5 10.8 15.7 18.9 20.7s17.4 7.6 27 7.6l285.4 0-59.2-102.6-315.1 0zM501.9 350L335.7 59.3c-4.4-8.2-10.9-15.1-18.9-20S299.7 32 290.4 32l-88.4 0 257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275.2 304.5l-115.5-200-115.5 200 231 0z"/></svg>`;
}
