export const iconPhRegularGoggles = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M256,136a72.08,72.08,0,0,0-72-72H72A72.08,72.08,0,0,0,0,136a24.06,24.06,0,0,0,17,23c6.06,20.37,37.63,33,55,33a40.07,40.07,0,0,0,39.2-32h33.6A40.07,40.07,0,0,0,184,192c17.33,0,48.9-12.66,55-33A24.06,24.06,0,0,0,256,136ZM45.45,167.74C37,162.76,32,156.88,32,152s4.91-10.61,13.13-15.55l37.21,37.2A23.74,23.74,0,0,1,72,176C64.47,176,53.8,172.68,45.45,167.74Zm48.2-5.4L61,129.7A42.66,42.66,0,0,1,72,128a24,24,0,0,1,24,24A23.74,23.74,0,0,1,93.65,162.34ZM160,152a23.88,23.88,0,0,1,5.46-15.22L201,172.32c-6,2.3-12.15,3.68-17,3.68A24,24,0,0,1,160,152Zm55.63,12.31-35.92-35.92A24.19,24.19,0,0,1,184,128c7.53,0,18.2,3.32,26.55,8.26S224,147.12,224,152C224,155.79,221,160.2,215.63,164.31Zm22.05-22.69C229.34,123.25,200.34,112,184,112a40.07,40.07,0,0,0-39.2,32H111.2A40.07,40.07,0,0,0,72,112c-16.34,0-45.34,11.25-53.68,29.62A8,8,0,0,1,16,136,56.06,56.06,0,0,1,72,80H184a56.06,56.06,0,0,1,56,56A8,8,0,0,1,237.68,141.62Z"/></svg>`;
}
