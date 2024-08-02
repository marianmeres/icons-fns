export const iconPhThinWatchThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,128a75.94,75.94,0,0,0-32.35-62.16l-6.52-36A12,12,0,0,0,153.32,20H102.68a12,12,0,0,0-11.81,9.86l-6.52,36a75.89,75.89,0,0,0,0,124.32l6.52,36A12,12,0,0,0,102.68,236h50.64a12,12,0,0,0,11.81-9.86l6.52-36A75.94,75.94,0,0,0,204,128ZM98.74,31.29A4,4,0,0,1,102.68,28h50.64a4,4,0,0,1,3.94,3.29l5.26,29a75.69,75.69,0,0,0-69,0Zm58.52,193.42a4,4,0,0,1-3.94,3.29H102.68a4,4,0,0,1-3.94-3.29l-5.26-29a75.69,75.69,0,0,0,69,0ZM128,196a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Zm44-68a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z"/></svg>`;
}
