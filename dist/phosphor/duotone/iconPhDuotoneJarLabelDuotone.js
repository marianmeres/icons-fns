export const iconPhDuotoneJarLabelDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,104v80H48V104Z" opacity="0.2"/><path d="M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM56,112H200v64H56ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32ZM80,64h96a24,24,0,0,1,24,24v8H56V88A24,24,0,0,1,80,64Zm96,160H80a24,24,0,0,1-24-24v-8H200v8A24,24,0,0,1,176,224Z"/></svg>`;
}
