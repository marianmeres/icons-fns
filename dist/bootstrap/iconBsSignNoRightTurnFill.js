export function iconBsSignNoRightTurnFill(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M14 13.292A8 8 0 0 0 2.707 2l4.097 4.098Q7.137 6.001 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658l-.026.02zm-.708.708A8 8 0 0 1 2 2.707l3.885 3.884A2.5 2.5 0 0 0 5 8.5V11h1V8.5c0-.489.234-.923.596-1.197l6.696 6.696Z"/><path d="M7.707 7 9 8.293V7z"/></svg>`;
}
