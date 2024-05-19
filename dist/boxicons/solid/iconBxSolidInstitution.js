export function iconBxSolidInstitution(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m21.857 8.485-3-5A.997.997 0 0 0 18 3h-4.586l-.707-.707a.999.999 0 0 0-1.414 0L10.586 3H6a.997.997 0 0 0-.857.485l-3 5A1.001 1.001 0 0 0 2.002 9H2v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9h-.002c0-.178-.046-.356-.141-.515zM20 18h-6v-4h-4v4H4v-8h2.414l.293-.293 2-2L12 4.414l4.293 4.293 1 1 .293.293H20v8z"/><circle cx="11.895" cy="9.895" r="2.105"/><path d="M6 12h2v3H6zm10 0h2v3h-2z"/></svg>`;
}
