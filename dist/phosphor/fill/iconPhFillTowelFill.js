export const iconPhFillTowelFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,48V152a8,8,0,0,1-8.53,8,8.17,8.17,0,0,1-7.47-8.25V48a8,8,0,0,0-8.55-8A8.19,8.19,0,0,0,192,48.28V180a4,4,0,0,1-4,4H52a4,4,0,0,1-4-4V48A24,24,0,0,1,72,24H200A24,24,0,0,1,224,48ZM188,200H52a4,4,0,0,0-4,4v12a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V204A4,4,0,0,0,188,200Z"/></svg>`;
}
