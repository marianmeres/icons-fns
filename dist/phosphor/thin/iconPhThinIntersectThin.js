export const iconPhThinIntersectThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M171.17,84.83a76,76,0,1,0-86.34,86.34,76,76,0,1,0,86.34-86.34ZM28,96A68,68,0,0,1,162.93,84.07c-1,0-2-.07-2.93-.07a76.08,76.08,0,0,0-76,76c0,1,0,2,.07,2.93A68.1,68.1,0,0,1,28,96Zm136,0a67.59,67.59,0,0,1-7.45,30.89L129.11,99.45A67.59,67.59,0,0,1,160,92c1.3,0,2.6,0,3.88.12C164,93.4,164,94.7,164,96ZM92,160a67.59,67.59,0,0,1,7.45-30.89l27.44,27.44A67.59,67.59,0,0,1,96,164c-1.3,0-2.6-.05-3.88-.12C92.05,162.6,92,161.3,92,160Zm42-7.64L103.64,122A68.74,68.74,0,0,1,122,103.64L152.36,134A68.74,68.74,0,0,1,134,152.36ZM160,228a68.1,68.1,0,0,1-66.93-56.07c1,0,2,.07,2.93.07a76.08,76.08,0,0,0,76-76c0-1,0-2-.07-2.93A68,68,0,0,1,160,228Z"/></svg>`;
}
