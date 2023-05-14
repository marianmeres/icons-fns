export function iconBxSolidCarGarage(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M3 19.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 22 18v-3c0-.831-.507-1.542-1.228-1.845l-1.368-4.104A2.995 2.995 0 0 0 16.559 7H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2.001 2.001 0 0 0 2 15v3c0 .738.404 1.376 1 1.723zM5.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 18zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 18zM7.441 9h9.117a1 1 0 0 1 .949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684z"/><path d="M22 7.388V5.279l-9.684-3.228a.996.996 0 0 0-.658.009L2 5.572V7.7l10.015-3.642L22 7.388z"/></svg>`;
}
