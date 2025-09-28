export const iconFaBrandMaxcdn = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M461.1 442.7l-97.4 0 51.9-242.7c2.3-10.2 .9-19.5-4.4-25.7-5-6.1-13.7-9.6-24.2-9.6l-49.3 0-59.5 278-97.4 0 59.5-278-83.4 0-59.5 278-97.4 0 59.5-278-44.6-95.4 372.1 0c39.4 0 75.3 16.3 98.3 44.9 23.3 28.6 31.8 67.4 23.6 105.9L461.1 442.7z"/></svg>`;
}
