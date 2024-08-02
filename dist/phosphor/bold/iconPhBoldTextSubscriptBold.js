export const iconPhBoldTextSubscriptBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,208a12,12,0,0,1-12,12H192a12,12,0,0,1-9.6-19.2l43.17-57.56a12,12,0,0,0-2.35-16.82A12,12,0,0,0,204.68,132a12,12,0,0,1-22.63-8,36.3,36.3,0,0,1,5.2-9.67,36,36,0,0,1,57.5,43.34L216,196h24A12,12,0,0,1,252,208ZM151.86,46.93a12,12,0,0,0-16.93,1.21L92,97.68,49.07,48.14A12,12,0,0,0,30.93,63.86L76.12,116,30.93,168.14a12,12,0,0,0,18.14,15.72L92,134.32l42.93,49.54a12,12,0,1,0,18.14-15.72L107.88,116l45.19-52.14A12,12,0,0,0,151.86,46.93Z"/></svg>`;
}
