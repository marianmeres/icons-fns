export const iconPhBoldShower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M68,236a16,16,0,1,1-16-16A16,16,0,0,1,68,236Zm16-48a16,16,0,1,0,16,16A16,16,0,0,0,84,188Zm-64,0a16,16,0,1,0,16,16A16,16,0,0,0,20,188Zm32,0a16,16,0,1,0-16-16A16,16,0,0,0,52,188ZM256,40a12,12,0,0,1-12,12H221L195.19,77.79,173.74,203.33a20,20,0,0,1-33.86,10.8l-98-98A20,20,0,0,1,52.72,82.25l125.5-21.44,29.29-29.3A12,12,0,0,1,216,28h28A12,12,0,0,1,256,40ZM169.32,86.68l-105,17.94,87.07,87.07Z"/></svg>`;
}
