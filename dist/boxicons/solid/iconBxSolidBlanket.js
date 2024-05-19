export function iconBxSolidBlanket(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h12c1.654 0 3-1.346 3-3s-1.346-3-3-3H6v2h13a1 1 0 0 1 0 2H7c-1.654 0-3-1.346-3-3s1.346-3 3-3h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 13h.003L4 13.002V13z"/></svg>`;
}
