/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidHelicopterSymbol(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M445.3 224H510C495.6 108.2 403.8 16.4 288 2V66.7C368.4 80.1 431.9 143.6 445.3 224zM510 288H445.3C431.9 368.4 368.4 431.9 288 445.4V510c115.8-14.4 207.6-106.2 222-222zM2 288C16.4 403.8 108.2 495.6 224 510V445.4C143.6 431.9 80.1 368.4 66.7 288H2zm0-64H66.7C80.1 143.6 143.6 80.1 224 66.7V2C108.2 16.4 16.4 108.2 2 224zm206-64c0-17.7-14.3-32-32-32s-32 14.3-32 32V352c0 17.7 14.3 32 32 32s32-14.3 32-32V288h96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H208V160z"/></svg>`;
}
