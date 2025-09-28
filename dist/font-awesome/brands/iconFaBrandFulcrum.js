export const iconFaBrandFulcrum = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M63.8 164.1L28.4 207.7-7 164.1 28.4 120.6 63.8 164.1zM112.2 0l-20.5 198.2-51 57.8 51 57.8 20.5 198.2 0-211.1-41.1-44.9 41.1-44.9 0-211.1zm79.7 164.1l35.4 43.6 35.4-43.6-35.4-43.5-35.4 43.5zm-48.5 47l41.1 44.9-41.1 44.9 0 211.1 20.6-198.2 51-57.8-51-57.8-20.6-198.2 0 211.1z"/></svg>`;
}
