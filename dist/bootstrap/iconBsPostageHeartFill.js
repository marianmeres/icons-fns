export function iconBsPostageHeartFill(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M4.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM8 11C2.175 7.236 6.336 4.31 8 5.982 9.664 4.309 13.825 7.236 8 11"/><path d="M4.5 0a1 1 0 0 1-2 0H1v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 1 1 0 2v1a1 1 0 1 1 0 2v1h1.5a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0H15v-1a1 1 0 1 1 0-2v-1a1 1 0 1 1 0-2V9a1 1 0 1 1 0-2V6a1 1 0 1 1 0-2V3a1 1 0 1 1 0-2V0h-1.5a1 1 0 1 1-2 0h-1a1 1 0 1 1-2 0h-1a1 1 0 0 1-2 0zM4 14a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"/></svg>`;
}
