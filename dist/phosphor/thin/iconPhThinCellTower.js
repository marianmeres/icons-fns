export const iconPhThinCellTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M131.58,86.21a4,4,0,0,0-7.16,0l-72,144a4,4,0,0,0,7.16,3.58L74.47,204H181.53l14.89,29.79A4,4,0,0,0,200,236a4.12,4.12,0,0,0,1.79-.42,4,4,0,0,0,1.79-5.37ZM128,96.94,161.53,164H94.47ZM78.47,196l12-24h75.06l12,24ZM163.42,94.45A35.57,35.57,0,0,0,164,88a36,36,0,0,0-72,0,35.57,35.57,0,0,0,.58,6.45,4,4,0,0,1-7.88,1.43A45.18,45.18,0,0,1,84,88a44,44,0,0,1,88,0,45.18,45.18,0,0,1-.7,7.88,4,4,0,0,1-3.94,3.29,4.38,4.38,0,0,1-.71-.07A4,4,0,0,1,163.42,94.45ZM67.34,133.79a76,76,0,1,1,121.32,0,4,4,0,1,1-6.38-4.82,68,68,0,1,0-108.56,0,4,4,0,1,1-6.38,4.82Z"/></svg>`;
}
