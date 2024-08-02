export const iconFaSolidFlorinSign = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M314.7 32c-38.8 0-73.7 23.3-88.6 59.1L170.7 224 64 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0L98.9 396.3c-5 11.9-16.6 19.7-29.5 19.7L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l37.3 0c38.8 0 73.7-23.3 88.6-59.1L213.3 288 320 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 45.1-108.3c5-11.9 16.6-19.7 29.5-19.7L352 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-37.3 0z"/></svg>`;
}
