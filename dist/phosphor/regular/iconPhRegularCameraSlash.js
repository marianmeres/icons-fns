export const iconPhRegularCameraSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H197.19l4.89,5.38a8,8,0,1,0,11.84-10.76Zm51.66,80.61,37,40.69A27.71,27.71,0,0,1,128,160a28,28,0,0,1-22.42-44.77ZM48,200a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H66.28l28.41,31.26A44,44,0,0,0,128,176a44.21,44.21,0,0,0,25.44-8.12L182.64,200ZM232,80V186a8,8,0,0,1-16,0V80a8,8,0,0,0-8-8H176a8,8,0,0,1-6.65-3.56L155.71,48H100.24a8,8,0,0,1-12.91-9.42l2-3A8,8,0,0,1,96,32h64a8,8,0,0,1,6.66,3.56L180.28,56H208A24,24,0,0,1,232,80Z"/></svg>`;
}
