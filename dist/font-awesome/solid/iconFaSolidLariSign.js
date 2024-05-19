/*@__PURE__*/
export function iconFaSolidLariSign(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M144 32c17.7 0 32 14.3 32 32V96.7c5.3-.4 10.6-.7 16-.7s10.7 .2 16 .7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v49.4c54.9 25.2 95.8 75.5 108.2 136.2c3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.1-29.9-22.5-55.9-45.4-74.3V256c0 17.7-14.3 32-32 32s-32-14.3-32-32V161c-5.2-.7-10.6-1-16-1s-10.8 .3-16 1v95c0 17.7-14.3 32-32 32s-32-14.3-32-32V188.1C82.7 211.5 64 247.6 64 288c0 70.7 57.3 128 128 128H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H192 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48.9C18.5 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6V64c0-17.7 14.3-32 32-32z"/></svg>`;
}
