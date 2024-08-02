export const iconPhDuotoneBluetoothX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,176l-64,48V128ZM167.47,73.6,112,32v96l55.47-41.6A8,8,0,0,0,167.47,73.6Z" opacity="0.2"/><path d="M180.8,169.6,125.33,128l23.47-17.6a8,8,0,0,0-9.6-12.8L120,112V48l19.2,14.4a8,8,0,1,0,9.6-12.8l-32-24A8,8,0,0,0,104,32v80L52.8,73.6a8,8,0,0,0-9.6,12.8L98.67,128,43.2,169.6a8,8,0,1,0,9.6,12.8L104,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM120,208V144l42.67,32ZM237.66,98.34a8,8,0,0,1-11.32,11.32L208,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L196.69,80,178.34,61.66a8,8,0,0,1,11.32-11.32L208,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L219.31,80Z"/></svg>`;
}
