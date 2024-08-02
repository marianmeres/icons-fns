export const iconPhLightSubtract = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172.91,83.08a78,78,0,1,0-89.83,89.83,78,78,0,1,0,89.83-89.83ZM226,160a65.31,65.31,0,0,1-.62,8.9l-53.76-53.77A77.84,77.84,0,0,0,174,96c0-.17,0-.34,0-.51A65.8,65.8,0,0,1,226,160Zm-79.29-4.81,55.5,55.5A66,66,0,0,1,182.52,222l-54.8-54.81A77.86,77.86,0,0,0,146.71,155.19Zm8.48-8.48a77.86,77.86,0,0,0,12-19L222,182.52a66,66,0,0,1-11.35,19.69ZM30,96a66,66,0,1,1,66,66A66.08,66.08,0,0,1,30,96Zm65.49,78H96a77.84,77.84,0,0,0,19.13-2.38l53.77,53.76A65.87,65.87,0,0,1,95.49,174Z"/></svg>`;
}
