export const iconPhBoldBrandyBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,88h0a99.63,99.63,0,0,0-16.18-54.55,12,12,0,0,0-10-5.45H54.23a12,12,0,0,0-10,5.45A99.63,99.63,0,0,0,28,88h0a100.15,100.15,0,0,0,88,99.28V212H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V187.28A100.15,100.15,0,0,0,228,88ZM61.05,52H195a75.43,75.43,0,0,1,8.1,24H53A75.43,75.43,0,0,1,61.05,52Zm67,112a76.12,76.12,0,0,1-75-64H203A76.12,76.12,0,0,1,128,164Z"/></svg>`;
}
