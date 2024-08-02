export const iconPhThinWaveformSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52,96v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0ZM51,37.31A4,4,0,0,0,45,42.69L84,85.55V224a4,4,0,0,0,8,0V94.35l32,35.2V192a4,4,0,0,0,8,0V138.35l73,80.34a4,4,0,1,0,5.92-5.38Zm37,3.12a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0v4.43A4,4,0,0,0,88,40.43Zm40,44a4,4,0,0,0,4-4V64a4,4,0,0,0-8,0V80.43A4,4,0,0,0,128,84.43Zm40,44a4,4,0,0,0,4-4V96a4,4,0,0,0-8,0v28.43A4,4,0,0,0,168,128.43ZM208,76a4,4,0,0,0-4,4v88.43a4,4,0,0,0,8,0V80A4,4,0,0,0,208,76Z"/></svg>`;
}
