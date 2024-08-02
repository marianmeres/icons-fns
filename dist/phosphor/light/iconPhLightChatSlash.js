export const iconPhLightChatSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,43.56,44L49,50H40A14,14,0,0,0,26,64V224a13.86,13.86,0,0,0,8.09,12.69,13.89,13.89,0,0,0,15-2L82.23,206H190.8l12.76,14a6,6,0,1,0,8.88-8.07ZM80,194a6,6,0,0,0-3.92,1.46l-34.79,30A2,2,0,0,1,38,224V64a2,2,0,0,1,2-2H59.89l120,132ZM230,64V186a6,6,0,0,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H216A14,14,0,0,1,230,64Z"/></svg>`;
}
