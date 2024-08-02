export const iconPhBoldUserList = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152,80a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H164A12,12,0,0,1,152,80Zm92,36H164a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Zm0,48H188a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm-88.38,25a12,12,0,1,1-23.24,6c-5.72-22.23-28.24-39-52.38-39s-46.66,16.76-52.38,39a12,12,0,1,1-23.24-6c5.38-20.9,20.09-38.16,39.11-48a52,52,0,1,1,73,0C135.53,150.85,150.24,168.11,155.62,189ZM80,132a28,28,0,1,0-28-28A28,28,0,0,0,80,132Z"/></svg>`;
}
