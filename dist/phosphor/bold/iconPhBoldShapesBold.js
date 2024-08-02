export const iconPhBoldShapesBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M71.49,60.55a12,12,0,0,0-23,0l-36,120A12,12,0,0,0,24,196H96a12,12,0,0,0,11.49-15.45ZM40.13,172,60,105.76,79.87,172ZM212,74a54,54,0,1,0-54,54A54.06,54.06,0,0,0,212,74Zm-84,0a30,30,0,1,1,30,30A30,30,0,0,1,128,74Zm96,70H136a12,12,0,0,0-12,12v52a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V156A12,12,0,0,0,224,144Zm-12,52H148V168h64Z"/></svg>`;
}
