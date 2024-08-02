export const iconPhThinCameraPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,136a4,4,0,0,1-4,4H132v28a4,4,0,0,1-8,0V140H96a4,4,0,0,1,0-8h28V104a4,4,0,0,1,8,0v28h28A4,4,0,0,1,164,136Zm64-56V192a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V80A20,20,0,0,1,48,60H77.86L90.3,41.34a12,12,0,0,1,10-5.34h55.44a12,12,0,0,1,10,5.34L178.14,60H208A20,20,0,0,1,228,80Zm-8,0a12,12,0,0,0-12-12H176a4,4,0,0,1-3.33-1.78L159.05,45.78A4,4,0,0,0,155.72,44H100.28A4,4,0,0,0,97,45.78L83.33,66.22A4,4,0,0,1,80,68H48A12,12,0,0,0,36,80V192a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12Z"/></svg>`;
}
