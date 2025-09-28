export const iconFaBrandElementor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M.5 256c0 141 113.6 255 254.6 255 142 0 256-114 256-255 0-140-114-253.9-256-253.9-141 0-254.6 113.9-254.6 253.9zM192.1 150l0 213-43 0 0-213 43 0zm42 0l128 0 0 43-128 0 0-43zm128 85l0 43-128 0 0-43 128 0zm-128 85l128 0 0 43-128 0 0-43z"/></svg>`;
}
