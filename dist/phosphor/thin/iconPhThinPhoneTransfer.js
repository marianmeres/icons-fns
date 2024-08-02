export const iconPhThinPhoneTransfer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,72a4,4,0,0,1,4-4h62.34L181.17,42.83a4,4,0,0,1,5.66-5.66l32,32a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L206.34,76H144A4,4,0,0,1,140,72Zm79.91,110.58A52.26,52.26,0,0,1,168,228C90.8,228,28,165.2,28,88A52.26,52.26,0,0,1,73.42,36.09,12,12,0,0,1,85.9,43.28L107,90.42a12,12,0,0,1-1,11.36,3.47,3.47,0,0,1-.29.38L84.56,127.37a3.9,3.9,0,0,0-.18,3.69c7.83,16.05,24.65,32.73,40.89,40.57a3.9,3.9,0,0,0,3.7-.21L153.8,150.3a3.27,3.27,0,0,1,.37-.28A12,12,0,0,1,165.56,149l47.22,21.16A12,12,0,0,1,219.91,182.58Zm-10.35-5.12L162.35,156.3a3.93,3.93,0,0,0-3.57.27L134,177.69l-.37.28a12,12,0,0,1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27A12,12,0,0,1,78,122.82l.29-.39,21.19-25.2a4,4,0,0,0,.23-3.6L78.57,46.5A4,4,0,0,0,74.9,44a3.87,3.87,0,0,0-.48,0A44.23,44.23,0,0,0,36,88,132.14,132.14,0,0,0,168,220a44.23,44.23,0,0,0,44-38.42A4,4,0,0,0,209.56,177.46Z"/></svg>`;
}
