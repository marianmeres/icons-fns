export const iconPhBoldPencilSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07l45.64,50.2-50.9,50.9A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.85,19.85,0,0,0,14.14-5.86l47.43-47.42,44.87,49.35a12,12,0,1,0,17.76-16.14Zm54.55,95.68L72,167,61,156l40-39.95ZM52,181l23,23H52ZM100,195,89,184l38.62-38.62,10.51,11.56ZM230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0l-36,36a12,12,0,0,0,14.55,18.82L147.08,92A12,12,0,0,0,164,108.93L175,120l-.54.53a12,12,0,1,0,17,17l38.67-38.67A20,20,0,0,0,230.15,70.54ZM192,103,153,64l18.34-18.34,39,39Z"/></svg>`;
}
