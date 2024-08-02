export const iconPhRegularNumberSeven = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M175.66,50.3l-48,160a8,8,0,0,1-15.32-4.6L157.25,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,7.66,10.3Z"/></svg>`;
}
