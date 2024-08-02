export const iconPhBoldSprayBottle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,84a12,12,0,0,0,12-12,60.07,60.07,0,0,0-60-60H80A20,20,0,0,0,60,32V80a20,20,0,0,1-20,20,12,12,0,0,0,0,24A44.06,44.06,0,0,0,83.82,84H108v20.62a19.92,19.92,0,0,1-7.51,15.62L84.51,133A43.8,43.8,0,0,0,68,167.38V224a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V211.47A274.77,274.77,0,0,0,180.68,84ZM84,36h68a36,36,0,0,1,33.94,24H84ZM188,211.47V220H92V167.38a19.92,19.92,0,0,1,7.51-15.62l16-12.78A43.8,43.8,0,0,0,132,104.62V84h21.24A250.93,250.93,0,0,1,188,211.47Z"/></svg>`;
}
