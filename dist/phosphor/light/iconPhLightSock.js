export const iconPhLightSock = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,18H104A14,14,0,0,0,90,32v77.51L50.67,148.85a56.91,56.91,0,1,0,80.48,80.48l68.41-68.4A21.88,21.88,0,0,0,206,145.37V32A14,14,0,0,0,192,18ZM104,30h88a2,2,0,0,1,2,2V50H102V32A2,2,0,0,1,104,30Zm18.67,190.85a44.92,44.92,0,0,1-63.52-63.52l41.09-41.09A6,6,0,0,0,102,112V62h92v44.34A54.07,54.07,0,0,0,146,160a53.39,53.39,0,0,0,8.47,29Zm68.4-68.41L163.22,180.3A41.54,41.54,0,0,1,158,160a42.05,42.05,0,0,1,36-41.56v26.93A9.93,9.93,0,0,1,191.07,152.44Z"/></svg>`;
}
