export const iconFaBrandSitrox = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M212.4 0l0 0 235.6 0 0 128-384 0C64 57.6 141.8 .5 212.4 0zm24.8 192l0 0c69.9 .5 146.7 57.6 146.7 128l-173.2 0 0 0C140.9 319.6 64 262.4 64 192l173.3 0zm-1.7 320c70.7-.5 148.4-57.6 148.4-128l-384 0 0 128 235.6 0 0 0z"/></svg>`;
}
