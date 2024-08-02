export const iconPhBoldMapPinLineBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,220H160.73c5.18-5,10.75-10.71,16.33-17.13C205.15,170.57,220,136.37,220,104a92,92,0,0,0-184,0c0,50,34.12,91.94,59.18,116H56a12,12,0,0,0,0,24H200a12,12,0,0,0,0-24ZM60,104a68,68,0,0,1,136,0c0,33.31-20,63.37-36.7,82.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104Zm68,44a44,44,0,1,0-44-44A44.05,44.05,0,0,0,128,148Zm0-64a20,20,0,1,1-20,20A20,20,0,0,1,128,84Z"/></svg>`;
}
