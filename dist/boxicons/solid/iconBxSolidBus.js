export function iconBxSolidBus(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M21 6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v6c0 .734.406 1.373 1 1.721V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 21 18v-6h1V9h-1V6.021zM9 4h6v2H9V4zM6.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 18zm4.5-5H5V8h6v5zm6.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17.5 18zm1.5-5h-6V8h6v5z"/></svg>`;
}
