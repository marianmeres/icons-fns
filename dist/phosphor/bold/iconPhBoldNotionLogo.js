export const iconPhBoldNotionLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H176a12,12,0,0,0,0,24h8V161.28L118.51,42.22A12,12,0,0,0,108,36H40a12,12,0,0,0,0,24h8V196H40a12,12,0,0,0,0,24H80a12,12,0,0,0,0-24H72V94.72l65.49,119.06A12,12,0,0,0,148,220h48a12,12,0,0,0,12-12V60h8a12,12,0,0,0,0-24ZM80.3,60h20.6l74.8,136H155.1Z"/></svg>`;
}
