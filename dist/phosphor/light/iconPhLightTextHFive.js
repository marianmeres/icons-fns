export const iconPhLightTextHFive = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,180a34,34,0,0,1-34,34,33.6,33.6,0,0,1-24.29-9.8,6,6,0,0,1,8.58-8.4A21.65,21.65,0,0,0,212,202a22,22,0,0,0,0-44,21.65,21.65,0,0,0-15.71,6.2A6,6,0,0,1,186.08,159l8-48a6,6,0,0,1,5.92-5h40a6,6,0,0,1,0,12H205.08l-5,30A36,36,0,0,1,212,146,34,34,0,0,1,246,180ZM144,50a6,6,0,0,0-6,6v54H46V56a6,6,0,0,0-12,0V176a6,6,0,0,0,12,0V122h92v54a6,6,0,0,0,12,0V56A6,6,0,0,0,144,50Z"/></svg>`;
}
