export const iconPhBoldCloudArrowDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192.49,167.51a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L140,179V128a12,12,0,0,1,24,0v51l11.51-11.52A12,12,0,0,1,192.49,167.51ZM160,36A92.08,92.08,0,0,0,79,84.37,68,68,0,1,0,72,220H84a12,12,0,0,0,0-24H72a44,44,0,0,1-1.81-87.95A91.7,91.7,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,0,1,136,0,67.27,67.27,0,0,1-7.25,30.59,12,12,0,1,0,21.42,10.82A91.08,91.08,0,0,0,252,128,92.1,92.1,0,0,0,160,36Z"/></svg>`;
}
