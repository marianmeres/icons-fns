export const iconPhThinFourK = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M28,48a4,4,0,0,1,4-4H224a4,4,0,0,1,0,8H32A4,4,0,0,1,28,48ZM224,204H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM144,76a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V145.5l17.75-20.28L196.54,178a4,4,0,1,0,6.92-4L171.3,118.87,203,82.63a4,4,0,1,0-6-5.26l-49,56V80A4,4,0,0,0,144,76ZM92,176V156H40a4,4,0,0,1-3.16-6.46l56-72A4,4,0,0,1,100,80v68h12a4,4,0,0,1,0,8H100v20a4,4,0,0,1-8,0Zm0-28V91.66L48.18,148Z"/></svg>`;
}
