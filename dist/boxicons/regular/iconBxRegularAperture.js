/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxRegularAperture(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm2.113 13H9.986l-1.723-3.094L10.202 9h3.736l1.871 3.062L14.113 15zM4 12c0-.953.186-1.87.508-2.727L7.696 15H4.61A7.757 7.757 0 0 1 4 12zm12.283-3h3.106A7.74 7.74 0 0 1 20 12c0 .844-.143 1.66-.397 2.432L16.283 9zm1.905-2h-6.653l1.905-2.857c1.886.359 3.562 1.403 4.748 2.857zm-7.095-2.941L9.132 7H9v.197L7.17 9.942 5.65 7.214c1.3-1.703 3.249-2.895 5.443-3.155zM5.812 17h7.147l-1.709 2.961C9.084 19.748 7.141 18.63 5.812 17zm7.828 2.82 3.357-5.815 1.544 2.526c-1.154 1.642-2.901 2.854-4.901 3.289z"/></svg>`;
}
