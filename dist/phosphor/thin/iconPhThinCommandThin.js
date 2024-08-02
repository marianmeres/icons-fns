export const iconPhThinCommandThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,148H156V108h24a32,32,0,1,0-32-32v24H108V76a32,32,0,1,0-32,32h24v40H76a32,32,0,1,0,32,32V156h40v24a32,32,0,1,0,32-32ZM156,76a24,24,0,1,1,24,24H156ZM52,76a24,24,0,0,1,48,0v24H76A24,24,0,0,1,52,76Zm48,104a24,24,0,1,1-24-24h24Zm8-72h40v40H108Zm72,96a24,24,0,0,1-24-24V156h24a24,24,0,0,1,0,48Z"/></svg>`;
}
