export const iconFaSolidOilCan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M320 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32-80 0-48 0-48 0c-26.5 0-48 21.5-48 48l0 64.8c0 19 11.2 36.2 28.5 43.9l67.5 30L96 368c0 26.5 21.5 48 48 48l259.1 0c18.4 0 35.8-7.9 48-21.7L633.5 187.7c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8L288 160l0-32 32 0zM96 208l0 86.1L48 272.8 48 208l48 0z"/></svg>`;
}
