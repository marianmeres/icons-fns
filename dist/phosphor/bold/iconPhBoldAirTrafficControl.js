export const iconPhBoldAirTrafficControl = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232.38,68.52A20,20,0,0,0,216,60H140V36h12a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24h12V60H40A20,20,0,0,0,21.2,86.83l26.19,72A20.06,20.06,0,0,0,66.18,172H92v60a12,12,0,0,0,24,0V172h24v60a12,12,0,0,0,24,0V172h25.82a20.06,20.06,0,0,0,18.79-13.17l26.19-72A20,20,0,0,0,232.38,68.52ZM114,148,102.38,84h51.24L142,148ZM45.71,84H78l11.64,64H69ZM187,148H166.38L178,84h32.27Z"/></svg>`;
}
