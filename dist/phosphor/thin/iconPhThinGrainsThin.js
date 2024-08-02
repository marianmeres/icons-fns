export const iconPhThinGrainsThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,60a83.5,83.5,0,0,0-33.88,7.16c-13-30.78-43-46.08-44.33-46.74a4,4,0,0,0-3.58,0c-1.32.66-31.3,16-44.33,46.74A83.5,83.5,0,0,0,48,60a4,4,0,0,0-4,4v80a84,84,0,0,0,168,0V64A4,4,0,0,0,208,60ZM124,219.9A76.11,76.11,0,0,1,52,144V124.1A76.11,76.11,0,0,1,124,200Zm0-55.63A84.12,84.12,0,0,0,52,116.1v-48A76.11,76.11,0,0,1,124,144ZM89.05,70.75c10.07-24.22,32.46-38.47,39-42.19,6.49,3.72,28.88,18,38.95,42.19A84.43,84.43,0,0,0,128,118.41,84.43,84.43,0,0,0,89.05,70.75ZM204,144a76.11,76.11,0,0,1-72,75.9V200a76.11,76.11,0,0,1,72-75.9Zm0-27.9a84.12,84.12,0,0,0-72,48.17V144a76.11,76.11,0,0,1,72-75.9Z"/></svg>`;
}