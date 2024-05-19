export function iconFaSolidBugs(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M164.5 107.4l33.4-73.5c5.5-12.1 .1-26.3-11.9-31.8s-26.3-.1-31.8 11.9L128 71.7 101.9 14.1C96.4 2 82.1-3.3 70.1 2.1S52.7 21.9 58.1 33.9l33.4 73.5c-10.2 7.1-18.2 17-22.9 28.6h-17l-4.1-20.7c-2.6-13-15.2-21.4-28.2-18.8S-2.1 111.7 .5 124.7l8 40C10.7 175.9 20.6 184 32 184H64v23.3l-37.8 9.5c-9.5 2.4-16.6 10.2-17.9 19.9l-8 56c-1.9 13.1 7.2 25.3 20.4 27.2s25.3-7.2 27.2-20.4l5.7-40 18.4-4.6C82.7 274.6 103.8 288 128 288s45.3-13.4 56.1-33.2l18.4 4.6 5.7 40c1.9 13.1 14 22.2 27.2 20.4s22.2-14 20.4-27.2l-8-56c-1.4-9.7-8.5-17.5-17.9-19.9L192 207.3V184h32c11.4 0 21.3-8.1 23.5-19.3l8-40c2.6-13-5.8-25.6-18.8-28.2s-25.6 5.8-28.2 18.8L204.3 136h-17c-4.7-11.6-12.7-21.5-22.9-28.6zM496 286.5l65.6-47c10.8-7.7 13.3-22.7 5.6-33.5s-22.7-13.3-33.5-5.6l-51.4 36.8 6.1-62.9c1.3-13.2-8.4-24.9-21.6-26.2s-24.9 8.4-26.2 21.6L432.8 250c-12.3 1-24.2 5.6-34.1 13.3L384 254.8l6.8-20c4.2-12.6-2.5-26.2-15-30.4s-26.2 2.5-30.4 15l-13.1 38.6c-3.7 10.8 .8 22.8 10.7 28.5l27.7 16L359 322.7 321.5 312c-9.4-2.7-19.5 .6-25.5 8.3l-34.9 44.5c-8.2 10.4-6.4 25.5 4.1 33.7s25.5 6.4 33.7-4.1l25-31.8 18.2 5.2c-.5 22.6 11 44.7 32 56.8s45.9 11 65.2-.7l13.6 13.2-15.1 37.5c-4.9 12.3 1 26.3 13.3 31.2s26.3-1 31.2-13.3L503.5 440c3.6-9.1 1.4-19.4-5.6-26.2l-28-27.1 11.6-20.1 27.7 16c9.9 5.7 22.5 3.7 30-4.9L566.2 347c8.7-10 7.8-25.1-2.2-33.9s-25.1-7.8-33.9 2.2l-13.9 15.9-14.7-8.5c1.7-12.4-.2-25-5.5-36.2z"/></svg>`;
}
