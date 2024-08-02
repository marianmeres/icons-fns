export const iconPhLightCodeBlockLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M59.76,100.24l-32-32a6,6,0,0,1,0-8.48l32-32a6,6,0,1,1,8.48,8.48L40.49,64,68.24,91.76a6,6,0,1,1-8.48,8.48Zm40,0a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0,0-8.48l-32-32a6,6,0,1,0-8.48,8.48L127.51,64,99.76,91.76A6,6,0,0,0,99.76,100.24ZM200,42H176a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V200a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V136a6,6,0,0,0-12,0v64a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Z"/></svg>`;
}
