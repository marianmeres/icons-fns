export const iconPhBoldHandSwipeRightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,148v36c0,13.85-1.63,26.52-4.58,35.68a12,12,0,0,1-22.84-7.36c2.14-6.65,3.42-17.24,3.42-28.32V148a8,8,0,0,0-16,0v4a12,12,0,0,1-24,0V132a8,8,0,0,0-16,0v12a12,12,0,0,1-24,0V76a8,8,0,0,0-16,0V184a12,12,0,0,1-22.18,6.34l-18.68-30-.21-.34A8,8,0,0,0,45,167.92L70.27,209.8a12,12,0,0,1-20.56,12.39l-25.31-42-.12-.2A32,32,0,0,1,76,142.83V76a32,32,0,0,1,64,0v25a32,32,0,0,1,36.78,17A32,32,0,0,1,220,148ZM252.48,47.51l-32-32a12,12,0,0,0-17,17L215,44H172a12,12,0,0,0,0,24h43L203.51,79.51a12,12,0,1,0,17,17l32-32A12,12,0,0,0,252.48,47.51Z"/></svg>`;
}
