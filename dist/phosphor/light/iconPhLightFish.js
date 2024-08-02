export const iconPhLightFish = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M166,76a10,10,0,1,1-10-10A10,10,0,0,1,166,76Zm49,66.67c-19.17,34.54-55.11,53.08-106.85,55.14L85.62,250.36A6,6,0,0,1,80.1,254h-.38a6,6,0,0,1-5.39-4.34L59.22,196.77,6.35,181.63a6,6,0,0,1-.71-11.29L58.2,147.85C60.28,96.13,78.81,60.2,113.33,41,159.56,15.34,219,30,222.09,31.78a6,6,0,0,1,2.12,2.11C226,36.94,240.67,96.38,215,142.65Zm-48,29.64A50.06,50.06,0,0,1,130,126,50.09,50.09,0,0,1,83.71,89c-8.46,16.93-13,38-13.63,63a6,6,0,0,1-3.64,5.38L25.88,174.74l39.85,11.41a6,6,0,0,1,4.12,4.12l11.38,39.85,17.39-40.56a6,6,0,0,1,5.37-3.64C129,185.33,150.05,180.76,167,172.29Zm51-94.53a171.1,171.1,0,0,0-3.86-35.92A170.78,170.78,0,0,0,178.25,38H178c-18.52,0-45,3.22-66.67,18.47A83.53,83.53,0,0,0,94.17,72.56a38,38,0,0,0,41.47,41.25,6,6,0,0,1,6.54,6.55,38,38,0,0,0,41.28,41.46,83.13,83.13,0,0,0,16.07-17.07C214.87,123,218.05,96.31,218,77.76Z"/></svg>`;
}