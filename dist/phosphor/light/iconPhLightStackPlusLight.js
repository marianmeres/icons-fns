export const iconPhLightStackPlusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238,200a6,6,0,0,1-6,6H214v18a6,6,0,0,1-12,0V206H184a6,6,0,0,1,0-12h18V176a6,6,0,0,1,12,0v18h18A6,6,0,0,1,238,200Zm-17-77.18-93,54.23L35,122.82a6,6,0,0,0-6,10.36l96,56a6,6,0,0,0,6,0l96-56a6,6,0,0,0-6-10.36ZM26,80a6,6,0,0,1,3-5.18l96-56a6,6,0,0,1,6,0l96,56a6,6,0,0,1,0,10.36l-96,56a6,6,0,0,1-6,0l-96-56A6,6,0,0,1,26,80Zm17.91,0L128,129.05,212.09,80,128,31ZM141,217.48l-13,7.57L35,170.82a6,6,0,0,0-6,10.36l96,56a6,6,0,0,0,6,0l16-9.33a6,6,0,0,0-6-10.37Z"/></svg>`;
}
