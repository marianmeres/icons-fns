/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBsSimSlash(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="m11.646.44.897.896-.707.707-.897-.897A.5.5 0 0 0 10.586 1H3.5a.5.5 0 0 0-.5.5v9.379l-1 1V1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44M10.5 3q.175 0 .34.039L9.879 4H8.5v1.379L6.879 7H5v1.879l-1 1V4.5A1.5 1.5 0 0 1 5.5 3zM12 6.121l-1 1V9H9.121L7.5 10.621V12H6.121l-.961.961q.165.039.34.039h5a1.5 1.5 0 0 0 1.5-1.5zM3.5 15a.5.5 0 0 1-.288-.091l-.71.71c.265.237.615.381.998.381h9a1.5 1.5 0 0 0 1.5-1.5V4.121l-1 1V14.5a.5.5 0 0 1-.5.5zm2-11a.5.5 0 0 0-.5.5V6h2.5V4zm5.5 6v1.5a.5.5 0 0 1-.5.5h-2v-2zm3.854-8.146a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708z"/></svg>`;
}
