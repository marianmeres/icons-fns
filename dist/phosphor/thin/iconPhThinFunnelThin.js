export const iconPhThinFunnelThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227,51.15A11.85,11.85,0,0,0,216,44H40a12,12,0,0,0-8.88,20.07l.05.05L100,137.59V216a12,12,0,0,0,18.66,10l32-21.33a12,12,0,0,0,5.35-10V137.59l68.86-73.52A11.85,11.85,0,0,0,227,51.15Zm-8,7.5-69.9,74.62A4,4,0,0,0,148,136v58.65a4,4,0,0,1-1.78,3.33l-32,21.33A4,4,0,0,1,108,216V136a4,4,0,0,0-1.08-2.74L37.05,58.67A4,4,0,0,1,40,52H216a4,4,0,0,1,3,6.65Z"/></svg>`;
}
