/*@__PURE__*/
export function iconFaSolidTruckPlane(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M200 0c-30.6 0-56 54.7-56 86.1V192.5L7.8 274.3C2.9 277.2 0 282.4 0 288v64c0 5.1 2.4 9.8 6.4 12.8s9.3 3.9 14.1 2.5l123.4-37v81.2l-50 40c-3.8 3-6 7.6-6 12.5v32c0 5.1 2.5 10 6.6 13s9.5 3.8 14.4 2.2L200 480.9 290.4 511c-1.6-4.7-2.4-9.8-2.4-15V463.4c-18.2-10.5-30.7-29.7-31.9-51.8l-.1-.1V408 325.5 184l0-1.1 0 0V86.1C256 54.7 231.5 0 200 0zm88 176V400c0 20.9 13.4 38.7 32 45.3V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V448H544v40c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V445.3c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zm79.8 78.7c3.3-8.7 11.2-14.7 20.5-14.7H539.7c9.2 0 17.2 6 20.5 14.7L576 304H352l15.8-49.3zM568 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM336 376a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>`;
}
