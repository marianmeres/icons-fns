export const iconPhBoldBasketBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,128v40a12,12,0,0,1-24,0V128a12,12,0,0,1,24,0Zm28.06-1.19-4,40a12,12,0,0,0,10.75,13.13c.4,0,.81.06,1.2.06a12,12,0,0,0,11.93-10.81l4-40a12,12,0,0,0-23.88-2.38Zm-80.12,0a12,12,0,0,0-23.88,2.38l4,40A12,12,0,0,0,80,180c.39,0,.8,0,1.2-.06a12,12,0,0,0,10.75-13.13Zm156-37.22-15.07,113A20.06,20.06,0,0,1,209,220H47a20.06,20.06,0,0,1-19.82-17.36l-15.07-113A12,12,0,0,1,24,76H66.55L119,16.1a12,12,0,0,1,18.06,0L189.45,76H232a12,12,0,0,1,11.89,13.59ZM98.45,76h59.1L128,42.22Zm119.84,24H37.71l12.8,96h155Z"/></svg>`;
}
