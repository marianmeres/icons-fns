export const iconPhBoldWifiLow = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204Zm31.06-48.7a80,80,0,0,0-94.12,0,12,12,0,1,0,14.13,19.4,56,56,0,0,1,65.86,0,12,12,0,1,0,14.13-19.4Z"/></svg>`;
}
