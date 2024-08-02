export const iconPhThinFunnelX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227,51.15A11.86,11.86,0,0,0,216,44H40a12,12,0,0,0-8.88,20.07l.05.05L100,137.59V216a12,12,0,0,0,18.65,10l32-21.33a12,12,0,0,0,5.34-10V137.59l68.86-73.52A11.83,11.83,0,0,0,227,51.15Zm-8,7.5-69.91,74.62A4,4,0,0,0,148,136v58.65a4,4,0,0,1-1.78,3.33l-32,21.33A4,4,0,0,1,108,216V136a4,4,0,0,0-1.09-2.74L37.05,58.67A4,4,0,0,1,40,52H216a4,4,0,0,1,3,6.65Zm23.84,154.53a4,4,0,0,1-5.66,5.66L216,197.67l-21.17,21.17a4,4,0,0,1-5.66-5.66L210.34,192l-21.17-21.17a4,4,0,1,1,5.66-5.66L216,186.35l21.17-21.17a4,4,0,1,1,5.66,5.66L221.66,192Z"/></svg>`;
}
