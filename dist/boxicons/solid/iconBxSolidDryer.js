/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxSolidDryer(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M4 22h16a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v16a1 1 0 0 0 1 1zM18 3.924a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 3.117c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/><path d="M9.32 12.265c-.415.384-1.041.964-1.041 2.067 0 1.104.626 1.684 1.041 2.068.352.325.4.398.4.6h2c0-1.104-.626-1.684-1.041-2.068-.352-.325-.4-.398-.4-.6s.048-.275.4-.6c.414-.384 1.041-.964 1.041-2.068 0-1.103-.626-1.683-1.041-2.066-.351-.325-.399-.397-.399-.598h-2c0 1.104.627 1.683 1.042 2.066.351.324.399.396.399.597-.001.203-.05.276-.401.602zm4 0c-.414.384-1.04.964-1.04 2.067s.626 1.684 1.04 2.067c.351.325.399.398.399.601h2c0-1.104-.626-1.684-1.04-2.067-.351-.325-.399-.398-.399-.601s.049-.275.399-.601c.414-.384 1.04-.964 1.04-2.068 0-1.103-.626-1.682-1.04-2.065-.35-.324-.399-.397-.399-.598h-2c0 1.103.626 1.683 1.041 2.066.35.324.398.397.398.598.001.202-.048.275-.399.601z"/></svg>`;
}
