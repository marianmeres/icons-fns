export const iconPhThinPercent = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M202.83,58.81l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.65ZM53.37,98.62A32,32,0,1,1,76,108,31.82,31.82,0,0,1,53.37,98.62ZM52,76a24,24,0,1,0,7-17A23.85,23.85,0,0,0,52,76ZM212,180a32,32,0,1,1-9.37-22.63A31.82,31.82,0,0,1,212,180Zm-8,0a24,24,0,1,0-7,17A23.89,23.89,0,0,0,204,180Z"/></svg>`;
}
