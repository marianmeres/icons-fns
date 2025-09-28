export const iconFaBrandSistrix = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9-91.9-.1-166.6 75.7-166.6 168.8S74.7 369.8 166.5 369.8c39.8 0 76.3-14.2 105-37.9L417.5 480 448 449zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71 294.6 129.3 294.6 200.9 237.2 330.8 166.5 330.8z"/></svg>`;
}
