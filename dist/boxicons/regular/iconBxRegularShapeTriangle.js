export function iconBxRegularShapeTriangle(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M18 15c-.183 0-.358.022-.532.054L8.946 6.532C8.978 6.359 9 6.182 9 6c0-1.654-1.346-3-3-3S3 4.346 3 6c0 1.302.839 2.401 2 2.815v6.369A2.997 2.997 0 0 0 3 18c0 1.654 1.346 3 3 3a2.993 2.993 0 0 0 2.815-2h6.369a2.994 2.994 0 0 0 2.815 2c1.654 0 3-1.346 3-3S19.654 15 18 15zm-11 .184V8.816c.329-.118.629-.291.894-.508l7.799 7.799a2.961 2.961 0 0 0-.508.894h-6.37A2.99 2.99 0 0 0 7 15.184zM6 5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm0 14a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm12 0a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z"/></svg>`;
}
