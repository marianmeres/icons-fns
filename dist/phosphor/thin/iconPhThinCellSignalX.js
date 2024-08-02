export const iconPhThinCellSignalX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.83,197.17a4,4,0,0,1-5.66,5.66L184,181.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L178.34,176l-21.17-21.17a4,4,0,0,1,5.66-5.66L184,170.34l21.17-21.17a4,4,0,0,1,5.66,5.66L189.66,176ZM160,116a4,4,0,0,0,4-4V72a4,4,0,0,0-8,0v40A4,4,0,0,0,160,116Zm40,0a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0v80A4,4,0,0,0,200,116Zm-80-8a4,4,0,0,0-4,4v88a4,4,0,0,0,8,0V112A4,4,0,0,0,120,108ZM80,148a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V152A4,4,0,0,0,80,148ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Z"/></svg>`;
}
