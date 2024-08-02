export const iconPhBoldArticleMedium = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56,132a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24h4V68H24a12,12,0,0,1,0-24H40a12,12,0,0,1,10,5.33l30,45,30-45A12,12,0,0,1,120,44h16a12,12,0,0,1,0,24h-4v52h4a12,12,0,0,1,0,24H116a12,12,0,0,1-8-20.93V95.63l-18,27a12,12,0,0,1-20,0l-18-27v27.44A12,12,0,0,1,56,132Zm120-28h56a12,12,0,0,0,0-24H176a12,12,0,0,0,0,24Zm56,16H176a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Z"/></svg>`;
}
