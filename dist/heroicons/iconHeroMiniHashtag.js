export function iconHeroMiniHashtag(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M9.493 2.853a.75.75 0 00-1.486-.205L7.545 6H4.198a.75.75 0 000 1.5h3.14l-.69 5H3.302a.75.75 0 000 1.5h3.14l-.435 3.148a.75.75 0 001.486.205L7.955 14h2.986l-.434 3.148a.75.75 0 001.486.205L12.456 14h3.346a.75.75 0 000-1.5h-3.14l.69-5h3.346a.75.75 0 000-1.5h-3.14l.435-3.147a.75.75 0 00-1.486-.205L12.045 6H9.059l.434-3.147zM8.852 7.5l-.69 5h2.986l.69-5H8.852z" clip-rule="evenodd"/></svg>`;
}
