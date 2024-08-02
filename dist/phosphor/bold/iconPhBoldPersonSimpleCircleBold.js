export const iconPhBoldPersonSimpleCircleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM108,80a20,20,0,1,1,20,20A20,20,0,0,1,108,80Zm76,40a12,12,0,0,1-12,12H140v.51l26.12,41.05a12,12,0,0,1-3.68,16.56A11.83,11.83,0,0,1,156,192a12,12,0,0,1-10.13-5.56L128,158.35l-17.88,28.09a12,12,0,0,1-20.24-12.88L116,132.51V132H84a12,12,0,0,1,0-24h88A12,12,0,0,1,184,120Z"/></svg>`;
}
