export const iconPhThinLampPendant = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,77.34V72a12,12,0,0,0-12-12H132V16a4,4,0,0,0-8,0V60H96A12,12,0,0,0,84,72v5.34A107.75,107.75,0,0,0,20,176a4,4,0,0,0,4,4H92v4a36,36,0,0,0,72,0v-4h68a4,4,0,0,0,4-4A107.75,107.75,0,0,0,172,77.34ZM156,184a28,28,0,0,1-56,0v-4h56ZM28.08,172A99.77,99.77,0,0,1,89.54,83.66,4,4,0,0,0,92,80V72a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v8a4,4,0,0,0,2.46,3.69A99.77,99.77,0,0,1,227.92,172Z"/></svg>`;
}
