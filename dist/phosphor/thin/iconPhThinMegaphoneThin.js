export const iconPhThinMegaphoneThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,76H160.1c-2.19-.11-54.55-3.38-104.38-45.17A12,12,0,0,0,36,40V200a11.88,11.88,0,0,0,6.92,10.87A12.18,12.18,0,0,0,48,212a11.93,11.93,0,0,0,7.69-2.83c42.46-35.62,86.76-43.25,100.28-44.8v36.29a12,12,0,0,0,5.34,10l11,7.33a12,12,0,0,0,18.28-7l12.49-47.09A44,44,0,0,0,200,76Zm-44,80.3c-13.53,1.35-60,8.62-105.42,46.75A4,4,0,0,1,44,200V40a4,4,0,0,1,2.3-3.62A4.32,4.32,0,0,1,48.05,36a3.88,3.88,0,0,1,2.53,1C96,75.09,142.47,82.36,156,83.71ZM182.87,209a4,4,0,0,1-6.1,2.36l-11-7.33a4,4,0,0,1-1.78-3.33V164h30.8ZM200,156H164V84h36a36,36,0,0,1,0,72Z"/></svg>`;
}
