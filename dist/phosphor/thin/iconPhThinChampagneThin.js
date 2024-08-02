export const iconPhThinChampagneThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M142.3,12H97.7a4,4,0,0,0-3.8,2.76c-1.45,4.47-35.2,109.75-6.13,149.78C94.5,173.79,104,178.92,116,179.83V236H96a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8H124V179.83c12-.91,21.5-6,28.22-15.29,29.08-40-4.67-145.31-6.12-149.78A4,4,0,0,0,142.3,12Zm-41.65,8h38.7A455.34,455.34,0,0,1,151,68H89A462,462,0,0,1,100.65,20Zm45.1,139.83C139.8,168,131.38,172,120,172s-19.8-4-25.75-12.16C81,141.63,82.6,106.72,87.6,76h64.81C158.86,116,156.57,144.94,145.75,159.83ZM228,52a8,8,0,1,1-8-8A8,8,0,0,1,228,52ZM204,20a8,8,0,1,1-8-8A8,8,0,0,1,204,20Zm0,80a8,8,0,1,1-8-8A8,8,0,0,1,204,100Z"/></svg>`;
}
