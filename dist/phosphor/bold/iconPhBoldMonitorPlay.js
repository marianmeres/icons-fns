export const iconPhBoldMonitorPlay = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,120a12,12,0,0,1-5.12,9.83l-40,28A12,12,0,0,1,104,148V92a12,12,0,0,1,18.88-9.83l40,28A12,12,0,0,1,168,120Zm68-56V176a28,28,0,0,1-28,28H48a28,28,0,0,1-28-28V64A28,28,0,0,1,48,36H208A28,28,0,0,1,236,64Zm-24,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V176a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4ZM160,216H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Z"/></svg>`;
}
