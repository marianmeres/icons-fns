export const iconPhDuotoneNotSupersetOfDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,104a56,56,0,0,1-56,56H56V48h96A56,56,0,0,1,208,104Z" opacity="0.2"/><path d="M208,192H80.63l21.82-24H152A64,64,0,0,0,199.54,61.2l14.38-15.82a8,8,0,0,0-11.84-10.76L187.43,50.73A63.66,63.66,0,0,0,152,40H56a8,8,0,0,0,0,16h96a47.72,47.72,0,0,1,24.51,6.75L95.37,152H56a8,8,0,0,0,0,16H80.82L42.08,210.62a8,8,0,1,0,11.84,10.76L66.08,208H208a8,8,0,0,0,0-16ZM188.71,73.12A48,48,0,0,1,152,152H117Z"/></svg>`;
}
