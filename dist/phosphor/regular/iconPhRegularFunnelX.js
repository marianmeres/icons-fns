export const iconPhRegularFunnelX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.82,66.76A16,16,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.73-72.32ZM40,56h0Zm106.19,74.59A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.46L40,56H216Zm99.49,79.81a8,8,0,0,1-11.32,11.32L216,203.32l-18.34,18.35a8,8,0,0,1-11.31-11.32L204.69,192l-18.34-18.35a8,8,0,0,1,11.31-11.31L216,180.69l18.34-18.34a8,8,0,0,1,11.32,11.31L227.31,192Z"/></svg>`;
}
