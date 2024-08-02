export const iconPhLightMountainsLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,78a26,26,0,1,0-26-26A26,26,0,0,0,164,78Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,38Zm89.16,158.94L198.6,104.86a13.9,13.9,0,0,0-12-6.86h0a13.88,13.88,0,0,0-12,6.86l-27.88,47.05-46.56-79a14,14,0,0,0-24.13,0L2.83,197A6,6,0,0,0,8,206H248a6,6,0,0,0,5.16-9.06ZM86.27,79a2,2,0,0,1,3.46,0l25.34,43H60.93ZM18.5,194l35.36-60h68.29l19.3,32.77,0,0,16,27.2Zm152.93,0-17.85-30.29L184.83,111a2,2,0,0,1,1.72-1,1.93,1.93,0,0,1,1.72,1l49.2,83Z"/></svg>`;
}
