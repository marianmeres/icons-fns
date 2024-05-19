/*@__PURE__*/
export function iconFaSolidPersonSkating(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 128c0-17.7 14.3-32 32-32H319.4c43.6 0 64.6 53.4 32.8 83.1l-74.4 69.4 60.2 60.2c9 9 14.1 21.2 14.1 33.9V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V349.3l-77.9-77.8c-26.6-26.6-24.6-70.3 4.3-94.4l20.4-17H160c-17.7 0-32-14.3-32-32zM81.4 353.4l86.9-86.9c4.6 10 11 19.3 19.3 27.5l21.8 21.8-82.7 82.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3zm322.5 95.1c8.6 2.1 13.8 10.8 11.6 19.4l-.4 1.7c-6.2 24.9-28.6 42.4-54.3 42.4H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h88.8c11 0 20.6-7.5 23.3-18.2l.4-1.7c2.1-8.6 10.8-13.8 19.4-11.6zM135.2 478.3l-6.2 3.1c-21.6 10.8-47.6 6.6-64.6-10.5L4.7 411.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l59.6 59.6c7.3 7.3 18.5 9.1 27.7 4.5l6.2-3.1c7.9-4 17.5-.7 21.5 7.2s.7 17.5-7.2 21.5z"/></svg>`;
}
