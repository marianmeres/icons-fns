export const iconPhThinChargingStation = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M131.31,125.76a4,4,0,0,1,.4,3.73l-16,40A4,4,0,0,1,112,172a3.91,3.91,0,0,1-1.49-.29,4,4,0,0,1-2.22-5.2L122.09,132H96a4,4,0,0,1-3.71-5.49l16-40a4,4,0,1,1,7.42,3L101.91,124H128A4,4,0,0,1,131.31,125.76ZM244,86.63V168a20,20,0,0,1-40,0V128a12,12,0,0,0-12-12H172v96h20a4,4,0,0,1,0,8H32a4,4,0,0,1,0-8H52V56A20,20,0,0,1,72,36h80a20,20,0,0,1,20,20v52h20a20,20,0,0,1,20,20v40a12,12,0,0,0,24,0V86.63a12,12,0,0,0-3.51-8.49L213.17,58.83a4,4,0,0,1,5.66-5.66l19.31,19.32A19.85,19.85,0,0,1,244,86.63ZM164,212V56a12,12,0,0,0-12-12H72A12,12,0,0,0,60,56V212Z"/></svg>`;
}
