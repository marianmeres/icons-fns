export const iconPhThinPersonSimpleTaiChi = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,128,28Zm92,76a4,4,0,0,1-4,4H132v33.36l53.58,23A4,4,0,0,1,188,168v48a4,4,0,0,1-8,0V170.64l-51.22-22L50.68,219A4,4,0,1,1,45.32,213L124,142.22V108H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,104Z"/></svg>`;
}
