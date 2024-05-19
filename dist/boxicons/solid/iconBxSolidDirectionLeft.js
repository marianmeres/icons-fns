/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxSolidDirectionLeft(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m21.707 11.294-8.978-9a1.001 1.001 0 0 0-1.415-.002l-9.021 9a1 1 0 0 0 0 1.416l9.021 9c.39.389 1.026.388 1.415-.002l8.978-9a.998.998 0 0 0 0-1.412zM15 16h-2v-4h-3v2l-3-3 3-3v2h5v6z"/></svg>`;
}
