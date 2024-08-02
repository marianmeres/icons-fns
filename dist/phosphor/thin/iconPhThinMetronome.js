export const iconPhThinMetronome = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M182.63,113.85,211,82.69A4,4,0,1,0,205,77.31L179.82,105l-19.3-60.68A12,12,0,0,0,149.08,36H106.92a12,12,0,0,0-11.44,8.36l-50.9,160A12,12,0,0,0,56,220H200a12,12,0,0,0,11.43-15.64ZM190.19,164H137l39.37-43.31ZM103.1,46.79A4,4,0,0,1,106.92,44h42.16a4,4,0,0,1,3.82,2.79l20.71,65.09L126.23,164H65.81ZM203.22,210.36A4,4,0,0,1,200,212H56a4,4,0,0,1-3.81-5.21L63.27,172H192.73l11.07,34.79A4,4,0,0,1,203.22,210.36Z"/></svg>`;
}
