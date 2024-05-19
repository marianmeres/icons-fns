export function iconBxRegularPopsicle(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M15 2a7 7 0 0 0-4.94 2l-7.78 7.82a1 1 0 0 0 0 1.41l3.54 3.54-3.54 3.53 1.42 1.42 3.53-3.54 3.54 3.54a1 1 0 0 0 1.41 0L20 13.94A7 7 0 0 0 15 2zm3.54 10.54-7.07 7.06-2.82-2.83-1.42-1.42-2.83-2.83 7.07-7.07a5 5 0 0 1 7.08 7.08z"/></svg>`;
}
