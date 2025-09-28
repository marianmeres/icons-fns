export const iconFaBrandYahoo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M223.8 141.1l-56.7 143.2-56-143.2-96.1 0 105.8 249.1-38.6 89.8 94.2 0 140.9-338.9-93.6 0zM329.2 276.9a58.2 58.2 0 1 0 0 116.4 58.2 58.2 0 1 0 0-116.4zM394.7 32l-93 223.5 104.8 0 92.6-223.5-104.4 0z"/></svg>`;
}
