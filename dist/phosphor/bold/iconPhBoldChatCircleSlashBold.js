export const iconPhBoldChatCircleSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07l7.81,8.59A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81a108.08,108.08,0,0,0,112.55-8.66l7.8,8.58a12,12,0,0,0,17.76-16.14ZM128,212a83.91,83.91,0,0,1-42-11.27,12,12,0,0,0-9.82-1l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.82,84,84,0,0,1,7.94-95.49l111.84,123A83.83,83.83,0,0,1,128,212Zm108-84a107.22,107.22,0,0,1-8.65,42.4A12,12,0,0,1,205.28,161a84.07,84.07,0,0,0-102.77-113,12,12,0,0,1-7.27-22.87A108.08,108.08,0,0,1,236,128Z"/></svg>`;
}
