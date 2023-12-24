export function iconHeroMicroCalculator(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5Zm.75 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 3.75A.75.75 0 0 1 5.75 3h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 3.75Zm.75 7.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10a.75.75 0 1 1 1.5 0A.75.75 0 0 1 5 10Zm5.25-3a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-.75 3a.75.75 0 0 1 1.5 0v2.25a.75.75 0 0 1-1.5 0V10ZM8 7a.75.75 0 1 0 0 1.5A.75.75 0 0 0 8 7Zm-.75 5.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.75-3a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" clip-rule="evenodd"/></svg>`;
}
