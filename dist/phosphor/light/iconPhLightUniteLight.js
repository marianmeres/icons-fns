export const iconPhLightUniteLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172.91,83.09a78,78,0,1,0-89.82,89.82,78,78,0,1,0,89.82-89.82ZM226,160a65.31,65.31,0,0,1-.62,8.9l-53.76-53.77A77.84,77.84,0,0,0,174,96c0-.17,0-.33,0-.49A66.1,66.1,0,0,1,226,160ZM45.31,53.79l55.5,55.5a77.86,77.86,0,0,0-12,19L34,73.48A66,66,0,0,1,45.31,53.79Zm88.92,96-28-28a66.47,66.47,0,0,1,15.52-15.52l28,28A66.47,66.47,0,0,1,134.23,149.75ZM162,96a65.62,65.62,0,0,1-6,27.49L132.51,100A65.62,65.62,0,0,1,160,94c.65,0,1.3,0,1.95,0C162,94.7,162,95.35,162,96Zm-52.71,4.81-55.5-55.5A66,66,0,0,1,73.48,34l54.8,54.81A77.86,77.86,0,0,0,109.29,100.81ZM94,160a65.62,65.62,0,0,1,6-27.49L123.49,156A65.62,65.62,0,0,1,96,162c-.65,0-1.3,0-2-.05C94,161.3,94,160.65,94,160Zm52.71-4.81,55.5,55.5A66,66,0,0,1,182.52,222l-54.8-54.81A77.86,77.86,0,0,0,146.71,155.19Zm8.48-8.48a77.86,77.86,0,0,0,12-19L222,182.52a66,66,0,0,1-11.35,19.69Zm5.3-64.7H160a77.84,77.84,0,0,0-19.13,2.38L87.1,30.62A65.31,65.31,0,0,1,96,30,66.1,66.1,0,0,1,160.49,82ZM30,96a65.31,65.31,0,0,1,.62-8.9l53.76,53.77A77.84,77.84,0,0,0,82,160c0,.17,0,.33,0,.49A66.1,66.1,0,0,1,30,96Zm65.51,78H96a77.84,77.84,0,0,0,19.13-2.38l53.77,53.76a65.31,65.31,0,0,1-8.9.62A66.1,66.1,0,0,1,95.51,174Z"/></svg>`;
}
