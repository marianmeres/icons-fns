export function iconBxSolidTrophy(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.8 6.91 4.82 7A6 6 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09A6 6 0 0 0 17.18 15c3-.1 4.82-2.7 4.82-7V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.22 12.08 4 9.3 4 8zm14 4.83V6h2v2c0 1.3-.22 4.08-2 4.83z"/></svg>`;
}
