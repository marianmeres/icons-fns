export function iconBsToggle2On(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1"/><path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0"/></svg>`;
}
