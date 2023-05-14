export function iconHeroMiniSquares2x2(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd"/></svg>`;
}
