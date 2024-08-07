export const iconPhThinTextSubscript = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,208a4,4,0,0,1-4,4H192a4,4,0,0,1-3.2-6.4L232,148A20,20,0,0,0,228,120,20,20,0,0,0,200,124a20.23,20.23,0,0,0-2.89,5.37,4,4,0,0,1-7.55-2.66,28.34,28.34,0,0,1,4-7.52,28,28,0,0,1,44.72,33.7L200,204h40A4,4,0,0,1,244,208ZM146.62,53a4,4,0,0,0-5.64.4L92,109.89,43,53.38a4,4,0,1,0-6,5.24L86.71,116,37,173.38a4,4,0,1,0,6,5.24l49-56.51,49,56.51a4,4,0,0,0,6-5.24L97.29,116,147,58.62A4,4,0,0,0,146.62,53Z"/></svg>`;
}
