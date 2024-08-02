export const iconPhLightPaintBucketLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237,164.67a6,6,0,0,0-10,0c-.7,1-17,25.72-17,43.33a22,22,0,0,0,44,0C254,190.39,237.69,165.71,237,164.67ZM232,218a10,10,0,0,1-10-10c0-8.17,5.37-19.92,10-28.34,4.63,8.41,10,20.15,10,28.34A10,10,0,0,1,232,218Zm1.9-80.82a6,6,0,0,0,2.34-9.94L120.76,11.76a6,6,0,0,0-8.49,0l-42,42-26-26a6,6,0,0,0-8.49,8.48l26,26L16.44,107.59a22,22,0,0,0,0,31.11l84.86,84.86a22,22,0,0,0,31.11,0l78.83-78.83Zm-30.14-1.94-79.83,79.83a10,10,0,0,1-14.14,0L24.93,130.21a10,10,0,0,1,0-14.14L70.25,70.75l31.62,31.61a26,26,0,0,0,3.75,32,26,26,0,0,0,36.76,0h0a26,26,0,0,0-32-40.51L78.74,62.26l37.78-37.77L220.89,128.86l-14.79,4.93A6.07,6.07,0,0,0,203.76,135.24ZM114.1,106.11l0,0a14,14,0,1,1,0,19.82,13.91,13.91,0,0,1,0-19.82Z"/></svg>`;
}
