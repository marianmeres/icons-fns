export const iconFaBrandNimblr = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M246.6 353.3a27 27 0 1 1 0-54 27 27 0 1 1 0 54zm-79.4-27a27.1 27.1 0 1 1 -54.3 0 27.1 27.1 0 1 1 54.3 0zM191.8 159C157 159 89.4 178.8 59.2 227L14 0 14 335.5C14 433.1 93.6 512 191.8 512S369.5 433 369.5 335.5 290.1 159 191.8 159zm0 308.1c-73.3 0-132.5-58.9-132.5-131.6s59.2-131.6 132.5-131.6 132.5 58.9 132.5 131.5-59.3 131.6-132.5 131.6l0 .1z"/></svg>`;
}
