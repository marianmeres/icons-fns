export const iconPhBoldPersonSimpleSki = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,92a32,32,0,1,0-32-32A32,32,0,0,0,176,92Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,176,52ZM28.48,80.64a12,12,0,0,1,14.88-8.16l67.5,19.68,8.66-8.65a12,12,0,0,1,17,0L165,112h35a12,12,0,0,1,0,24H160a12,12,0,0,1-8.48-3.51l-4.89-4.89-110-32.07A12,12,0,0,1,28.48,80.64ZM238.65,211.57A73.77,73.77,0,0,1,177,221L20.65,175.51a12,12,0,1,1,6.71-23l79.92,23.27,13.81-13.81L84.7,151.53a12,12,0,1,1,6.6-23.07l56,16a12,12,0,0,1,5.19,20L133.56,183.4,183.66,198a49.81,49.81,0,0,0,41.68-6.39,12,12,0,0,1,13.31,20Z"/></svg>`;
}
