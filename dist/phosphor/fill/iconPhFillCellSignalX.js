export const iconPhFillCellSignalX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,194.34a8,8,0,0,1-11.32,11.32L184,187.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L172.69,176l-18.35-18.34a8,8,0,0,1,11.32-11.32L184,164.69l18.34-18.35a8,8,0,0,1,11.32,11.32L195.31,176ZM157.41,120.1a32,32,0,0,1,23.92,8.05,4,4,0,0,0,5.34,0,31.88,31.88,0,0,1,17.77-8,4,4,0,0,0,3.56-4V40.46a16.41,16.41,0,0,0-9.18-14.93,16,16,0,0,0-18.14,3.16l-160,160a16,16,0,0,0-3.17,18.13A16.4,16.4,0,0,0,32.46,216h93.6a4,4,0,0,0,3.78-5.3,32,32,0,0,1,6.31-32,4,4,0,0,0,0-5.34,32,32,0,0,1,21.26-53.23Z"/></svg>`;
}
