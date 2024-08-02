export const iconPhLightStudent = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.9,58.31l-96-32a6,6,0,0,0-3.8,0l-96,32A6,6,0,0,0,26,64v80a6,6,0,0,0,12,0V72.32l38.68,12.9A62,62,0,0,0,99,174.75c-19.25,6.53-36,19.59-48,38A6,6,0,0,0,61,219.28C76.47,195.59,100.88,182,128,182s51.53,13.59,67,37.28A6,6,0,0,0,205,212.72c-12-18.38-28.73-31.44-48-38a62,62,0,0,0,22.27-89.53L225.9,69.69a6,6,0,0,0,0-11.38ZM178,120A50,50,0,1,1,88.63,89.2l37.47,12.49a6,6,0,0,0,3.8,0L167.37,89.2A49.78,49.78,0,0,1,178,120ZM128,89.68,51,64l77-25.68L205,64Z"/></svg>`;
}
