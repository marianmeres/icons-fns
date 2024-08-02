export const iconPhThinMarkdownLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,52H24A12,12,0,0,0,12,64V192a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V64A12,12,0,0,0,232,52Zm4,140a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4ZM124,104v48a4,4,0,0,1-8,0V113.66L90.83,138.83a4,4,0,0,1-5.66,0L60,113.66V152a4,4,0,0,1-8,0V104a4,4,0,0,1,6.83-2.83L88,130.34l29.17-29.17A4,4,0,0,1,124,104Zm78.83,21.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66,0l-24-24a4,4,0,1,1,5.66-5.66L172,142.34V104a4,4,0,0,1,8,0v38.34l17.17-17.17A4,4,0,0,1,202.83,125.17Z"/></svg>`;
}
