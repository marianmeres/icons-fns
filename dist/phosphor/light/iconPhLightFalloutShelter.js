export const iconPhLightFalloutShelter = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm69.29-92.83A6,6,0,0,0,192,122H139.21L165,83.33A6,6,0,0,0,160,74H96a6,6,0,0,0-5,9.33L116.79,122H64a6,6,0,0,0-5,9.33l32,48a6,6,0,0,0,10,0l27-40.51,27,40.51a6,6,0,0,0,10,0l32-48A6,6,0,0,0,197.29,125.17ZM148.79,86,128,117.18,107.21,86ZM96,165.18,75.21,134h41.58Zm64,0L139.21,134h41.58Z"/></svg>`;
}
