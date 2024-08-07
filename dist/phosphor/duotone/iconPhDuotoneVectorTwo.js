export const iconPhDuotoneVectorTwo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,56V192H80V40H208A16,16,0,0,1,224,56Z" opacity="0.2"/><path d="M229.66,197.66l-32,32a8,8,0,0,1-11.32-11.32L204.69,200H80a8,8,0,0,1-8-8V59.31L53.66,77.66A8,8,0,0,1,42.34,66.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L88,59.31V184H204.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,229.66,197.66Z"/></svg>`;
}
