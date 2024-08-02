export const iconPhLightNyTimesLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,138a10,10,0,1,1-10,10A10,10,0,0,1,172,138Zm13.46-36.56L119.24,70.53A74,74,0,0,0,54,144c0,.22,0,.44,0,.66l71.16-37.95A6,6,0,0,1,134,112V217.76a73.63,73.63,0,0,0,64.61-51.56,6,6,0,0,1,11.45,3.6A86,86,0,1,1,54.57,99.23,34,34,0,0,1,68,34a6,6,0,0,1,2.54.56L189.26,90A22,22,0,0,0,188,46a6,6,0,0,1,0-12,34,34,0,0,1,0,68A6,6,0,0,1,185.46,101.44ZM102,213.27a73.47,73.47,0,0,0,20,4.47V122l-20,10.67ZM55.27,157.59A74.22,74.22,0,0,0,90,207.47v-68.4Zm46.14-95.38L66.74,46a22,22,0,0,0-4.93,43.05c.86-1,1.75-2.06,2.67-3.07A86,86,0,0,1,101.41,62.21Z"/></svg>`;
}
