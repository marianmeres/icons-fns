export const iconPhThinArrowsInThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M148,104V64a4,4,0,0,1,8,0V94.34l49.17-49.17a4,4,0,1,1,5.66,5.66L161.66,100H192a4,4,0,0,1,0,8H152A4,4,0,0,1,148,104Zm-44,44H64a4,4,0,0,0,0,8H94.34L45.17,205.17a4,4,0,0,0,5.66,5.66L100,161.66V192a4,4,0,0,0,8,0V152A4,4,0,0,0,104,148Zm57.66,8H192a4,4,0,0,0,0-8H152a4,4,0,0,0-4,4v40a4,4,0,0,0,8,0V161.66l49.17,49.17a4,4,0,0,0,5.66-5.66ZM104,60a4,4,0,0,0-4,4V94.34L50.83,45.17a4,4,0,0,0-5.66,5.66L94.34,100H64a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V64A4,4,0,0,0,104,60Z"/></svg>`;
}
