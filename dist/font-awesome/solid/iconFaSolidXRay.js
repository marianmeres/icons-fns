export function iconFaSolidXRay(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V96C14.3 96 0 81.7 0 64zM256 96c-8.8 0-16 7.2-16 16v32H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48H128c-8.8 0-16 7.2-16 16s7.2 16 16 16H240v70.6L189.1 307c-5.2-2-10.6-3-16.2-3h-2.1c-23.6 0-42.8 19.2-42.8 42.8c0 9.6 3.2 18.9 9.1 26.4l18.2 23.2c9.7 12.4 24.6 19.6 40.3 19.6H316.4c15.7 0 30.6-7.2 40.3-19.6l18.2-23.2c5.9-7.5 9.1-16.8 9.1-26.4c0-23.6-19.2-42.8-42.8-42.8H339c-5.5 0-11 1-16.2 3L272 326.6V256H384c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V176h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16zM208 352a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/></svg>`;
}
