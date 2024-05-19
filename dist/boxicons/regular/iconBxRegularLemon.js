/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxRegularLemon(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 22a9.83 9.83 0 0 1-3.26-.55 2.23 2.23 0 0 0-1.7.19 3.51 3.51 0 0 1-2.47.24 3.55 3.55 0 0 1-2.45-2.45A3.51 3.51 0 0 1 2.36 17a2.23 2.23 0 0 0 .19-1.7 10.07 10.07 0 0 1 0-6.53 9.87 9.87 0 0 1 6.18-6.23 10.07 10.07 0 0 1 6.53 0A2.23 2.23 0 0 0 17 2.36a3.51 3.51 0 0 1 2.47-.24 3.55 3.55 0 0 1 2.45 2.45A3.51 3.51 0 0 1 21.64 7a2.23 2.23 0 0 0-.19 1.7 10.07 10.07 0 0 1 0 6.53 9.87 9.87 0 0 1-6.19 6.19A10.33 10.33 0 0 1 12 22zm-3.84-2.64a3.91 3.91 0 0 1 1.23.2 8 8 0 0 0 5.24 0 7.84 7.84 0 0 0 4.94-4.93 8 8 0 0 0 0-5.24 4.19 4.19 0 0 1 .29-3.23 1.53 1.53 0 0 0 .09-1.08 1.49 1.49 0 0 0-1-1 1.53 1.53 0 0 0-1.08.09 4.19 4.19 0 0 1-3.23.29 8 8 0 0 0-5.24 0 7.84 7.84 0 0 0-4.97 4.91 8 8 0 0 0 0 5.24 4.19 4.19 0 0 1-.29 3.23 1.53 1.53 0 0 0-.09 1.08 1.49 1.49 0 0 0 1 1 1.53 1.53 0 0 0 1.08-.09 4.47 4.47 0 0 1 2.03-.47z"/><path d="M8 12H6a6 6 0 0 1 6-6v2a4 4 0 0 0-4 4z"/></svg>`;
}
