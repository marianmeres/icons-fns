export const iconPhLightArticleMedium = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M54,136a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H34V62H24a6,6,0,0,1,0-12H40v0a6,6,0,0,1,5.09,2.8L80,108.68l34.91-55.86A6,6,0,0,1,120,50v0h16a6,6,0,0,1,0,12H126v68h10a6,6,0,0,1,0,12H112a6,6,0,0,1,0-12h2V76.92L85.09,123.18a6,6,0,0,1-10.18,0L46,76.92V130h2A6,6,0,0,1,54,136Zm114-26h64a6,6,0,0,0,0-12H168a6,6,0,0,0,0,12Zm64,20H168a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Z"/></svg>`;
}
