export const iconPhBoldThermometerColdBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228ZM246.14,81.52l-14.72,4.79,9.1,12.52a12,12,0,1,1-19.42,14.11L212,100.42l-9.1,12.52a12,12,0,1,1-19.42-14.11l9.1-12.52-14.72-4.79a12,12,0,1,1,7.41-22.82L200,63.48V48a12,12,0,0,1,24,0V63.48l14.73-4.78a12,12,0,1,1,7.41,22.82ZM132,188a24,24,0,1,1-36-20.78V132a12,12,0,0,1,24,0v35.22A24,24,0,0,1,132,188Z"/></svg>`;
}
