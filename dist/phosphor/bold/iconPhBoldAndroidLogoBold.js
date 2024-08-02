export const iconPhBoldAndroidLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,148a16,16,0,1,1-16-16A16,16,0,0,1,180,148ZM92,132a16,16,0,1,0,16,16A16,16,0,0,0,92,132Zm152,28v24a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V161.13A117.35,117.35,0,0,1,45.72,78.69L23.51,56.49a12,12,0,0,1,17-17L64.3,63.33A114.35,114.35,0,0,1,127.59,44H128a115.15,115.15,0,0,1,63.89,19.14l23.62-23.63a12,12,0,0,1,17,17l-22,22A115.18,115.18,0,0,1,244,160Zm-24,0a92,92,0,0,0-92.33-92C77.12,68.18,36,110,36,161.13V180H220Z"/></svg>`;
}
