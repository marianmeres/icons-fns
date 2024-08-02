export const iconPhBoldBeerBottle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248.49,39.51l-32-32a12,12,0,0,0-18.55,15L147,60.77l-37.33,7.46a12.09,12.09,0,0,0-6.14,3.28L20.2,154.83a28,28,0,0,0,0,39.6L61.57,235.8a28,28,0,0,0,39.6,0l83.32-83.31a12.09,12.09,0,0,0,3.28-6.14L195.23,109l38.23-51a12,12,0,0,0,15-18.55ZM112,191,65,144l31-31,47,47ZM81.37,220a4,4,0,0,1-2.83-1.17L37.17,177.46a4,4,0,0,1,0-5.66L48,161l47,47L84.2,218.83A4,4,0,0,1,81.37,220Zm93-123.2a12,12,0,0,0-2.17,4.85L165,138.08,160,143,113,96l5-5,36.43-7.28a12,12,0,0,0,4.85-2.17l55.67-41.76,1.29,1.29Z"/></svg>`;
}
