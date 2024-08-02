export const iconPhBoldEqualizerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M80,108a12,12,0,0,1-12,12H28a12,12,0,0,1,0-24H68A12,12,0,0,1,80,108ZM68,136H28a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm0,40H28a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm80-40H108a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm0,40H108a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm40-96h40a12,12,0,0,0,0-24H188a12,12,0,0,0,0,24Zm40,16H188a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Z"/></svg>`;
}
