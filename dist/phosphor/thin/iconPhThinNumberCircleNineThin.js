export const iconPhThinNumberCircleNineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,80.29a32,32,0,1,0-6.23,58.16L116.57,174a4,4,0,0,0,1.38,5.48,3.92,3.92,0,0,0,2,.57,4,4,0,0,0,3.43-1.95L155.71,124A32,32,0,0,0,144,80.29ZM148.8,120l-.06.09a22.62,22.62,0,1,1,.06-.09ZM128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z"/></svg>`;
}
