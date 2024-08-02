export const iconPhThinOctagon = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.49,83.06,172.94,31.51A12,12,0,0,0,164.45,28H91.55a12,12,0,0,0-8.49,3.51L31.51,83.06A12,12,0,0,0,28,91.55v72.9a12,12,0,0,0,3.51,8.49l51.55,51.55A12,12,0,0,0,91.55,228h72.9a12,12,0,0,0,8.49-3.51l51.55-51.55a12,12,0,0,0,3.51-8.49V91.55A12,12,0,0,0,224.49,83.06ZM220,164.45a4,4,0,0,1-1.17,2.83l-51.55,51.55a4,4,0,0,1-2.83,1.17H91.55a4,4,0,0,1-2.83-1.17L37.17,167.28A4,4,0,0,1,36,164.45V91.55a4,4,0,0,1,1.17-2.83L88.72,37.17A4,4,0,0,1,91.55,36h72.9a4,4,0,0,1,2.83,1.17l51.55,51.55A4,4,0,0,1,220,91.55Z"/></svg>`;
}
