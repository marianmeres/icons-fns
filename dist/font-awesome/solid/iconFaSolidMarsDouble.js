export function iconFaSolidMarsDouble(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l33.4 33.4L275.8 159c-28.4-19.5-62.7-31-99.8-31C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L407 185c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312zm88 48h0v0l0 0zM64 304a112 112 0 1 1 224 0A112 112 0 1 1 64 304zM368 480c97.2 0 176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L599 185c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H504c-9.7 0-18.5 5.8-22.2 14.8c-1.2 2.9-1.8 6-1.8 9l0 .2v.2c0 6.2 2.5 12.2 7 16.8l33.4 33.4L480 146.7V168c0 22.6-13.6 43.1-34.6 51.7c-.8 .3-1.7 .7-2.5 1C465.7 241.2 480 270.9 480 304c0 61.9-50.1 112-112 112c-5.4 0-10.8-.4-16-1.1c-12.9 20.4-29.1 38.3-48.1 53.1c19.8 7.8 41.4 12 64 12z"/></svg>`;
}
