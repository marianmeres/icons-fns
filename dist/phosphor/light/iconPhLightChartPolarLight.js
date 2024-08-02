export const iconPhLightChartPolarLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm89.8,96H189.7A62.07,62.07,0,0,0,134,66.3V38.2A90.15,90.15,0,0,1,217.8,122ZM122,122H78.37A50.09,50.09,0,0,1,122,78.37Zm0,12v43.63A50.09,50.09,0,0,1,78.37,134Zm12,0h43.63A50.09,50.09,0,0,1,134,177.63Zm0-12V78.37A50.09,50.09,0,0,1,177.63,122ZM122,38.2V66.3A62.07,62.07,0,0,0,66.3,122H38.2A90.15,90.15,0,0,1,122,38.2ZM38.2,134H66.3A62.07,62.07,0,0,0,122,189.7v28.1A90.15,90.15,0,0,1,38.2,134ZM134,217.8V189.7A62.07,62.07,0,0,0,189.7,134h28.1A90.15,90.15,0,0,1,134,217.8Z"/></svg>`;
}
