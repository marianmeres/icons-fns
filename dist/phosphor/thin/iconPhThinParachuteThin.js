export const iconPhThinParachuteThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,120a100,100,0,0,0-200,0,4,4,0,0,0,1.3,2.94,2.81,2.81,0,0,0,.3.26L124,194v26H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8H132V194l94.4-70.8h0A4,4,0,0,0,228,120Zm-8.09-4H172C171,67.38,152.13,40.86,140,28.79A92.14,92.14,0,0,1,219.91,116ZM128,28.89A76.67,76.67,0,0,1,145,47.64c8.36,12.69,18.27,34.71,19,68.36H92.05c.73-33.65,10.64-55.67,19-68.36A76.47,76.47,0,0,1,128,28.89ZM161.2,124,128,183.76,94.8,124Zm-75.55,0,29.74,53.54L44,124Zm84.7,0H212l-71.39,53.54ZM116,28.79C103.87,40.86,85,67.38,84,116H36.09A92.14,92.14,0,0,1,116,28.79Z"/></svg>`;
}
