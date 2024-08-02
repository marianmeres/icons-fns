export const iconPhThinArrowUUpRightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M173.17,133.17,214.34,92H88a52,52,0,0,0,0,104h88a4,4,0,0,1,0,8H88A60,60,0,0,1,88,84H214.34L173.17,42.83a4,4,0,0,1,5.66-5.66l48,48a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66-5.66Z"/></svg>`;
}
