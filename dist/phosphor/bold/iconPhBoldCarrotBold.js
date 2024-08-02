export const iconPhBoldCarrotBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,60H213l19.51-19.51a12,12,0,1,0-17-17L196,43V24a12,12,0,0,0-24,0V50A68,68,0,0,0,96,63.87l0,0h0l0,0C55.45,103.68,25.18,197,21.78,207.77A20,20,0,0,0,40,236a20.12,20.12,0,0,0,8.24-1.78c7.64-2.42,56.79-18.34,98.91-41.82l.54-.3c17.1-9.57,33-20.39,44.44-32A68,68,0,0,0,206,84h26a12,12,0,0,0,0-24Zm-56.89,83.12-.09.09c-8.11,8.28-19.11,16.2-31.33,23.52l-23.21-23.21a12,12,0,1,0-17,17l18.22,18.22c-30.29,15.17-62.13,26.42-75.26,30.82,6.77-20.22,29.79-84.8,58.34-119.74l30.7,30.7a12,12,0,1,0,17-17L122.54,73.58a44,44,0,0,1,52.57,69.54Z"/></svg>`;
}
