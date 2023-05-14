export function iconBxSolidSkull(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C5.505 2 2 6.637 2 11c0 2.129 1.009 3.979 3 5.508V21h3v-3h2v3h4v-3h2v3h3v-4.493c1.991-1.528 3-3.379 3-5.507 0-4.363-3.505-9-10-9zM8 13c-1.121 0-2-1.098-2-2.5S6.879 8 8 8s2 1.098 2 2.5S9.121 13 8 13zm8 0c-1.121 0-2-1.098-2-2.5S14.879 8 16 8s2 1.098 2 2.5-.879 2.5-2 2.5z"/></svg>`;
}
