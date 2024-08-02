export const iconPhThinMapPinSimpleArea = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,99.77V176a4,4,0,0,0,8,0V99.77a36,36,0,1,0-8,0ZM128,36a28,28,0,1,1-28,28A28,28,0,0,1,128,36ZM236,176c0,12.46-11.73,23.83-33,32-20.09,7.73-46.72,12-75,12s-54.89-4.25-75-12c-21.29-8.19-33-19.56-33-32,0-18.55,25.81-34.22,67.37-40.88A4,4,0,1,1,88.63,143C52.93,148.74,28,162.3,28,176c0,17.39,40.18,36,100,36s100-18.61,100-36c0-13.7-24.93-27.26-60.63-33a4,4,0,1,1,1.26-7.89C210.19,141.78,236,157.45,236,176Z"/></svg>`;
}
