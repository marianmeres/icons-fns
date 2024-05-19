/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxSolidBomb(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m18.293 4.293-1.086 1.086-1.086-1.086a.999.999 0 0 0-1.414 0l-1.249 1.249A8.427 8.427 0 0 0 10.499 5C5.813 5 2 8.813 2 13.5S5.813 22 10.499 22s8.5-3.813 8.5-8.5a8.42 8.42 0 0 0-.431-2.654L19.914 9.5a.999.999 0 0 0 0-1.414l-1.293-1.293 1.09-1.09C19.94 5.474 20.556 5 21 5h1V3h-1c-1.4 0-2.584 1.167-2.707 1.293zM10.499 10c-.935 0-1.813.364-2.475 1.025A3.48 3.48 0 0 0 7 13.5H5c0-1.468.571-2.849 1.609-3.888A5.464 5.464 0 0 1 10.499 8v2z"/></svg>`;
}
