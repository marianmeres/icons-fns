export const iconPhBoldOrange = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,72.36A68,68,0,0,0,204,16,12,12,0,0,0,192,4h-8a68,68,0,0,0-56,29.49A68,68,0,0,0,72,4H64a12,12,0,0,0,0,24h8a44.07,44.07,0,0,1,42.6,33A92.05,92.05,0,1,0,174,72.36Zm4.22-44a44.14,44.14,0,0,1-36.46,31.24A44.14,44.14,0,0,1,178.23,28.38ZM128,220a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,220Zm49.62-52.4a52,52,0,0,1-34,34,12.2,12.2,0,0,1-3.6.55,12,12,0,0,1-3.6-23.45,28,28,0,0,0,18.32-18.32,12,12,0,0,1,22.9,7.2Z"/></svg>`;
}
