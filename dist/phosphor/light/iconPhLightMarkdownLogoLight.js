export const iconPhLightMarkdownLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,50H24A14,14,0,0,0,10,64V192a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V64A14,14,0,0,0,232,50Zm2,142a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2ZM126,104v48a6,6,0,0,1-12,0V118.49L92.24,140.24a6,6,0,0,1-8.48,0L62,118.49V152a6,6,0,0,1-12,0V104a6,6,0,0,1,10.24-4.24L88,127.51l27.76-27.75A6,6,0,0,1,126,104Zm78.24,19.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48,0l-24-24a6,6,0,1,1,8.48-8.48L170,137.51V104a6,6,0,0,1,12,0v33.51l13.76-13.75A6,6,0,0,1,204.24,123.76Z"/></svg>`;
}
