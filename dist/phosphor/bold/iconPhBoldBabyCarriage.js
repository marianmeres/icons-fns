export const iconPhBoldBabyCarriage = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,28h-8a20,20,0,0,0-20,20v52H58.16A40.07,40.07,0,0,0,20,72a12,12,0,0,0,0,24,16,16,0,0,1,16,16,84.09,84.09,0,0,0,84,84h40a84,84,0,0,0,0-168Zm48.06,48.12A59.58,59.58,0,0,1,218.79,100H178.21ZM160,52a59.66,59.66,0,0,1,29.83,8L156,87V52Zm0,120H120a60.1,60.1,0,0,1-58.79-48H218.79A60.1,60.1,0,0,1,160,172Zm-52,52a20,20,0,1,1-20-20A20,20,0,0,1,108,224Zm104,0a20,20,0,1,1-20-20A20,20,0,0,1,212,224Z"/></svg>`;
}
