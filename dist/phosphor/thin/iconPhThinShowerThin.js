export const iconPhThinShowerThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M60,236a8,8,0,1,1-8-8A8,8,0,0,1,60,236Zm24-40a8,8,0,1,0,8,8A8,8,0,0,0,84,196Zm-64,0a8,8,0,1,0,8,8A8,8,0,0,0,20,196Zm32-32a8,8,0,1,0,8,8A8,8,0,0,0,52,164ZM252,40a4,4,0,0,1-4,4H217.66L187.73,73.93,165.86,202a12,12,0,0,1-8.17,9.44A12.09,12.09,0,0,1,154,212a12,12,0,0,1-8.46-3.52l-98-98A12,12,0,0,1,54,90.14l128-21.87,31.1-31.1A4,4,0,0,1,216,36h32A4,4,0,0,1,252,40ZM179.11,76.89,55.37,98a4,4,0,0,0-2.19,6.78l98,98a4,4,0,0,0,6.78-2.17Z"/></svg>`;
}
