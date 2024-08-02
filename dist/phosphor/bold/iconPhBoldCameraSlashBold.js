export const iconPhBoldCameraSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07l4,4.37A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H195.42l3.7,4.07a12,12,0,0,0,17.76-16.14Zm49.35,90L136,154.64a24,24,0,0,1-29.77-32.75ZM48,196a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H64.51l24.92,27.41a48,48,0,0,0,63.34,69.67L173.6,196ZM236,80v94.14a12,12,0,0,1-24,0V80a4,4,0,0,0-4-4H176a12,12,0,0,1-10-5.34L153.57,52H102.06a12,12,0,0,1,0-24H160a12,12,0,0,1,10,5.34L182.42,52H208A28,28,0,0,1,236,80Z"/></svg>`;
}
