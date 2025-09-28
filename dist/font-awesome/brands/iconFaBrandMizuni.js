export const iconFaBrandMizuni = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM176 359.9c-31.4 10.6-58.8 27.3-80 48.2L96 136c0-22.1 17.9-40 40-40s40 17.9 40 40l0 223.9zM296 350c-12.9-2-26.2-3.1-39.8-3.1-13.8 0-27.2 1.1-40.2 3.1l0-214c0-22.1 17.9-40 40-40s40 17.9 40 40l0 214zm120 57.7c-21.2-20.8-48.6-37.4-80-48L336 136c0-22.1 17.9-40 40-40s40 17.9 40 40l0 271.7z"/></svg>`;
}
