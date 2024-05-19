export function iconBsXDiamondFill(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z"/></svg>`;
}
