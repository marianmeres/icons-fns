export function iconBsSignTurnSlightRightFill(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435Zm1.385 6.547.8 1.386a.25.25 0 0 0 .451-.039l1.06-2.882a.25.25 0 0 0-.192-.333l-3.026-.523a.25.25 0 0 0-.26.371l.667 1.154-.621.373A2.5 2.5 0 0 0 6 8.632V11h1V8.632a1.5 1.5 0 0 1 .728-1.286l.607-.364Z"/></svg>`;
}
