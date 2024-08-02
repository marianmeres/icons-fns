export const iconPhThinWheelchairMotion = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,76a28,28,0,1,0-28-28A28,28,0,0,0,176,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,176,28ZM164,168a60,60,0,1,1-60-60,4,4,0,0,1,0,8,52,52,0,1,0,52,52,4,4,0,0,1,8,0Zm39.09-34.54a4,4,0,0,1,.83,3.32l-16,80A4,4,0,0,1,184,220a3.44,3.44,0,0,1-.78-.08,4,4,0,0,1-3.14-4.7l15-75.22H128a4,4,0,0,1-3.47-6l22.08-38.42a84.05,84.05,0,0,0-96.06,7.61A4,4,0,0,1,45.45,97a92,92,0,0,1,108.73-6.15,4,4,0,0,1,1.29,5.34L134.91,132H200A4,4,0,0,1,203.09,133.46Z"/></svg>`;
}
