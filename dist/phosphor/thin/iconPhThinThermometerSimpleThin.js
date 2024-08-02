export const iconPhThinThermometerSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,156.29V88a4,4,0,0,0-8,0v68.29a28,28,0,1,0,8,0ZM128,204a20,20,0,1,1,20-20A20,20,0,0,1,128,204Zm36-68V48a36,36,0,0,0-72,0v88a60,60,0,1,0,72,0ZM128,236a52,52,0,0,1-29.71-94.68A4,4,0,0,0,100,138V48a28,28,0,0,1,56,0v90a4,4,0,0,0,1.71,3.28A52,52,0,0,1,128,236Z"/></svg>`;
}
