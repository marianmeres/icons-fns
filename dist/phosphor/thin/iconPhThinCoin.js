export const iconPhThinCoin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M205.79,67.42C185.9,57.48,158.27,52,128,52S70.1,57.48,50.21,67.42C31,77,20,90.35,20,104v48c0,13.65,11,27,30.21,36.58C70.1,198.52,97.73,204,128,204s57.9-5.48,77.79-15.42C225,179,236,165.65,236,152V104C236,90.35,225,77,205.79,67.42ZM128,60c61.77,0,100,22.84,100,44s-38.23,44-100,44S28,125.16,28,104,66.23,60,128,60ZM124,156v40c-22-.35-40.94-3.65-56-8.71V147.65C84.23,152.75,103.44,155.62,124,156Zm8,0c20.56-.33,39.77-3.2,56-8.3v39.59c-15.06,5.06-33.95,8.36-56,8.71ZM28,152V123.92c5.15,6.19,12.67,11.89,22.21,16.66,3.08,1.54,6.36,2.95,9.79,4.28v39.38C39.49,175.67,28,163.59,28,152Zm200,0c0,11.59-11.49,23.67-32,32.24V144.86c3.43-1.33,6.71-2.74,9.79-4.28,9.54-4.77,17.06-10.47,22.21-16.66Z"/></svg>`;
}
