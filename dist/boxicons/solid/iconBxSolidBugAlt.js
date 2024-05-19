export function iconBxSolidBugAlt(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m18 5.414 1.707-1.707-1.414-1.414-1.563 1.562C15.483 2.708 13.824 2 12 2s-3.483.708-4.73 1.855L5.707 2.293 4.293 3.707 6 5.414A6.937 6.937 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.141 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.937 6.937 0 0 0-1-3.586zM15 15H9v-2h6v2zm0-4H9V9h6v2z"/></svg>`;
}
