export const iconPhBoldSeatBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,232a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24H216A12,12,0,0,1,228,232Zm0-72v28a20,20,0,0,1-20,20H112.1a19.9,19.9,0,0,1-17.89-11.06L38.1,85a20.12,20.12,0,0,1,0-17.9L60.22,23a20,20,0,0,1,26.72-9l29.81,14.27.18.09a20,20,0,0,1,8.95,26.83l-.17.33L112.5,80.08,142.25,140H208A20,20,0,0,1,228,160Zm-24,4H139.77a19.9,19.9,0,0,1-17.89-11.06l-31.79-64a20.07,20.07,0,0,1,0-17.86c.06-.11.12-.22.17-.33l12.2-22.62L79.91,37.3,60.47,76l54.1,108H204Z"/></svg>`;
}
