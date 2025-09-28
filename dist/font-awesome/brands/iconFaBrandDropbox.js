export const iconFaBrandDropbox = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.4 116.3l-132 84.3 132 84.3-132 84.3-132.4-85.1 132.3-84.3-132.3-83.5 132.3-84.3 132.1 84.3zM155.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zM288.4 284.1l132-84.3-132-83.6 131.3-84.2 132.3 84.3-132.3 84.3 132.3 84.2-132.3 84.3-131.3-85z"/></svg>`;
}
