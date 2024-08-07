export const iconPhBoldPen = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0L33.86,149.17A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.85,19.85,0,0,0,14.14-5.86l79.46-79.45,4.16,13.89-34.93,34.93a12,12,0,0,0,17,17l40-40a12,12,0,0,0,3-11.94l-9.94-33.13,24.59-24.59A20,20,0,0,0,230.15,70.54ZM65,152l71-71,39,39-71,71ZM52,173l31,31H52ZM192,103,153,64l18.34-18.34,39,39Z"/></svg>`;
}
