export const iconPhBoldMetronome = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.05,201.94l-27.4-86.12,25.23-27.75a12,12,0,0,0-17.76-16.14L183.24,89.39l-15.1-47.45A19.93,19.93,0,0,0,149.08,28H106.91A19.93,19.93,0,0,0,87.85,41.94l-50.91,160A20,20,0,0,0,56,228H200a20,20,0,0,0,19.06-26.06ZM179.25,156H155.12L173,136.34ZM109.83,52h36.33l18.42,57.91L122.69,156H76.74ZM61.47,204l7.63-24H186.89l7.63,24Z"/></svg>`;
}
