export const iconPhBoldBoneBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.74,58.31a39.89,39.89,0,0,0-23.35-13.7,40,40,0,1,0-74.86,25.87l-66,66.05a40,40,0,1,0-25.87,74.86,40,40,0,1,0,74.86-25.86l66.05-66.06a40,40,0,0,0,49.22-61.16ZM216.1,94.51a16,16,0,0,1-20.54,3,20,20,0,0,0-24.84,2.76l-70.4,70.4a20,20,0,0,0-2.75,24.84,16,16,0,1,1-29.41,6A12,12,0,0,0,56.3,187.7a11.61,11.61,0,0,0-1.85.14,16,16,0,1,1,6-29.4,20,20,0,0,0,24.83-2.76l70.4-70.4a20,20,0,0,0,2.76-24.84,16,16,0,1,1,29.4-6,12,12,0,0,0,13.71,13.71A16,16,0,0,1,216.1,94.51Z"/></svg>`;
}
