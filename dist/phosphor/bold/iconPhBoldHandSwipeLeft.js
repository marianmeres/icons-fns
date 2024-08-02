export const iconPhBoldHandSwipeLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M256,56a12,12,0,0,1-12,12H201l11.51,11.51a12,12,0,1,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L201,44h43A12,12,0,0,1,256,56Zm-68,60a31.86,31.86,0,0,0-11.22,2A32,32,0,0,0,140,101V76a32,32,0,0,0-64,0v66.83A32,32,0,0,0,24.28,180l.12.2,25.31,42A12,12,0,0,0,70.27,209.8L45,167.92A8,8,0,0,1,58.92,160l.21.34,18.68,30A12,12,0,0,0,100,184V76a8,8,0,0,1,16,0v68a12,12,0,0,0,24,0V132a8,8,0,0,1,16,0v20a12,12,0,0,0,24,0v-4a8,8,0,0,1,16,0v36c0,11.08-1.28,21.67-3.42,28.32a12,12,0,1,0,22.84,7.36c3-9.16,4.58-21.83,4.58-35.68V148A32,32,0,0,0,188,116Z"/></svg>`;
}
