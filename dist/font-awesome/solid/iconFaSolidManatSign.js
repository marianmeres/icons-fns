export const iconFaSolidManatSign = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M192 32c-13.3 0-24 10.7-24 24l0 41.5C73.3 109.3 0 190.1 0 288L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-62.5 44.8-114.5 104-125.8L168 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-293.8c59.2 11.2 104 63.3 104 125.8l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-97.9-73.3-178.7-168-190.5L216 56c0-13.3-10.7-24-24-24z"/></svg>`;
}
