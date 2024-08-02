export const iconPhBoldAngle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,200a12,12,0,0,1-12,12H72a12,12,0,0,1-12-12V84H32a12,12,0,0,1,0-24H60V32a12,12,0,0,1,24,0V188H240A12,12,0,0,1,252,200ZM111,84.29a84,84,0,0,1,76.7,76.7,12,12,0,0,0,11.95,11c.33,0,.66,0,1,0a12,12,0,0,0,11-13A108,108,0,0,0,113,60.37a12,12,0,1,0-2,23.92Z"/></svg>`;
}
