export const iconPhBoldTextHFiveBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,180a40,40,0,0,1-40,40,39.53,39.53,0,0,1-28.57-11.6,12,12,0,1,1,17.14-16.8A15.54,15.54,0,0,0,212,196a16,16,0,0,0,0-32,15.54,15.54,0,0,0-11.43,4.4A12,12,0,0,1,180.16,158l8-48A12,12,0,0,1,200,100h40a12,12,0,0,1,0,24H210.17l-2.71,16.23A45.39,45.39,0,0,1,212,140,40,40,0,0,1,252,180ZM144,44a12,12,0,0,0-12,12v48H52V56a12,12,0,0,0-24,0V176a12,12,0,0,0,24,0V128h80v48a12,12,0,0,0,24,0V56A12,12,0,0,0,144,44Z"/></svg>`;
}
