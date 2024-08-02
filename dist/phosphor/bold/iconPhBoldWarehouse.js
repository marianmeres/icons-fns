export const iconPhBoldWarehouse = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,180h-4V61.13l6.51-1.39a12,12,0,1,0-5-23.47l-224,48A12,12,0,0,0,16,108a12.21,12.21,0,0,0,2.53-.26l1.48-.32V180H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,102.27l168-36V180H192V120a12,12,0,0,0-12-12H76a12,12,0,0,0-12,12v60H44ZM168,144H88V132h80ZM88,168h80v12H88Z"/></svg>`;
}
