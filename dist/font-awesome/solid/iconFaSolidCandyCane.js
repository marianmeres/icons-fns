/*@__PURE__*/
export function iconFaSolidCandyCane(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M348.8 131.5c3.7-2.3 7.9-3.5 12.2-3.5c12.7 0 23 10.3 23 23v5.6c0 9.9-5.1 19.1-13.5 24.3L30.1 393.7C.1 412.5-9 451.9 9.7 481.9s58.2 39.1 88.2 20.4L438.4 289.5c45.8-28.6 73.6-78.8 73.6-132.8V151C512 67.6 444.4 0 361 0c-28.3 0-56 8-80.1 23L254.1 39.7c-30 18.7-39.1 58.2-20.4 88.2s58.2 39.1 88.2 20.4l26.8-16.8zM298.4 49.8c9.2-5.7 19.1-10.1 29.4-13.1L348 97.5c-5.7 1.4-11.2 3.7-16.3 6.8l-12.6 7.9L298.4 49.8zm88.5 52.7l46.2-46.2c8.5 6.5 16.1 14.1 22.6 22.6l-46.2 46.2c-5.1-9.6-13-17.5-22.6-22.6zm28.9 59.3l61.6 20.5c-2.2 10.5-5.8 20.7-10.5 30.2l-62-20.7c6.2-8.8 10.1-19.1 11-30.1zm-86.1 82.5l60.4 37.7-30.2 18.9-60.4-37.7 30.2-18.9zm-107.2 67l60.4 37.7-30.2 18.9-60.4-37.7 30.2-18.9zM119.3 375.7l60.4 37.7-30.2 18.9L89.1 394.6l30.2-18.9z"/></svg>`;
}
