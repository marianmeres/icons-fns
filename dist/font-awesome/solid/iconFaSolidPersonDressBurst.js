/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidPersonDressBurst(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M528 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM390.2 384H408v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h16v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h17.8c10.9 0 18.6-10.7 15.2-21.1L546.7 248.1l33.9 56.3c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-53.6-89.2c-20.2-33.7-56.7-54.3-96-54.3H474.2c-39.3 0-75.7 20.6-96 54.3l-53.6 89.2c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l33.9-56.3L375 362.9c-3.5 10.4 4.3 21.1 15.2 21.1zM190.9 18.1C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-5.6-79.4 50.5-7.8 24.4-40.5-55.2-38L315 92.2c3.3-5.7 2.7-12.8-1.4-17.9s-10.9-7.2-17.2-5.3L220.3 92.1l-29.4-74z"/></svg>`;
}
