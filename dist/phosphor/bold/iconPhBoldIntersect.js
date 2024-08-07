export const iconPhBoldIntersect = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M178,78A84,84,0,1,0,78,178,84,84,0,1,0,178,78Zm-22.19,22.19a59.57,59.57,0,0,1-9.81,28.9L126.94,110A59.57,59.57,0,0,1,155.84,100.16Zm-79.5,52.51a60,60,0,1,1,76.33-76.33A84.11,84.11,0,0,0,76.34,152.67Zm23.82,3.17a59.57,59.57,0,0,1,9.81-28.9L129.06,146A59.57,59.57,0,0,1,100.16,155.84ZM160,220a60.09,60.09,0,0,1-56.67-40.34,84.11,84.11,0,0,0,76.33-76.33A60,60,0,0,1,160,220Z"/></svg>`;
}
