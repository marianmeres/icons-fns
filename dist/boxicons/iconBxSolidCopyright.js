export function iconBxSolidCopyright(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10 10-4.58 10-10S17.421 2 12 2zm0 13c.992 0 1.85-.265 2.293-.708l1.414 1.415C14.581 16.832 12.901 17 12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5c.901 0 2.582.168 3.707 1.293l-1.414 1.414C13.851 9.264 12.993 9 12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3z"/></svg>`;
}
