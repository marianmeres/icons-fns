export function iconBxSolidBrushAlt(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M18 8.001h-2V8h-1V4.999a2.92 2.92 0 0 0-.874-2.108 2.943 2.943 0 0 0-2.39-.879C10.202 2.144 9 3.508 9 5.117V8H6c-1.103 0-2 .897-2 2v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10.001c0-1.103-.897-2-2-2zM6 12v-2h5V5.117c0-.57.407-1.07 1.002-1.117.266 0 .512.103.712.307a.956.956 0 0 1 .286.692V10h.995l.005.001h4V12H6z"/></svg>`;
}
