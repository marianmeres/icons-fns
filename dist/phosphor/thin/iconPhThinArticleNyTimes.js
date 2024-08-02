export const iconPhThinArticleNyTimes = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,100H232a4,4,0,0,1,0,8H128a4,4,0,0,1,0-8Zm104,32H128a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM96,140a4,4,0,0,0,0-8H84V60h40V72a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4V72a4,4,0,0,0,8,0V60H76v72H64a4,4,0,0,0,0,8Z"/></svg>`;
}
