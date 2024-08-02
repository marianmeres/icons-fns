export const iconPhThinShoppingCart = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.07,61.44A4,4,0,0,0,224,60H59.34L52.66,23.28A4,4,0,0,0,48.73,20H24a4,4,0,0,0,0,8H45.39l6.69,36.8h0L71.49,171.58A20,20,0,0,0,79,183.85,24,24,0,1,0,109.87,188h60.26A24,24,0,1,0,188,180H91.17a12,12,0,0,1-11.8-9.85l-4-22.15H196.1a20,20,0,0,0,19.68-16.42l12.16-66.86A4,4,0,0,0,227.07,61.44ZM108,204a16,16,0,1,1-16-16A16,16,0,0,1,108,204Zm96,0a16,16,0,1,1-16-16A16,16,0,0,1,204,204Zm3.91-73.85A12,12,0,0,1,196.1,140H73.88L60.79,68H219.21Z"/></svg>`;
}
