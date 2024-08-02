export const iconPhLightBeachBallLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm85,72.45a197.9,197.9,0,0,0-46.09-9.37A197.9,197.9,0,0,0,157.55,43,90.47,90.47,0,0,1,213,98.45ZM143.52,39.34a186.57,186.57,0,0,1,10.11,39A198.45,198.45,0,0,0,95.15,44.21a90.17,90.17,0,0,1,48.37-4.87ZM80.15,51.81A186.09,186.09,0,0,1,147,88.47a198.32,198.32,0,0,0-108.92,35A90.05,90.05,0,0,1,80.15,51.81ZM38.55,138a186.16,186.16,0,0,1,117-37.46,186.16,186.16,0,0,1-37.46,117A90.18,90.18,0,0,1,38.55,138Zm94,79.94a198.33,198.33,0,0,0,35-108.93,186.21,186.21,0,0,1,36.66,66.89A90.05,90.05,0,0,1,132.55,217.89Zm79.24-57a198.45,198.45,0,0,0-34.11-58.48,186.57,186.57,0,0,1,39,10.11,90.17,90.17,0,0,1-4.87,48.37Z"/></svg>`;
}
