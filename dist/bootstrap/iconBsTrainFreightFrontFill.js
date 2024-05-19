export function iconBsTrainFreightFrontFill(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M5.736 0a1.5 1.5 0 0 0-.67.158L1.828 1.776A1.5 1.5 0 0 0 1 3.118v5.51l2-.6V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.028l2 .6v-5.51a1.5 1.5 0 0 0-.83-1.342L10.936.158A1.5 1.5 0 0 0 10.264 0zM15 9.672l-5.503-1.65A.5.5 0 0 0 9.353 8H8.5v8h4a2.5 2.5 0 0 0 2.5-2.5zM7.5 16V8h-.853a.5.5 0 0 0-.144.021L1 9.672V13.5A2.5 2.5 0 0 0 3.5 16zm-1-14h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1M12 5v2.728l-2.216-.665A1.5 1.5 0 0 0 9.354 7H8.5V5zM7.5 5v2h-.853a1.5 1.5 0 0 0-.431.063L4 7.728V5zm-4 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m9 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>`;
}
