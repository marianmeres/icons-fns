export const iconPhThinHammerThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248.5,114.81,181.05,46.9A92.1,92.1,0,0,0,50.9,47L37.12,61.18a4,4,0,1,0,5.75,5.56L56.6,52.56a83.75,83.75,0,0,1,22.34-16L130.34,88,31.51,186.82a12,12,0,0,0,0,17L52.2,224.48a12,12,0,0,0,17,0L168,125.63l17.17,17.18h0l17.66,17.66a12,12,0,0,0,17,0l28.69-28.69A12,12,0,0,0,248.5,114.81Zm-185,104a4,4,0,0,1-5.66,0L37.17,198.14a4,4,0,0,1,0-5.66L108,121.63,134.34,148ZM165.17,117.15,140,142.32,113.65,116,138.83,90.8a4,4,0,0,0,0-5.66l-52-52a84.11,84.11,0,0,1,88.52,19.38l47,47.35L188,134.32l-17.17-17.17A4,4,0,0,0,165.17,117.15Zm77.66,9-28.68,28.69a4,4,0,0,1-5.66,0L193.66,140l34.39-34.4,14.78,14.88A4,4,0,0,1,242.83,126.12Z"/></svg>`;
}
