export const iconPhThinAirplaneTaxiingThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,100H145.66L98.83,53.17A4,4,0,0,0,96,52H88A12,12,0,0,0,76.63,67.79L87.36,100H57.66L34.83,77.17A4,4,0,0,0,32,76H24A12,12,0,0,0,12.52,91.45l14.06,46.89A35.79,35.79,0,0,0,61.06,164H240a4,4,0,0,0,4-4V136A36,36,0,0,0,208,100Zm28,56H61.06a27.83,27.83,0,0,1-26.81-19.95L20.18,89.15A4,4,0,0,1,24,84h6.34l22.83,22.83A4,4,0,0,0,56,108H92.91a4,4,0,0,0,3.79-5.26L84.21,65.26A4,4,0,0,1,88,60h6.34l46.82,46.83A4,4,0,0,0,144,108h64a28,28,0,0,1,28,28Zm-16,44a12,12,0,1,1-12-12A12,12,0,0,1,220,200Zm-96,0a12,12,0,1,1-12-12A12,12,0,0,1,124,200Z"/></svg>`;
}
