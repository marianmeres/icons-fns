export const iconPhDuotoneGenderTransgenderDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M141.25,205.25a64,64,0,1,1,0-90.5A64,64,0,0,1,141.25,205.25Z" opacity="0.2"/><path d="M216,32H168a8,8,0,0,0,0,16h28.69L168,76.69,149.66,58.35a8,8,0,1,0-11.32,11.31L156.69,88l-15.76,15.76a71.94,71.94,0,1,0,11.32,11.31L168,99.33l18.34,18.34a8,8,0,0,0,11.32-11.31L179.31,88,208,59.32V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM135.6,199.63A56,56,0,1,1,152,160,56.08,56.08,0,0,1,135.6,199.63Z"/></svg>`;
}
