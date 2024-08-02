export const iconPhThinChatSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51,37.31A4,4,0,0,0,45,42.69L53.5,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.09,12.09,0,0,0,40,236a12,12,0,0,0,7.74-2.87L81.49,204H191.68L205,218.69a4,4,0,0,0,3,1.31,4,4,0,0,0,3-6.69ZM80,196a4,4,0,0,0-2.61,1L42.57,227A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H60.78L184.41,196ZM228,64V186a4,4,0,0,1-8,0V64a4,4,0,0,0-4-4H105.79a4,4,0,0,1,0-8H216A12,12,0,0,1,228,64Z"/></svg>`;
}
