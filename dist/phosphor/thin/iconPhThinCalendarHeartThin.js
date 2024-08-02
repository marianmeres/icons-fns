export const iconPhThinCalendarHeartThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4ZM152,92a28,28,0,0,0-24,13.59A28,28,0,0,0,76,120c0,14.51,8.56,29,25.44,43.07a143.52,143.52,0,0,0,24.77,16.51,4,4,0,0,0,3.58,0,143.52,143.52,0,0,0,24.77-16.51C171.44,149,180,134.51,180,120A28,28,0,0,0,152,92Zm-24,79.47c-8.46-4.64-44-25.67-44-51.47a20,20,0,0,1,40,0,4,4,0,0,0,8,0,20,20,0,0,1,40,0C172,145.8,136.46,166.83,128,171.47Z"/></svg>`;
}
