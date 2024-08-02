export const iconPhThinCableCarThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.94,31.3a4,4,0,0,0-4.64-3.24l-224,40A4,4,0,0,0,16,76a4.14,4.14,0,0,0,.7-.06L124,56.78V100H64a28,28,0,0,0-28,28v64a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V128a28,28,0,0,0-28-28H132V55.35L240.7,35.94A4,4,0,0,0,243.94,31.3ZM100,164V108h56v56ZM64,108H92v56H44V128A20,20,0,0,1,64,108ZM192,212H64a20,20,0,0,1-20-20V172H212v20A20,20,0,0,1,192,212Zm20-84v36H164V108h28A20,20,0,0,1,212,128Z"/></svg>`;
}
