export function iconFaSolidBlenderPhone(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M224 352L196.8 52.3C194.2 24.2 216.3 0 244.6 0H534.1c21.1 0 36.4 20.1 30.9 40.4L558.5 64H400c-8.8 0-16 7.2-16 16s7.2 16 16 16H549.8l-17.5 64H400c-8.8 0-16 7.2-16 16s7.2 16 16 16H523.6l-17.5 64H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h97.5L480 352H224zm-16 32H496c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V432c0-26.5 21.5-48 48-48zm144 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM147.5 30.7c10.8 6.7 15.3 21 10.6 33.4l-22 57.8c-4.2 10.9-14.5 17.6-25.3 16.4l-33.3-3.6c-13.6 42.2-13.6 88.4 0 130.7l33.3-3.6c10.9-1.2 21.2 5.5 25.3 16.4l22 57.8c4.7 12.4 .2 26.7-10.6 33.4l-44 27.2c-9.7 6-21.9 4.2-29.8-4.3C-24.6 286-24.6 114 73.7 7.8C81.6-.7 93.8-2.5 103.5 3.5l44 27.2z"/></svg>`;
}
