export function iconBxRegularFork(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m14.47 13.77-1.41-1.42 5.66-5.65-1.42-1.42-5.65 5.66-1.42-1.41 5.66-5.66-1.42-1.42-6.36 6.37a3 3 0 0 0 0 4.24l.71.71-6.37 6.36 1.42 1.42 6.36-6.37.71.71a3 3 0 0 0 4.24 0l6.37-6.36-1.42-1.42z"/></svg>`;
}
