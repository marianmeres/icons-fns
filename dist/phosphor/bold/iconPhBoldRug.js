export const iconPhBoldRug = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,12a12,12,0,0,0-12,12V36H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H68V24a12,12,0,0,0-24,0V232a12,12,0,0,0,24,0V220H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V24A12,12,0,0,0,200,12ZM68,60H188V196H68Zm60,120a12,12,0,0,0,10.29-5.83l24-40a12,12,0,0,0,0-12.34l-24-40a12,12,0,0,0-20.58,0l-24,40a12,12,0,0,0,0,12.34l24,40A12,12,0,0,0,128,180Zm0-68.68L138,128l-10,16.68L118,128Z"/></svg>`;
}
