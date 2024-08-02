export const iconPhThinParallelogramThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M242.07,49.48A12,12,0,0,0,232,44H88.81a12,12,0,0,0-11,7.08l-64.8,144A12,12,0,0,0,24,212H167.19a12,12,0,0,0,10.95-7.08l64.8-144A12,12,0,0,0,242.07,49.48Zm-6.43,8.16-64.8,144a4,4,0,0,1-3.65,2.36H24a4,4,0,0,1-3.65-5.64l64.8-144A4,4,0,0,1,88.81,52H232a4,4,0,0,1,3.65,5.64Z"/></svg>`;
}
