export const iconPhBoldChatTeardropSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07L50,60a103.37,103.37,0,0,0-22,64v84a20,20,0,0,0,20,20h84a104.32,104.32,0,0,0,55.87-16.31l11.25,12.38a12,12,0,0,0,17.76-16.14ZM132,204H52V124A79.51,79.51,0,0,1,66.46,78.14l105,115.49A79.08,79.08,0,0,1,132,204Zm104-80a102.9,102.9,0,0,1-10.36,45.29A12,12,0,0,1,204,158.83,79.25,79.25,0,0,0,212,124,80.07,80.07,0,0,0,104.16,49a12,12,0,0,1-8.35-22.5A104.07,104.07,0,0,1,236,124Z"/></svg>`;
}
