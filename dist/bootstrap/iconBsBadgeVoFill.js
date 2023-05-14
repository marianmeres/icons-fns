export function iconBsBadgeVoFill(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M12.296 8.394v-.782c0-1.156-.571-1.736-1.362-1.736-.796 0-1.363.58-1.363 1.736v.782c0 1.156.567 1.732 1.363 1.732.79 0 1.362-.576 1.362-1.732z"/><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm11.5 5.62v.77c0 1.691-.962 2.724-2.566 2.724-1.604 0-2.571-1.033-2.571-2.724v-.77c0-1.704.967-2.733 2.57-2.733 1.605 0 2.567 1.037 2.567 2.734zM5.937 11H4.508L2.5 5.001h1.375L5.22 9.708h.057L6.61 5.001h1.318L5.937 11z"/></svg>`;
}
