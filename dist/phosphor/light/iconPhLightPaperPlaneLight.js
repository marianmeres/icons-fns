export const iconPhLightPaperPlaneLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236.17,201.09,140.1,33.16a14,14,0,0,0-24.41,0l-95.88,168a14,14,0,0,0,16.87,20.05L128,190.34l91.33,30.85A14.31,14.31,0,0,0,224,222a14,14,0,0,0,12.13-20.91Zm-10.66,8.18a1.87,1.87,0,0,1-2.2.6l-.1,0L134,179.7V120a6,6,0,0,0-12,0v59.7L32.8,209.83l-.1,0a1.87,1.87,0,0,1-2.2-.6,1.84,1.84,0,0,1-.24-2.22L126.14,39a1.93,1.93,0,0,1,1.74-1,2,2,0,0,1,1.78,1.07L225.73,207A1.86,1.86,0,0,1,225.51,209.27Z"/></svg>`;
}
