export function iconBxRegularRadar(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10 10-4.58 10-10S17.421 2 12 2zm0 18c-4.337 0-8-3.664-8-8 0-3.998 3.115-7.417 7-7.927V6.09C8.167 6.569 6 9.033 6 12c0 3.309 2.691 6 6 6 1.595 0 3.1-.626 4.237-1.763l-1.414-1.415A3.97 3.97 0 0 1 12 16c-2.206 0-4-1.794-4-4 0-1.858 1.279-3.411 3-3.858v2.146c-.59.353-1 .993-1 1.712 0 1.081.919 2 2 2s2-.919 2-2c0-.719-.41-1.359-1-1.712V4.073c3.885.51 7 3.929 7 7.927 0 4.336-3.663 8-8 8z"/></svg>`;
}
