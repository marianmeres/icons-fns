export const iconPhLightSteamLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM116.38,184.17l61.21-49.93a34,34,0,1,0-47.83-47.83L85.33,140.85,43,98.49a89.63,89.63,0,1,1-3.53,13.43l38.44,38.44a26,26,0,0,0,38.5,33.81Zm6.19-70a34.1,34.1,0,0,0,27.25,27.25l-24,19.58A26,26,0,0,0,103,138.18ZM156,130a22,22,0,1,1,22-22A22,22,0,0,1,156,130Zm-56,20a14,14,0,1,1-14,14A14,14,0,0,1,100,150Z"/></svg>`;
}
