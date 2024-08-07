export const iconPhLightSunDim = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M122,40V32a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48Zm0,119.52-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,1,0-8.48-8.48Zm136-136-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,0,0-8.48-8.48Zm.48,136a6,6,0,0,0-8.48,8.48l8,8a6,6,0,0,0,8.48-8.48ZM40,122H32a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Zm88,88a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,128,210Zm96-88h-8a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Z"/></svg>`;
}
