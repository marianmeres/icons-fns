export function iconBxRegularBorderLeft(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M11 3h2v2h-2zm4 0h2v2h-2zM7 3h2v2H7zm12 0h2v2h-2zm0 8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm0 12h2v2h-2zm-4 0h2v2h-2zm-8 0h2v2H7zm4 0h2v2h-2zm0-4h2v2h-2zm0-8h2v2h-2zm4 4h2v2h-2zm-8 0h2v2H7zm4 0h2v2h-2zM3 5v16h2V3H3z"/></svg>`;
}
