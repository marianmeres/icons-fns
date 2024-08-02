export const iconPhThinWheelchair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M251.79,190.73a4,4,0,0,0-5.06-2.52l-20.7,6.9-30.45-60.9A4,4,0,0,0,192,132H108V100.15c1.32-.09,2.65-.15,4-.15h56a4,4,0,0,0,0-8H112c-1.34,0-2.68,0-4,.13V75.71a28,28,0,1,0-8,0V93.08A68,68,0,0,0,112,228c31.72,0,60.27-21.45,67.87-51a4,4,0,0,0-7.74-2c-6.71,26.08-32,45-60.13,45a60,60,0,0,1-12-118.79V136a4,4,0,0,0,4,4h85.53l30.89,61.79A4,4,0,0,0,224,204a3.92,3.92,0,0,0,1.26-.21l24-8A4,4,0,0,0,251.79,190.73ZM84,48a20,20,0,1,1,20,20A20,20,0,0,1,84,48Z"/></svg>`;
}
