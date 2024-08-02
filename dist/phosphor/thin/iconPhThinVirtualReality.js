export const iconPhThinVirtualReality = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M119.75,97.4l-24,64a4,4,0,0,1-7.5,0l-24-64a4,4,0,1,1,7.5-2.8l20.25,54,20.25-54a4,4,0,0,1,7.5,2.8ZM252,128a76.08,76.08,0,0,1-76,76H80A76,76,0,0,1,80,52h96A76.08,76.08,0,0,1,252,128Zm-8,0a68.07,68.07,0,0,0-68-68H80a68,68,0,0,0,0,136h96A68.07,68.07,0,0,0,244,128Zm-68.5,9.06,12,21a4,4,0,0,1-1.49,5.45,3.92,3.92,0,0,1-2,.53,4,4,0,0,1-3.47-2L167.79,139.7a24.85,24.85,0,0,1-3.79.3H148v20a4,4,0,0,1-8,0V96a4,4,0,0,1,4-4h20a24,24,0,0,1,11.5,45.06ZM180,116a16,16,0,0,0-16-16H148v32h16A16,16,0,0,0,180,116Z"/></svg>`;
}
