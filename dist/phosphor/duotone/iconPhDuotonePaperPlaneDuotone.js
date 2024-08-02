export const iconPhDuotonePaperPlaneDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.28,215.51,128,184,34.72,215.51a8,8,0,0,1-9.67-11.44l95.85-168a8,8,0,0,1,14,0l96.09,168A8,8,0,0,1,221.28,215.51Z" opacity="0.2"/><path d="M237.9,200.1,141.85,32.18a16,16,0,0,0-27.89,0l-95.89,168a16,16,0,0,0,19.26,22.92L128,192.45l90.67,30.63A16.22,16.22,0,0,0,224,224a16,16,0,0,0,13.86-23.9Zm-14.05,7.84L136,178.26V120a8,8,0,0,0-16,0v58.26L32.16,207.94,32,208,127.86,40,224,208Z"/></svg>`;
}
