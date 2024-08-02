export const iconPhLightTote = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.47,70.73A14.09,14.09,0,0,0,223.92,66H174V64a46,46,0,0,0-92,0v2H32.08a14,14,0,0,0-14,15.64l14.25,120a14.06,14.06,0,0,0,14,12.36H209.67a14.06,14.06,0,0,0,14-12.36l14.25-120A14,14,0,0,0,234.47,70.73ZM94,64a34,34,0,0,1,68,0v2H94ZM211.73,200.23a2,2,0,0,1-2.06,1.77H46.33a2,2,0,0,1-2.06-1.77L30,80.23a1.92,1.92,0,0,1,.49-1.53,2.07,2.07,0,0,1,1.58-.7H82v26a6,6,0,0,0,12,0V78h68v26a6,6,0,0,0,12,0V78h49.92a2.07,2.07,0,0,1,1.58.7,1.92,1.92,0,0,1,.49,1.53Z"/></svg>`;
}
