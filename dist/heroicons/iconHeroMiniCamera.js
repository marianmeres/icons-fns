export function iconHeroMiniCamera(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>`;
}
