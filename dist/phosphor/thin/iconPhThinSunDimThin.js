export const iconPhThinSunDimThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,40V32a4,4,0,0,1,8,0v8a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-8-8a4,4,0,0,0-5.66,5.66Zm0,122.34-8,8a4,4,0,0,0,5.66,5.66l8-8a4,4,0,0,0-5.66-5.66Zm136-136-8,8a4,4,0,0,0,5.66,5.66l8-8a4,4,0,1,0-5.66-5.66Zm-2.34,136a4,4,0,0,0-5.66,5.66l8,8a4,4,0,0,0,5.66-5.66ZM40,124H32a4,4,0,0,0,0,8h8a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,128,212Zm96-88h-8a4,4,0,0,0,0,8h8a4,4,0,0,0,0-8Z"/></svg>`;
}
