export const iconPhLightSpiral = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,144a6,6,0,0,1-12,0,98.11,98.11,0,0,0-98-98,90.1,90.1,0,0,0-90,90,82.1,82.1,0,0,0,82,82,74.09,74.09,0,0,0,74-74,66.08,66.08,0,0,0-66-66,58.07,58.07,0,0,0-58,58,50.06,50.06,0,0,0,50,50,42,42,0,0,0,42-42,34,34,0,0,0-34-34,26,26,0,0,0-26,26,18,18,0,0,0,18,18,10,10,0,0,0,10-10,2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14,22,22,0,0,1-22,22,30,30,0,0,1-30-30,38,38,0,0,1,38-38,46.06,46.06,0,0,1,46,46,54.06,54.06,0,0,1-54,54,62.07,62.07,0,0,1-62-62,70.08,70.08,0,0,1,70-70,78.09,78.09,0,0,1,78,78,86.1,86.1,0,0,1-86,86,94.11,94.11,0,0,1-94-94A102.12,102.12,0,0,1,136,34,110.13,110.13,0,0,1,246,144Z"/></svg>`;
}