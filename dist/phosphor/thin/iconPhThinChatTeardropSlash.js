export const iconPhThinChatTeardropSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51,37.31A4,4,0,0,0,45,42.69L60.62,59.83A95.41,95.41,0,0,0,36,124v84a12,12,0,0,0,12,12h84a96.34,96.34,0,0,0,57.11-18.83L205,218.69a4,4,0,1,0,5.92-5.38ZM132,212H48a4,4,0,0,1-4-4V124A87.49,87.49,0,0,1,66,65.77L183.7,195.21A86.92,86.92,0,0,1,132,212Zm96-88a95.79,95.79,0,0,1-13.78,49.58,4,4,0,1,1-6.84-4.14A88,88,0,0,0,93.92,44.64a4,4,0,1,1-3.46-7.21A95,95,0,0,1,132,28,96.11,96.11,0,0,1,228,124Z"/></svg>`;
}
