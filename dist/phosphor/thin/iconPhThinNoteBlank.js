export const iconPhThinNoteBlank = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H156.69a11.93,11.93,0,0,0,8.48-3.51l51.32-51.32a11.93,11.93,0,0,0,3.51-8.48V48A12,12,0,0,0,208,36ZM44,208V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4V156H160a4,4,0,0,0-4,4v52H48A4,4,0,0,1,44,208Zm120-1.66V164h42.35Z"/></svg>`;
}
