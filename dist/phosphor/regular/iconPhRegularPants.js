export const iconPhRegularPants = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z"/></svg>`;
}
