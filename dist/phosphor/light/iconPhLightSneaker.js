export const iconPhLightSneaker = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,131l-60.73-20.24a26,26,0,0,1-15.51-14L128.51,42.31a14,14,0,0,0-17.57-7.47L35.22,62.37A14.05,14.05,0,0,0,26,75.53V192a14,14,0,0,0,14,14H240a14,14,0,0,0,14-14V167.06A38,38,0,0,0,228,131ZM39.32,73.65,115,46.12a1.81,1.81,0,0,1,.68-.12,2,2,0,0,1,1.79,1.11l8,18.68L102,74.36A6,6,0,0,0,104,86a5.92,5.92,0,0,0,2-.37l24.18-8.79,6.31,14.76L118,98.36A6,6,0,0,0,120,110a6.15,6.15,0,0,0,2-.36l19.26-7a38,38,0,0,0,10.57,13.21L134,122.36A6,6,0,0,0,136,134a6.15,6.15,0,0,0,2.05-.36l28.64-10.42,57.53,19.18A25.94,25.94,0,0,1,241.49,162H38V75.53A2,2,0,0,1,39.32,73.65ZM240,194H40a2,2,0,0,1-2-2V174H242v18A2,2,0,0,1,240,194Z"/></svg>`;
}
