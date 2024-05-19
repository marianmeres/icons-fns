export function iconBxSolidDizzy(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8 12.414l-1.293 1.293-1.414-1.414L6.586 11 5.293 9.707l1.414-1.414L8 9.586l1.293-1.293 1.414 1.414L9.414 11l1.293 1.293-1.414 1.414L8 12.414zM14 18h-4v-2h4v2zm4.707-5.707-1.414 1.414L16 12.414l-1.293 1.293-1.414-1.414L14.586 11l-1.293-1.293 1.414-1.414L16 9.586l1.293-1.293 1.414 1.414L17.414 11l1.293 1.293z"/></svg>`;
}
