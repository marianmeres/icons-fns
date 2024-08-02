export const iconPhThinThermometerCold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M247.67,73.92l-25.2,8.18L238,103.54a4,4,0,1,1-6.47,4.7L216,86.81l-15.57,21.43a4,4,0,0,1-3.24,1.65,4,4,0,0,1-3.23-6.35L209.53,82.1l-25.2-8.18a4,4,0,1,1,2.47-7.61L212,74.49V48a4,4,0,0,1,8,0V74.49l25.2-8.18a4,4,0,1,1,2.47,7.61ZM148,184a28,28,0,1,1-32-27.71V120a4,4,0,0,1,8,0v36.29A28,28,0,0,1,148,184Zm-8,0a20,20,0,1,0-20,20A20,20,0,0,0,140,184Zm40,0a60,60,0,1,1-96-48V48a36,36,0,0,1,72,0v88A60.06,60.06,0,0,1,180,184Zm-8,0a52.06,52.06,0,0,0-22.29-42.68A4,4,0,0,1,148,138V48a28,28,0,0,0-56,0v90a4,4,0,0,1-1.71,3.28A52,52,0,1,0,172,184Z"/></svg>`;
}
