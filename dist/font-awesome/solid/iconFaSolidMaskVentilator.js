export function iconFaSolidMaskVentilator(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M159.1 176C139.4 219.2 128 264.7 128 300.8c0 15.9 2.2 31.4 6.3 46l-31.8-7.9C70.5 330.9 48 302.1 48 269V184c0-4.4 3.6-8 8-8H159.1zm26-48H56c-30.9 0-56 25.1-56 56v85c0 55.1 37.5 103.1 90.9 116.4l71.3 17.8c22.7 30.5 55.4 54.1 93.8 66.6V393.3c-19.7-16.4-32-40.3-32-66.9c0-49.5 43-134.4 96-134.4c52.5 0 96 84.9 96 134.4c0 26.7-12.4 50.4-32 66.8v76.6c38-12.6 70.6-36 93.5-66.4l71.6-17.9C602.5 372.1 640 324.1 640 269V184c0-30.9-25.1-56-56-56H454.5C419.7 73.8 372.1 32 320 32c-52.6 0-100.2 41.8-134.9 96zm295.6 48H584c4.4 0 8 3.6 8 8v85c0 33-22.5 61.8-54.5 69.9l-31.8 8c4.2-14.7 6.4-30.1 6.4-46.1c0-36.1-11.6-81.6-31.3-124.8zM288 320V512h64V320c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/></svg>`;
}
