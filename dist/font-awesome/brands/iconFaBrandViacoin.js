export const iconFaBrandViacoin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 32l-64 0-80.7 192-94.5 0-80.8-192-64 0 48 112-48 0 0 48 68.5 0 13.8 32-82.3 0 0 48 102.8 0 89.2 208 89.2-208 102.8 0 0-48-82.3 0 13.8-32 68.5 0 0-48-48 0 48-112zM192 336l-27-64 54 0-27 64z"/></svg>`;
}
