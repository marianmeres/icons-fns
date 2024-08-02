export const iconPhLightArticleNyTimes = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,98H232a6,6,0,0,1,0,12H128a6,6,0,0,1,0-12Zm104,32H128a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM96,142a6,6,0,0,0,0-12H86V62h36V72a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V72a6,6,0,0,0,12,0V62H74v68H64a6,6,0,0,0,0,12Z"/></svg>`;
}
