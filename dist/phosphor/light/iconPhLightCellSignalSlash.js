export const iconPhLightCellSignalSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M86,152v48a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Zm172.44,26L52.44,36A6,6,0,0,0,43.56,44L114,121.52V200a6,6,0,0,0,12,0V134.72l28,30.8V200a6,6,0,0,0,12,0V178.72L203.56,220a6,6,0,0,0,8.88-8.08ZM160,121.63a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v43.63A6,6,0,0,0,160,121.63Zm40,44a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0V159.63A6,6,0,0,0,200,165.63Z"/></svg>`;
}
