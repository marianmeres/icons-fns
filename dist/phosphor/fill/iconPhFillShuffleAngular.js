export const iconPhFillShuffleAngular = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24A8,8,0,0,1,200,208V192H168a8,8,0,0,1-6.51-3.35L83.88,80H32a8,8,0,0,1,0-16H88a8,8,0,0,1,6.51,3.35L172.12,176H200V160a8,8,0,0,1,13.66-5.66ZM143,107a8,8,0,0,0,11.16-1.86l18-25.12H200V96a8,8,0,0,0,13.66,5.66l24-24a8,8,0,0,0,0-11.32l-24-24A8,8,0,0,0,200,48V64H168a8,8,0,0,0-6.51,3.35L141.15,95.82A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86L83.88,176H32a8,8,0,0,0,0,16H88a8,8,0,0,0,6.51-3.35l20.34-28.47A8,8,0,0,0,113,149Z"/></svg>`;
}
