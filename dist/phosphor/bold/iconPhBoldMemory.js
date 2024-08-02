export const iconPhBoldMemory = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,52H24A20,20,0,0,0,4,72V200a12,12,0,0,0,24,0V188H48v12a12,12,0,0,0,24,0V188H92v12a12,12,0,0,0,24,0V188h24v12a12,12,0,0,0,24,0V188h20v12a12,12,0,0,0,24,0V188h20v12a12,12,0,0,0,24,0V72A20,20,0,0,0,232,52ZM28,76H228v88H28Zm92,64V100a12,12,0,0,0-12-12H56a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12h52A12,12,0,0,0,120,140ZM96,128H68V112H96Zm52,24h52a12,12,0,0,0,12-12V100a12,12,0,0,0-12-12H148a12,12,0,0,0-12,12v40A12,12,0,0,0,148,152Zm12-40h28v16H160Z"/></svg>`;
}
