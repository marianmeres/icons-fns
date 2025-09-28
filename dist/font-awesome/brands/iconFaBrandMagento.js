export const iconFaBrandMagento = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M445.9 127.9l0 256.1-63.4 36.5 0-255.8-158.5-91.6-158.6 91.6 .4 255.9-63.3-36.6 0-255.9 221.9-128.1 221.5 127.9zM255.8 420.5l-31.6 18.4-31.8-18.2 0-256-63.3 36.6 .1 255.9 94.9 54.9 95.1-54.9 0-256-63.4-36.6 0 255.9z"/></svg>`;
}
