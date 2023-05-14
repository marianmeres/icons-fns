export function iconBxRegularInjection(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20.84 7.4 22.25 6 18 1.75l-1.4 1.41L18 4.58 16.6 6l-2.13-2.13-1.41-1.42-1.41 1.42.7.71L3 13.92a2 2 0 0 0-.3 2.45L4 18.56l-2.25 2.28 1.41 1.41L5.44 20l2.19 1.31a2 2 0 0 0 1 .28 2 2 0 0 0 1.45-.59l9.34-9.34.71.7 1.42-1.41-1.42-1.42L18 7.4 19.42 6zM18 10.23l-9.34 9.35L6 18l-1.58-2.66.86-.87 2.83 2.83 1.42-1.41-2.83-2.83 1.41-1.41 2.83 2.82 1.41-1.41-2.83-2.83 1.42-1.41 2.83 2.83 1.41-1.42-2.83-2.83L13.77 6z"/></svg>`;
}
