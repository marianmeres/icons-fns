export const iconPhThinForkKnife = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,88V40a4,4,0,0,1,8,0V88a4,4,0,0,1-8,0ZM212,40V224a4,4,0,0,1-8,0V172H152a4,4,0,0,1-4-4,264.27,264.27,0,0,1,7.11-55.94c9.47-39.22,27.21-65.41,51.31-75.74A4,4,0,0,1,212,40Zm-8,6.46C162.25,70.33,156.81,145.75,156.1,164H204Zm-88-7.12a4,4,0,0,0-7.9,1.32l8,47.66a36,36,0,0,1-72,0l8-47.66a4,4,0,0,0-7.9-1.32l-8,48A4.89,4.89,0,0,0,36,88a44.06,44.06,0,0,0,40,43.81V224a4,4,0,0,0,8,0V131.81A44.06,44.06,0,0,0,124,88a4.89,4.89,0,0,0,0-.66Z"/></svg>`;
}
