export const iconPhThinTestTubeThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.83,89.18l-60-60a4,4,0,0,0-5.66,0L39.94,158.41A40.78,40.78,0,0,0,97.6,216.08L210.16,103.5l23.1-7.7a4,4,0,0,0,1.57-6.62ZM91.94,210.42A32.77,32.77,0,1,1,45.6,164.07L75,134.63c9.2-3.38,23.94-5.08,43.11,4.93,12.09,6.31,22.74,8.48,31.66,8.48,1.64,0,3.2-.09,4.73-.22ZM206.74,96.21a4.06,4.06,0,0,0-1.57,1L165,137.39c-9.2,3.38-23.94,5.08-43.11-4.93-14.3-7.47-26.58-9.13-36.38-8.27L172,37.66l52.6,52.6Z"/></svg>`;
}
