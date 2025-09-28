export const iconFaBrandMix = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 64L0 412.9c0 56.2 88 58.1 88 0l0-238.6c7.9-52.9 88-50.4 88 6.5l0 175.3c0 57.9 96 58 96 0L272 240c5.3-54.7 88-52.5 88 4.3l0 23.8c0 59.9 88 56.6 88 0L448 64 0 64z"/></svg>`;
}
