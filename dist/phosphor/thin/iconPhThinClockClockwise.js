export const iconPhThinClockClockwise = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,80v45.74l38.06,22.83a4,4,0,0,1-4.12,6.86l-40-24A4,4,0,0,1,124,128V80a4,4,0,0,1,8,0Zm92-20a4,4,0,0,0-4,4V92.85C211.33,82.46,203,73,193.05,63a92,92,0,1,0-1.9,132,4,4,0,0,0-5.5-5.82,84,84,0,1,1,1.73-120.5C197.7,79,206.39,89,215.53,100H184a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V64A4,4,0,0,0,224,60Z"/></svg>`;
}
