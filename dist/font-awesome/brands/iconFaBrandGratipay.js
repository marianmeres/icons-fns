export const iconFaBrandGratipay = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM374.3 233.7L257.7 391.3 141.3 233.7c-9-12.3-19.7-52 14-74.3 29-18.7 56.4-4.3 70.7 12.3 16.4 18.5 48.1 17.4 63.7 0 14.3-16.6 41.7-31 70.3-12.3 34 22.3 23.3 61.9 14.2 74.3z"/></svg>`;
}
