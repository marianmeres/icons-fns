export const iconPhLightBicycleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,114a45.88,45.88,0,0,0-17.8,3.58L162.45,70H192a10,10,0,0,1,10,10,6,6,0,0,0,12,0,22,22,0,0,0-22-22H152a6,6,0,0,0-5.18,9l13.4,23H98.11L81.18,61A6,6,0,0,0,76,58H48a6,6,0,0,0,0,12H72.55l15,25.64L70,119.62a46.22,46.22,0,1,0,9.68,7.09L94.11,107,126.82,163a6,6,0,0,0,5.19,3,5.91,5.91,0,0,0,3-.82,6,6,0,0,0,2.16-8.2l-32.07-55h62.11l12.63,21.66A46,46,0,1,0,208,114ZM82,160a34,34,0,1,1-19.13-30.57l-19.72,27a6,6,0,0,0,9.7,7.08l19.7-27A33.88,33.88,0,0,1,82,160Zm126,34a34,34,0,0,1-22-59.86L202.82,163a6,6,0,0,0,5.19,3,5.91,5.91,0,0,0,3-.82,6,6,0,0,0,2.16-8.2l-16.86-28.91A34,34,0,1,1,208,194Z"/></svg>`;
}
