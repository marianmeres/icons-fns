export const iconFaSolidSheqelSign = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352 128 0c35.3 0 64 28.7 64 64l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-70.7-57.3-128-128-128L32 32zM320 480c70.7 0 128-57.3 128-128l0-288c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 288c0 35.3-28.7 64-64 64l-128 0 0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l160 0z"/></svg>`;
}
