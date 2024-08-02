export const iconPhBoldAirplaneTaxiing = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,88H149L104.49,43.51A12,12,0,0,0,96,40H88A20,20,0,0,0,69,66.33L76.27,88H61L40.49,67.51A12,12,0,0,0,32,64H24A20,20,0,0,0,4.86,89.75l14.07,46.89A43.72,43.72,0,0,0,61.07,168H240a12,12,0,0,0,12-12V132A44.05,44.05,0,0,0,208,88Zm20,56H61.07a19.89,19.89,0,0,1-19.16-14.25L30.4,91.36l17.12,17.13A12,12,0,0,0,56,112h36.9A12,12,0,0,0,104.3,96.21L94.83,67.79l40.69,40.7A12,12,0,0,0,144,112h64a20,20,0,0,1,20,20Zm0,60a20,20,0,1,1-20-20A20,20,0,0,1,228,204Zm-96,0a20,20,0,1,1-20-20A20,20,0,0,1,132,204Z"/></svg>`;
}
