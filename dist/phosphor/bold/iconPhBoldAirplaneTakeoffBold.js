export const iconPhBoldAirplaneTakeoffBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,216a12,12,0,0,1-12,12H24a12,12,0,1,1,0-24H168A12,12,0,0,1,180,216ZM251.79,89.88a12,12,0,0,1-5.64,8.1L98.75,186l-.13.07a43.74,43.74,0,0,1-52.2-5.94l-.19-.18-36-35.25A20,20,0,0,1,15.78,112l2.94-1.44a12,12,0,0,1,9.12-.59l26.5,8.94,14.15-8.56L50.42,92.78a20,20,0,0,1,5.7-33.05l.48-.2,7.15-2.7a12,12,0,0,1,8.4,0L124.29,76l49.93-29.8a43.8,43.8,0,0,1,56.43,10,1.84,1.84,0,0,1,.17.22L249.46,80.3A11.94,11.94,0,0,1,251.79,89.88Zm-29.61-5.54L212,71.29a19.89,19.89,0,0,0-25.54-4.48l-54.77,32.7a12,12,0,0,1-10.3,1l-46-16.94,21,20.4a12,12,0,0,1-2.15,18.87L62,142.29a12,12,0,0,1-10,1.1l-13.35-4.5,24.31,23.8a19.89,19.89,0,0,0,23.6,2.65Z"/></svg>`;
}
