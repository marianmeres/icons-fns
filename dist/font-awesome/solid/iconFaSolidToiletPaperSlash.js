export function iconFaSolidToiletPaperSlash(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-109.7-86C569.9 374 608 291.9 608 192C608 86 565 0 512 0s-96 86-96 192c0 49.1 9.2 93.9 24.4 127.9l-59-46.2c1.6-24.8 2.6-52 2.6-81.6c0-65.5 13.2-142.4 60.2-192H160c-24.8 0-47.4 18.8-64.4 49.6L38.8 5.1zM367.3 385.4L66.5 148.4C64.9 162.4 64 177 64 192c0 101.5-11.7 170.8-23 213.9c-5.1 19.4-10.7 39.9-20.5 57.7c-5.9 9.9-6.1 22.1-.4 32.2S36.5 512 48 512H285.9c22.3 0 45.4-12.1 55.4-36.1c7.4-17.7 17.5-47.2 26-90.6zM544 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64z"/></svg>`;
}
