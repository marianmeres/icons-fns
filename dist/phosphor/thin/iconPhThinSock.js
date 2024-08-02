export const iconPhThinSock = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,20H104A12,12,0,0,0,92,32v78.34L52.08,150.26a54.91,54.91,0,0,0,77.66,77.66l68.4-68.41A19.85,19.85,0,0,0,204,145.37V32A12,12,0,0,0,192,20Zm-88,8h88a4,4,0,0,1,4,4V52H100V32A4,4,0,0,1,104,28Zm20.08,194.26a46.91,46.91,0,1,1-66.34-66.34l41.09-41.09A4,4,0,0,0,100,112V60h96v48.17A52.05,52.05,0,0,0,148,160a51.44,51.44,0,0,0,9,29.3Zm68.4-68.4-29.66,29.67A43.5,43.5,0,0,1,156,160a44.06,44.06,0,0,1,40-43.81v29.18A11.92,11.92,0,0,1,192.48,153.86Z"/></svg>`;
}
