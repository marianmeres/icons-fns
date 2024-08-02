export const iconPhBoldSpeakerSimpleSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,88v80a12,12,0,0,1-24,0V88a12,12,0,0,1,24,0ZM224.88,207.93a12,12,0,1,1-17.76,16.14L172,185.44V224a12,12,0,0,1-19.37,9.47L83.88,180H40a20,20,0,0,1-20-20V96A20,20,0,0,1,40,76H72.51L47.12,48.07A12,12,0,0,1,64.88,31.93ZM148,159,94.33,100H44v56H88a12,12,0,0,1,7.37,2.53L148,199.46Zm-14.15-91.5,14.15-11v38.4a12,12,0,0,0,24,0V32a12,12,0,0,0-19.37-9.47L119.12,48.6a12,12,0,1,0,14.73,18.94ZM200,150.94a12,12,0,0,0,12-12V104a12,12,0,0,0-24,0v34.94A12,12,0,0,0,200,150.94Z"/></svg>`;
}
