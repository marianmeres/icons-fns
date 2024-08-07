export const iconPhThinArticleMedium = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52,136a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H36V60H24a4,4,0,0,1,0-8H40a4,4,0,0,1,3.39,1.87L80,112.45l36.61-58.57A4,4,0,0,1,120,52h16a4,4,0,0,1,0,8H124v72h12a4,4,0,0,1,0,8H112a4,4,0,0,1,0-8h4V70L83.39,122.12a4,4,0,0,1-6.78,0L44,70V132h4A4,4,0,0,1,52,136Zm116-28h64a4,4,0,0,0,0-8H168a4,4,0,0,0,0,8Zm64,24H168a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Z"/></svg>`;
}
