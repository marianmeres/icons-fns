export const iconFaSolidCodeCommit = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C430 361 365.4 416 288 416S146 361 131.2 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l99.2 0C146 151 210.6 96 288 96s142 55 156.8 128l99.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-99.2 0z"/></svg>`;
}
