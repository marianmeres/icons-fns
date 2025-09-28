export const iconFaSolidY = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6L160 298.3 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-149.7 154-215.7c10.3-14.4 6.9-34.4-7.4-44.6S336.2 31 326 45.4L192 232.9 58 45.4z"/></svg>`;
}
