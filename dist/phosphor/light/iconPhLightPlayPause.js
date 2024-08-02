export const iconPhLightPlayPause = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M182,64V192a6,6,0,0,1-12,0V64a6,6,0,0,1,12,0Zm42-6a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V64A6,6,0,0,0,224,58Zm-82,70a13.77,13.77,0,0,1-6.41,11.65L47.41,195.8A13.91,13.91,0,0,1,26,184.15V71.85A13.91,13.91,0,0,1,47.41,60.2l88.18,56.15A13.77,13.77,0,0,1,142,128Zm-12,0a1.77,1.77,0,0,0-.85-1.53L41,70.32a1.87,1.87,0,0,0-1-.32,2.13,2.13,0,0,0-1,.25,1.76,1.76,0,0,0-1,1.6v112.3a1.76,1.76,0,0,0,1,1.6,1.9,1.9,0,0,0,2-.07l88.19-56.15A1.77,1.77,0,0,0,130,128Z"/></svg>`;
}
