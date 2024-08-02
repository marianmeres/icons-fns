export const iconPhBoldCameraPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,136a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V148H96a12,12,0,0,1,0-24h20V104a12,12,0,0,1,24,0v20h20A12,12,0,0,1,172,136Zm64-56V192a28,28,0,0,1-28,28H48a28,28,0,0,1-28-28V80A28,28,0,0,1,48,52H73.58L83.64,36.91A20,20,0,0,1,100.28,28h55.44a20,20,0,0,1,16.64,8.91L182.42,52H208A28,28,0,0,1,236,80Zm-24,0a4,4,0,0,0-4-4H176a12,12,0,0,1-10-5.34L153.58,52H102.42L90,70.66A12,12,0,0,1,80,76H48a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z"/></svg>`;
}
