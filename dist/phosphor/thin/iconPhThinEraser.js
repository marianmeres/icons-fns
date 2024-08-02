export const iconPhThinEraser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222.15,83.22,180.77,41.85a20,20,0,0,0-28.28,0L33.85,160.48a20,20,0,0,0,0,28.29l30.06,30.06A4,4,0,0,0,66.74,220H216a4,4,0,0,0,0-8H121.66L222.15,111.51A20,20,0,0,0,222.15,83.22ZM110.34,212H68.4L39.51,183.11a12,12,0,0,1,0-17L96,109.65,154.35,168ZM216.49,105.85,160,162.34,101.65,104l56.49-56.48a12,12,0,0,1,17,0l41.37,41.37A12,12,0,0,1,216.49,105.85Z"/></svg>`;
}
