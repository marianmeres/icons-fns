export const iconFaBrandDochub = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M413.9 160L272 160 272 19.6 413.9 160zM320 192l0 130c0 66.8-36.5 100.1-113.3 100.1l-94.7 0 0-337.3 94.7 0c12 0 23.1 .8 33.1 2.5l0-84C228.9 1.1 217.4 0 205.2 0L16 0 16 512 205.2 512C345.7 512 416 447.4 416 318.1l0-126.1-96 0z"/></svg>`;
}
