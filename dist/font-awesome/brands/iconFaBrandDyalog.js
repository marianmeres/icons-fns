export const iconFaBrandDyalog = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M16 32l0 119.2 64 0 0-55.2 107.2 0C300.6 96 368 176.2 368 255.9 368 332 309.4 416 187.2 416l-171.2 0 0 64 171.2 0C347.9 480 432 367.3 432 255.9 432 197.2 409.9 142.5 369.7 101.6 324.9 56 261.7 32 187.2 32L16 32z"/></svg>`;
}
