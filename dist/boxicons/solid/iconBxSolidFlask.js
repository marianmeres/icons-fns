/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxSolidFlask(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M15 9.783V4h1V2H8v2h1v5.783l-4.268 9.389a1.992 1.992 0 0 0 .14 1.911A1.99 1.99 0 0 0 6.553 22h10.895a1.99 1.99 0 0 0 1.681-.917c.37-.574.423-1.289.14-1.911L15 9.783zm-4.09.631c.06-.13.09-.271.09-.414V4h2v6c0 .143.03.284.09.414L15.177 15H8.825l2.085-4.586z"/></svg>`;
}
