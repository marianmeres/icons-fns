export const iconPhLightCellSignalX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212.24,195.76a6,6,0,1,1-8.48,8.48L184,184.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L175.52,176l-19.76-19.76a6,6,0,0,1,8.48-8.48L184,167.52l19.76-19.76a6,6,0,0,1,8.48,8.48L192.48,176ZM160,118a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v40A6,6,0,0,0,160,118Zm40,0a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0v80A6,6,0,0,0,200,118Zm-80-12a6,6,0,0,0-6,6v88a6,6,0,0,0,12,0V112A6,6,0,0,0,120,106ZM80,146a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V152A6,6,0,0,0,80,146ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Z"/></svg>`;
}
