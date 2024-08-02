export const iconPhLightFingerprintSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M182,128a244.65,244.65,0,0,1-18.38,93.48,6,6,0,0,1-5.55,3.72,6.13,6.13,0,0,1-2.28-.45,6,6,0,0,1-3.27-7.84A232.64,232.64,0,0,0,170,128a6,6,0,0,1,12,0ZM128,86a42.08,42.08,0,0,1,31.31,14,6,6,0,1,0,8.94-8A54,54,0,0,0,74,128a138.08,138.08,0,0,1-17.22,66.82,6,6,0,1,0,10.49,5.82A150.07,150.07,0,0,0,86,128,42,42,0,0,1,128,86Zm0-60a101.58,101.58,0,0,0-34,5.81,6,6,0,1,0,4,11.31A90.07,90.07,0,0,1,218,128a283.42,283.42,0,0,1-7,62.67,6,6,0,1,0,11.7,2.66A295.41,295.41,0,0,0,230,128,102.12,102.12,0,0,0,128,26ZM68,60.92A6,6,0,0,0,60,52a102.19,102.19,0,0,0-34,76,89.32,89.32,0,0,1-8.15,37.5,6,6,0,1,0,10.9,5A101.12,101.12,0,0,0,38,128,90.15,90.15,0,0,1,68,60.92Zm45.08,141.64a6,6,0,0,0-8,2.95c-2,4.24-4.09,8.47-6.36,12.57a6,6,0,0,0,2.34,8.15,5.88,5.88,0,0,0,2.9.76,6,6,0,0,0,5.25-3.09c2.42-4.36,4.7-8.87,6.78-13.39A6,6,0,0,0,113.08,202.56ZM128,122a6,6,0,0,0-6,6,186.54,186.54,0,0,1-5.86,46.5,6,6,0,0,0,4.32,7.31,5.93,5.93,0,0,0,1.5.19,6,6,0,0,0,5.8-4.5A198.75,198.75,0,0,0,134,128,6,6,0,0,0,128,122Z"/></svg>`;
}
