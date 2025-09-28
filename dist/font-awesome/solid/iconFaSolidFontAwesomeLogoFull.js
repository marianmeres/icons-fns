export const iconFaSolidFontAwesomeLogoFull = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.7 96C106.3 86.8 116 70.5 116 52 116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 419 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4 0-3.7-.8-7.3-2.3-10.7L432 272 493.7 133.1c1.5-3.4 2.3-7 2.3-10.7 0-14.6-11.8-26.4-26.4-26.4L91.7 96z"/></svg>`;
}
