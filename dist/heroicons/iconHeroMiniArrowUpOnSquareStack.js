export function iconHeroMiniArrowUpOnSquareStack(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.75 6h-2v4.25a.75.75 0 01-1.5 0V6h1.5V3.704l.943 1.048a.75.75 0 001.114-1.004l-2.25-2.5a.75.75 0 00-1.114 0l-2.25 2.5a.75.75 0 001.114 1.004l.943-1.048V6h-2A2.25 2.25 0 003 8.25v4.5A2.25 2.25 0 005.25 15h5.5A2.25 2.25 0 0013 12.75v-4.5A2.25 2.25 0 0010.75 6zM7 16.75v-.25h3.75a3.75 3.75 0 003.75-3.75V10h.25A2.25 2.25 0 0117 12.25v4.5A2.25 2.25 0 0114.75 19h-5.5A2.25 2.25 0 017 16.75z" clip-rule="evenodd"/></svg>`;
}
