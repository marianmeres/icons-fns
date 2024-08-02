export const iconPhThinFolderSimpleLock = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,88v16a4,4,0,0,1-8,0V88a4,4,0,0,0-4-4H130.67a12.05,12.05,0,0,1-7.2-2.4L95.73,60.8a4,4,0,0,0-2.4-.8H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4h72a4,4,0,0,1,0,8H40a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H93.33a12.05,12.05,0,0,1,7.2,2.4l27.74,20.8a4,4,0,0,0,2.4.8H216A12,12,0,0,1,228,88Zm0,80v40a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4h12v-8a24,24,0,0,1,48,0v8h12A4,4,0,0,1,228,168Zm-56-4h32v-8a16,16,0,0,0-32,0Zm48,8H156v32h64Z"/></svg>`;
}
