export const iconPhBoldFunnelSimpleX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,148H64a12,12,0,0,1,0-24H192a12,12,0,0,1,0,24Zm40-72H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM128,172H104a12,12,0,0,0,0,24h24a12,12,0,0,0,0-24Zm96.49-4.49a12,12,0,0,0-17,0L192,183l-15.51-15.52a12,12,0,0,0-17,17L175,200l-15.52,15.51a12,12,0,0,0,17,17L192,217l15.51,15.52a12,12,0,0,0,17-17L209,200l15.52-15.51A12,12,0,0,0,224.49,167.51Z"/></svg>`;
}
