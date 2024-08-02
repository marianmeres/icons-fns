export const iconPhLightBracketsCurlyLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M39.91,128a27.68,27.68,0,0,1,9.49,11.13C54,148.62,54,160.51,54,172c0,24.27,1.21,38,26,38a6,6,0,0,1,0,12c-16.88,0-27.81-5.6-33.4-17.13C42,195.38,42,183.49,42,172c0-24.27-1.21-38-26-38a6,6,0,0,1,0-12c24.79,0,26-13.73,26-38,0-11.49,0-23.38,4.6-32.87C52.19,39.6,63.12,34,80,34a6,6,0,0,1,0,12C55.21,46,54,59.73,54,84c0,11.49,0,23.38-4.6,32.87A27.68,27.68,0,0,1,39.91,128ZM240,122c-24.79,0-26-13.73-26-38,0-11.49,0-23.38-4.6-32.87C203.81,39.6,192.88,34,176,34a6,6,0,0,0,0,12c24.79,0,26,13.73,26,38,0,11.49,0,23.38,4.6,32.87A27.68,27.68,0,0,0,216.09,128a27.68,27.68,0,0,0-9.49,11.13C202,148.62,202,160.51,202,172c0,24.27-1.21,38-26,38a6,6,0,0,0,0,12c16.88,0,27.81-5.6,33.4-17.13,4.6-9.49,4.6-21.38,4.6-32.87,0-24.27,1.21-38,26-38a6,6,0,0,0,0-12Z"/></svg>`;
}