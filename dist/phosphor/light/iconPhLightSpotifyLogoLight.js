export const iconPhLightSpotifyLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm29.31-49.2a6,6,0,0,1-8.11,2.51,44.75,44.75,0,0,0-42.4,0,6,6,0,1,1-5.6-10.62,57.37,57.37,0,0,1,53.6,0A6,6,0,0,1,157.31,168.8Zm32-56a6,6,0,0,1-8.12,2.46,112.67,112.67,0,0,0-106.34,0,6,6,0,1,1-5.66-10.58,124.65,124.65,0,0,1,117.66,0A6,6,0,0,1,189.29,112.82Zm-16,28A6,6,0,0,1,168,144a6.07,6.07,0,0,1-2.82-.7,79,79,0,0,0-74.36,0,6,6,0,1,1-5.64-10.6,91,91,0,0,1,85.64,0A6,6,0,0,1,173.3,140.82Z"/></svg>`;
}
