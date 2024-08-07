export const iconPhBoldCloudSnow = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,208a16,16,0,1,1-16-16A16,16,0,0,1,184,208Zm-64-16a16,16,0,1,0,16,16A16,16,0,0,0,120,192Zm-48,0a16,16,0,1,0,16,16A16,16,0,0,0,72,192ZM236,92a80.09,80.09,0,0,1-80,80H76A56,56,0,0,1,76,60a56.76,56.76,0,0,1,6.39.36A80.08,80.08,0,0,1,236,92Zm-24,0a56.06,56.06,0,0,0-112-3.31,12,12,0,1,1-24-1.38c.06-1.11.15-2.21.26-3.31H76a32,32,0,0,0,0,64h80A56.06,56.06,0,0,0,212,92Z"/></svg>`;
}
