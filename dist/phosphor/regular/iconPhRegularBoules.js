export const iconPhRegularBoules = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56.28,36.41L60.4,184.28A88.33,88.33,0,0,1,50.21,169.1L169.1,50.21A87.8,87.8,0,0,1,184.28,60.41Zm11.31,11.31a87.8,87.8,0,0,1,10.2,15.18L86.9,205.79a87.8,87.8,0,0,1-15.18-10.2ZM128,40a87.81,87.81,0,0,1,25.05,3.64L43.64,153.05A88,88,0,0,1,128,40Zm0,176a87.81,87.81,0,0,1-25-3.64L212.36,103A88,88,0,0,1,128,216Z"/></svg>`;
}
