export function iconBxSolidTennisBall(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M4.929 19.071a9.953 9.953 0 0 0 6.692 2.906c-.463-2.773.365-5.721 2.5-7.856 2.136-2.135 5.083-2.963 7.856-2.5-.092-2.433-1.053-4.839-2.906-6.692s-4.26-2.814-6.692-2.906c.463 2.773-.365 5.721-2.5 7.856-2.136 2.135-5.083 2.963-7.856 2.5a9.944 9.944 0 0 0 2.906 6.692z"/><path d="M15.535 15.535a6.996 6.996 0 0 0-1.911 6.318 9.929 9.929 0 0 0 8.229-8.229 6.999 6.999 0 0 0-6.318 1.911zm-7.07-7.07a6.996 6.996 0 0 0 1.911-6.318 9.929 9.929 0 0 0-8.23 8.229 7 7 0 0 0 6.319-1.911z"/></svg>`;
}
