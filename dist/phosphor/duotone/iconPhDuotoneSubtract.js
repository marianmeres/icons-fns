export const iconPhDuotoneSubtract = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,160a72,72,0,0,1-143.6,7.6h0a73.37,73.37,0,0,0,7.6.4,72,72,0,0,0,72-72,73.37,73.37,0,0,0-.4-7.6h0A72,72,0,0,1,232,160Z" opacity="0.2"/><path d="M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM32,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,32,96ZM160,224A63.81,63.81,0,0,1,98,176,80.07,80.07,0,0,0,176,98,64,64,0,0,1,160,224Z"/></svg>`;
}
