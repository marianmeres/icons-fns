export function iconFaSolidTurkishLiraSign(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M96 32c17.7 0 32 14.3 32 32V99.3L247.2 65.2c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 165.9v29.4l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 261.9V416h63.8c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480H96c-17.7 0-32-14.3-32-32V280.1l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 213.6V184.1l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 117.6V64c0-17.7 14.3-32 32-32z"/></svg>`;
}
