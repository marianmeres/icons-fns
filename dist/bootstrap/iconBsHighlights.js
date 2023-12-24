export function iconBsHighlights(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.502.502 0 0 0-.093.009A7.029 7.029 0 0 1 3.1 13zm0-1H2.255a6.998 6.998 0 0 1-.581-1H8zm-6.71-2a6.96 6.96 0 0 1-.22-1H8v1zM1 8c0-.34.024-.673.07-1H8v1zm.29-2c.103-.345.231-.68.384-1H8v1zm.965-2c.25-.36.534-.694.846-1H8v1zm2.137-2A6.967 6.967 0 0 1 8 1v1z"/></svg>`;
}
