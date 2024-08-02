export const iconPhBoldIslandBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M241.37,231.5a12,12,0,0,1-16.87,1.87C224.16,233.1,186.64,204,128,204S31.83,233.1,31.46,233.39a12,12,0,0,1-15-18.76c1.62-1.3,37.57-29.53,95.85-34A123.26,123.26,0,0,1,110,146.06c1.67-20.79,9.88-47.91,37-69.78a52.75,52.75,0,0,0-6.68-.23c-17.2.56-27.61,10.37-32.74,30.88A12,12,0,0,1,96,116a11.79,11.79,0,0,1-2.92-.36,12,12,0,0,1-8.73-14.55c4.46-17.79,17.56-47.82,55.26-49a79.14,79.14,0,0,1,14.8,1c-3.47-4.89-7.81-9.21-13.08-11.39-8.28-3.43-18.73-1.33-31.06,6.23A12,12,0,1,1,97.72,27.43c19.3-11.84,37.11-14.5,52.93-7.89,10.46,4.37,19.63,12.92,26.75,24.88,5.86-7.19,12.72-12.18,20.2-14.61,16.42-5.35,31.7,2.47,41.63,10a12,12,0,1,1-14.47,19.14c-7.79-5.89-14.42-8-19.68-6.32-4.57,1.47-8.45,5.67-11.43,10.19A73.43,73.43,0,0,1,210,69.61C225.48,78.48,244,97.21,244,136a12,12,0,0,1-24,0c0-20-6.13-34.43-18.21-43.15a61.84,61.84,0,0,1-7.33,49,12,12,0,1,1-20.28-12.78,40.61,40.61,0,0,0,5.51-15.76c1.18-9.09-1.07-17.81-6.66-26-23.61,14.28-36.72,34.36-39,59.8a99.84,99.84,0,0,0,2.87,33.06c62.23,2.71,100.91,33.07,102.6,34.42A12,12,0,0,1,241.37,231.5ZM20,144a32,32,0,1,1,32,32A32,32,0,0,1,20,144Zm24,0a8,8,0,1,0,8-8A8,8,0,0,0,44,144Z"/></svg>`;
}
