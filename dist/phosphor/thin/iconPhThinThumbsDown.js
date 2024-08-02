export const iconPhThinThumbsDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.85,157.52l-12-96A20,20,0,0,0,204,44H32A12,12,0,0,0,20,56v88a12,12,0,0,0,12,12H77.53l38.89,77.79A4,4,0,0,0,120,236a36,36,0,0,0,36-36V180h60a20,20,0,0,0,19.85-22.48ZM76,148H32a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H76Zm149,19.94a12,12,0,0,1-9,4.06H152a4,4,0,0,0-4,4v24a28,28,0,0,1-25.58,27.9L84,151.06V52H204a12,12,0,0,1,11.91,10.51l12,96A12,12,0,0,1,225,167.94Z"/></svg>`;
}
