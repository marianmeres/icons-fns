export function iconBxRegularWinkSmile(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M14.828 14.828a3.988 3.988 0 0 1-2.02 1.09 4.108 4.108 0 0 1-1.616 0 4.103 4.103 0 0 1-.749-.232 4.161 4.161 0 0 1-.679-.368 4.115 4.115 0 0 1-1.082-1.082l-1.658 1.117c.215.319.462.619.733.889a5.991 5.991 0 0 0 8.485.002c.272-.271.52-.571.734-.891l-1.658-1.117c-.143.211-.307.41-.49.592z"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="M15.5 10c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2z"/></svg>`;
}
