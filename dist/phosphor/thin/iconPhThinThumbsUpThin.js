export const iconPhThinThumbsUpThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M231,82.76A20,20,0,0,0,216,76H156V56a36,36,0,0,0-36-36,4,4,0,0,0-3.58,2.21L77.53,100H32a12,12,0,0,0-12,12v88a12,12,0,0,0,12,12H204a20,20,0,0,0,19.85-17.52l12-96A20,20,0,0,0,231,82.76ZM76,204H32a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H76ZM227.91,97.49l-12,96A12,12,0,0,1,204,204H84V104.94L122.42,28.1A28,28,0,0,1,148,56V80a4,4,0,0,0,4,4h64a12,12,0,0,1,11.91,13.49Z"/></svg>`;
}
