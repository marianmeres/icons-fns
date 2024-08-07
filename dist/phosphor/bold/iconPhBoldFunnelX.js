export const iconPhBoldFunnelX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.78,69.45A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.09,16.65l32-21.34a20,20,0,0,0,8.9-16.64V140.75l66.67-71.16ZM143.23,127.8A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.24-8.2L49.23,60H206.75Zm105.26,79.72a12,12,0,1,1-17,17L216,209l-15.52,15.51a12,12,0,0,1-17-17L199,192l-15.52-15.52a12,12,0,0,1,17-17L216,175l15.51-15.52a12,12,0,1,1,17,17L233,192Z"/></svg>`;
}
