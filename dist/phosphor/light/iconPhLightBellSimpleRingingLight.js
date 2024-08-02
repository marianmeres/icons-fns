export const iconPhLightBellSimpleRingingLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M165.92,224a6,6,0,0,1-6,6h-64a6,6,0,0,1,0-12h64A6,6,0,0,1,165.92,224ZM225.61,61.23a109.23,109.23,0,0,0-38.41-42.3,6,6,0,0,0-6.4,10.14A96,96,0,0,1,215,66.76a6,6,0,1,0,10.65-5.53ZM41,66.76A96,96,0,0,1,75.2,29.07a6,6,0,0,0-6.4-10.14,109.23,109.23,0,0,0-38.41,42.3A6,6,0,1,0,41,66.76Zm179,110.17A14,14,0,0,1,208,198H48a14,14,0,0,1-12.06-21C45.13,161.08,50,138.62,50,112a78,78,0,0,1,156,0C206,139,210.74,160.84,220.08,176.93Zm-10.37,6C199.29,165,194,141.14,194,112a66,66,0,0,0-132,0c0,29.16-5.29,53-15.71,71a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.71,183Z"/></svg>`;
}
