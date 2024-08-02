export const iconPhBoldCraneBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.17,13.71a12,12,0,0,0-11.82-.3L101,76H32A20,20,0,0,0,12,96V200a20,20,0,0,0,20,20h88a20,20,0,0,0,20-20V168a11.86,11.86,0,0,0-.51-3.45L118.32,94,212,44V156H200v-4a12,12,0,0,0-24,0v8a20,20,0,0,0,20,20h20a20,20,0,0,0,20-20V24A12,12,0,0,0,230.17,13.71ZM95.07,100l16.8,56H76V100ZM52,100v56H36V100ZM36,196V180h80v16Z"/></svg>`;
}
