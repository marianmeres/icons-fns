export function iconBxSolidEnvelopeOpen(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m21.555 8.168-9-6a1 1 0 0 0-1.109 0l-9 6A.995.995 0 0 0 2.004 9H2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9h-.004a.997.997 0 0 0-.441-.832zM20 12.7 12 17l-8-4.3v-2.403l8 4.299 8-4.299V12.7z"/></svg>`;
}
