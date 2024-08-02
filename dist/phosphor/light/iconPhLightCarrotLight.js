export const iconPhLightCarrotLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,66H198.48l29.76-29.76a6,6,0,1,0-8.48-8.48L190,57.52V24a6,6,0,0,0-12,0V60.15a62,62,0,0,0-77.8,8l0,0h0C60.17,107.4,30.05,201.45,27.38,210a14,14,0,0,0,18.67,18.67c8.5-2.67,102.62-32.81,141.79-72.77a62,62,0,0,0,8-77.84H232a6,6,0,0,0,0-12Zm-52.69,81.41C170,157,157,166,142.69,174.24l-26.46-26.47a6,6,0,1,0-8.49,8.49l24,24c-41.69,22-89,36.82-89.73,37a6.57,6.57,0,0,0-1.06.44,2,2,0,0,1-2.7-2.7A6.57,6.57,0,0,0,38.7,214C39,213,67.55,121.72,104.48,81l35.27,35.26a6,6,0,1,0,8.48-8.48l-35.1-35.1a50,50,0,0,1,66.18,74.74Z"/></svg>`;
}
