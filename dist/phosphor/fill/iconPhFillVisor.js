export const iconPhFillVisor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M183.05,56H72A72,72,0,0,0,.08,131.4c1.69,36.69,31.76,66.79,68.45,68.52,15.84.72,32-5.9,49.38-20.3a15.87,15.87,0,0,1,20.24,0C148.72,188.39,165,200,184,200a72,72,0,0,0,72-72.95C255.49,87.87,222.76,56,183.05,56ZM176,104H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"/></svg>`;
}
