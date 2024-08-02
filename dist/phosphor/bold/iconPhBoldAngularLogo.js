export const iconPhBoldAngularLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.61,60.92l-96-40a12,12,0,0,0-9.24,0l-96,40a12,12,0,0,0-7.28,12.67l16,120a12,12,0,0,0,6.52,9.14l80,40a12,12,0,0,0,10.74,0l80-40a12,12,0,0,0,6.52-9.14l16-120A12,12,0,0,0,228.61,60.92ZM197,184.11,128,218.58,59.05,184.11,45.11,79.54,128,45l82.89,34.54ZM117.51,82.17l-40,72a12,12,0,1,0,21,11.66L106.17,152h43.66l7.68,13.83a12,12,0,1,0,21-11.66l-40-72a12,12,0,0,0-21,0Zm2,45.83L128,112.71,136.49,128Z"/></svg>`;
}
