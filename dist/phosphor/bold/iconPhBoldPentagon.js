export const iconPhBoldPentagon = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,84.38l-87.9-68.29-.26-.2a19.92,19.92,0,0,0-23.66,0l-.26.2L28,84.38a20,20,0,0,0-7.09,22l32,107.51.08.26A19.93,19.93,0,0,0,72,228H184a19.93,19.93,0,0,0,19-13.87l.08-.26,32-107.51A20,20,0,0,0,228,84.38ZM181,204H75L44.62,101.87,128,37.09l83.38,64.78Z"/></svg>`;
}
