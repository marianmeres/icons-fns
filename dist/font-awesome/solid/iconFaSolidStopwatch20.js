export function iconFaSolidStopwatch20(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H176zM288 204c28.7 0 52 23.3 52 52v96c0 28.7-23.3 52-52 52s-52-23.3-52-52V256c0-28.7 23.3-52 52-52zm-12 52v96c0 6.6 5.4 12 12 12s12-5.4 12-12V256c0-6.6-5.4-12-12-12s-12 5.4-12 12zM159.5 244c-5.4 0-10.2 3.5-11.9 8.6l-.6 1.7c-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3l.6-1.7c7.2-21.5 27.2-35.9 49.8-35.9c29 0 52.5 23.5 52.5 52.5v2.2c0 13.4-4.9 26.4-13.8 36.4l-39 43.9c-6.2 7-10 15.7-10.9 24.9H192c11 0 20 9 20 20s-9 20-20 20H128c-11 0-20-9-20-20V368.3c0-20.6 7.5-40.4 21.2-55.8l39-43.9c2.4-2.7 3.7-6.2 3.7-9.8v-2.2c0-6.9-5.6-12.5-12.5-12.5z"/></svg>`;
}
