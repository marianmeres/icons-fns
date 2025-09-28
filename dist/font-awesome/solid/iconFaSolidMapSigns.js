export const iconFaSolidMapSigns = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256.4 0c-17.7 0-32 14.3-32 32l0 32-160 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l160 0 0 64-153.4 0c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7l153.4 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 160 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-160 0 0-64 153.4 0c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7l-153.4 0 0-32c0-17.7-14.3-32-32-32z"/></svg>`;
}
