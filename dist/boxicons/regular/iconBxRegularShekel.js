/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxRegularShekel(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M13 8v8h2V8c0-2.206-1.794-4-4-4H5v16h2V6h4c1.103 0 2 .897 2 2z"/><path d="M17 16c0 1.103-.897 2-2 2h-4V8H9v12h6c2.206 0 4-1.794 4-4V4h-2v12z"/></svg>`;
}
