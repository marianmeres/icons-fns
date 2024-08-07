export const iconPhThinCloudLightning = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,20A72.19,72.19,0,0,0,87.51,69.39,48,48,0,1,0,76,164h44.94l-20.37,33.94A4,4,0,0,0,104,204h32.94l-20.37,33.94a4,4,0,0,0,6.86,4.12l24-40A4,4,0,0,0,144,196H111.06l19.2-32H156a72,72,0,0,0,0-144Zm0,136H76a40,40,0,1,1,9.43-78.88A71.63,71.63,0,0,0,84,87.77a4,4,0,0,0,8,.46A64.06,64.06,0,1,1,156,156Z"/></svg>`;
}
