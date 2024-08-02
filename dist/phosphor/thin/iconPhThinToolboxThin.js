export const iconPhThinToolboxThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,68H172V56a20,20,0,0,0-20-20H104A20,20,0,0,0,84,56V68H32A12,12,0,0,0,20,80V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68ZM92,56a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V68H92ZM32,76H224a4,4,0,0,1,4,4v36H188V104a4,4,0,0,0-8,0v12H76V104a4,4,0,0,0-8,0v12H28V80A4,4,0,0,1,32,76ZM224,196H32a4,4,0,0,1-4-4V124H68v12a4,4,0,0,0,8,0V124H180v12a4,4,0,0,0,8,0V124h40v68A4,4,0,0,1,224,196Z"/></svg>`;
}
