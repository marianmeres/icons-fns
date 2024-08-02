export const iconPhThinStudentThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.27,60.21l-96-32a4,4,0,0,0-2.54,0l-96,32A4,4,0,0,0,28,64v80a4,4,0,0,0,8,0V69.55L79.88,84.18a60,60,0,0,0,24.54,91c-20.86,5.74-39,19.13-51.77,38.65a4,4,0,0,0,6.7,4.36C75.17,193.92,100.2,180,128,180s52.83,13.92,68.65,38.18a4,4,0,0,0,6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60,60,0,0,0,24.54-91l49.15-16.39a4,4,0,0,0,0-7.58ZM180,120A52,52,0,1,1,87.93,86.86l38.8,12.93a3.95,3.95,0,0,0,2.54,0l38.8-12.93A51.85,51.85,0,0,1,180,120ZM128,91.78,44.65,64,128,36.22,211.35,64Z"/></svg>`;
}
