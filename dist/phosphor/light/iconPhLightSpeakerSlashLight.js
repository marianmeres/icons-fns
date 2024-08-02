export const iconPhLightSpeakerSlashLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,43.56,44L78,81.94l-.08.06H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V169.92L203.56,220a6,6,0,0,0,8.88-8.08ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l.11-.08L146,156.72Zm41.5-66.53a26,26,0,0,0,0-34.37,6,6,0,1,1,9-7.93,38,38,0,0,1,0,50.24,6,6,0,0,1-9-7.94ZM107.41,66.68a6,6,0,0,1,1.06-8.42l39.85-31A6,6,0,0,1,158,32v74.83a6,6,0,0,1-12,0V44.27L115.83,67.73A6,6,0,0,1,107.41,66.68ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z"/></svg>`;
}
