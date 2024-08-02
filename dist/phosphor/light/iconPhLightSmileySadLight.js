export const iconPhLightSmileySadLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM82,108a10,10,0,1,1,10,10A10,10,0,0,1,82,108Zm92,0a10,10,0,1,1-10-10A10,10,0,0,1,174,108Zm-.81,65a6,6,0,0,1-10.38,6c-7.84-13.54-20.2-21-34.81-21s-27,7.46-34.81,21a6,6,0,0,1-5.2,3,5.9,5.9,0,0,1-3-.81A6,6,0,0,1,82.81,173c9.92-17.16,26.39-27,45.19-27S163.27,155.84,173.19,173Z"/></svg>`;
}
