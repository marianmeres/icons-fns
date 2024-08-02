export const iconPhThinNumberThreeThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6A44,44,0,1,0,120,116a4,4,0,0,1-3.2-6.4L160,52H88a4,4,0,0,1,0-8h80a4,4,0,0,1,3.2,6.4l-43.61,58.15A52.08,52.08,0,0,1,172,160Z"/></svg>`;
}
