export const iconPhThinBugDroid = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M186.17,51.49l16.66-16.66a4,4,0,1,0-5.66-5.66l-17,17a83.72,83.72,0,0,0-104.26,0l-17-17a4,4,0,0,0-5.66,5.66L69.83,51.49A83.75,83.75,0,0,0,44,112v40a84,84,0,0,0,168,0V112A83.75,83.75,0,0,0,186.17,51.49ZM128,36a76.08,76.08,0,0,1,76,76v12H52V112A76.08,76.08,0,0,1,128,36Zm0,192a76.08,76.08,0,0,1-76-76V132H204v20A76.08,76.08,0,0,1,128,228ZM148,92a8,8,0,1,1,8,8A8,8,0,0,1,148,92ZM92,92a8,8,0,1,1,8,8A8,8,0,0,1,92,92Z"/></svg>`;
}
