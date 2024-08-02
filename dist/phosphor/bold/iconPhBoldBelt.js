export const iconPhBoldBelt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,156H196V100h48a12,12,0,0,0,0-24H192a20,20,0,0,0-16-8H112a20,20,0,0,0-16,8H67.3a12,12,0,0,0-22.6,0H12a12,12,0,0,0,0,24H44v56H12a12,12,0,0,0,0,24H44.7a12,12,0,0,0,22.6,0H96a20,20,0,0,0,16,8h64a20,20,0,0,0,16-8h52a12,12,0,0,0,0-24ZM68,100H92v56H68Zm48-8h56v24H144a12,12,0,0,0,0,24h28v24H116Z"/></svg>`;
}
