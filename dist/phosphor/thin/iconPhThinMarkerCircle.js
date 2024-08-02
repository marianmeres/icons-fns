export const iconPhThinMarkerCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29ZM84,208.83V176a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4v32.83a92.25,92.25,0,0,1-88,0ZM108.15,140H152a4,4,0,0,1,4,4v20H100V144a4,4,0,0,1,4-4Zm4.93-8,11-52.82a4,4,0,0,1,7.84,0l11,52.82Zm80,61.05A92.41,92.41,0,0,1,180,203.9V176a12,12,0,0,0-12-12h-4V144a12,12,0,0,0-12-12h-.91L139.75,77.55a12,12,0,0,0-23.5,0L104.91,132H104a12,12,0,0,0-12,12v20H88a12,12,0,0,0-12,12v27.9a92.41,92.41,0,0,1-13-10.85,92,92,0,1,1,130.1,0Z"/></svg>`;
}
