export const iconPhFillWheelchairMotion = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,48a32,32,0,1,1,32,32A32,32,0,0,1,144,48Zm16,112a8,8,0,0,0-8,8,48,48,0,1,1-48-48,8,8,0,0,0,0-16,64,64,0,1,0,64,64A8,8,0,0,0,160,160Zm40-32H141.82l17.12-29.78a8,8,0,0,0-2.57-10.69A96,96,0,0,0,42.91,94a8,8,0,1,0,10.18,12.33,80.09,80.09,0,0,1,88-9.17L121.06,132A8,8,0,0,0,128,144h62.24l-14.08,70.43a8,8,0,0,0,6.27,9.41A7.77,7.77,0,0,0,184,224a8,8,0,0,0,7.83-6.43l16-80A8,8,0,0,0,200,128Z"/></svg>`;
}
