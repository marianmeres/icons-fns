export const iconFaSolidDiamond = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M17 215L215 17C225.9 6.1 240.6 0 256 0s30.1 6.1 41 17L495 215c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41z"/></svg>`;
}
