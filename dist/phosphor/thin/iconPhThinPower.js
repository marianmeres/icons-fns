export const iconPhThinPower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,128V48a4,4,0,0,1,8,0v80a4,4,0,0,1-8,0Zm54.18-75.35a4,4,0,1,0-4.36,6.7C198.08,75.17,212,100.2,212,128a84,84,0,0,1-168,0c0-27.8,13.92-52.83,38.18-68.65a4,4,0,0,0-4.36-6.7C51.24,70,36,97.44,36,128a92,92,0,0,0,184,0C220,97.44,204.76,70,178.18,52.65Z"/></svg>`;
}
