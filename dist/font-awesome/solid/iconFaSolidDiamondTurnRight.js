export const iconFaSolidDiamondTurnRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M215 17L17 215C6.1 225.9 0 240.6 0 256s6.1 30.1 17 41L215 495c10.9 10.9 25.6 17 41 17s30.1-6.1 41-17L495 297c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L297 17C286.1 6.1 271.4 0 256 0s-30.1 6.1-41 17zM385 257l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-78.1 0c-13.3 0-24 10.7-24 24l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40c0-39.8 32.2-72 72-72l78.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9z"/></svg>`;
}
