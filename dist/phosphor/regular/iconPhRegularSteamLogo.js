export const iconPhRegularSteamLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM117.39,185.92l62-50.55a36,36,0,1,0-51.14-50.23l-43,52.73L45.28,98A88,88,0,1,1,40,128a89.56,89.56,0,0,1,.8-11.88l34.57,34.57a28,28,0,0,0,42,35.23Zm4.19-67.37a36.18,36.18,0,0,0,23.87,23.87l-18.26,14.89a28.11,28.11,0,0,0-20.5-20.5ZM156,128a20,20,0,1,1,20-20A20,20,0,0,1,156,128Zm-56,24a12,12,0,1,1-12,12A12,12,0,0,1,100,152Z"/></svg>`;
}
