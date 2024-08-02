export const iconPhThinTextSuperscriptThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,144a4,4,0,0,1-4,4H192a4,4,0,0,1-3.2-6.4L232,84.05A20,20,0,0,0,213.22,52.2a20,20,0,0,0-16.08,13.14,4,4,0,1,1-7.55-2.67,28.34,28.34,0,0,1,4-7.52,28,28,0,1,1,44.72,33.7L200,140h40A4,4,0,0,1,244,144ZM146.62,77a4,4,0,0,0-5.64.4L92,133.89,43,77.38a4,4,0,0,0-6,5.24L86.71,140,37,197.38a4,4,0,1,0,6,5.24l49-56.51,49,56.51a4,4,0,0,0,6-5.24L97.29,140,147,82.62A4,4,0,0,0,146.62,77Z"/></svg>`;
}
