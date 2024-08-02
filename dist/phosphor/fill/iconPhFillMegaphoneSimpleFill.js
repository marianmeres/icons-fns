export const iconPhFillMegaphoneSimpleFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM184,192H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.91L223.89,102l.11,0v36Z"/></svg>`;
}
