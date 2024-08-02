export const iconPhThinBellSimpleRinging = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,224a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224ZM223.84,62.16a107.34,107.34,0,0,0-37.71-41.54,4,4,0,1,0-4.26,6.76,99.41,99.41,0,0,1,34.87,38.46A4,4,0,0,0,220.29,68a3.94,3.94,0,0,0,1.84-.45A4,4,0,0,0,223.84,62.16ZM39.26,65.84A99.41,99.41,0,0,1,74.13,27.38a4,4,0,0,0-4.26-6.76A107.34,107.34,0,0,0,32.16,62.16a4,4,0,0,0,1.71,5.39,3.94,3.94,0,0,0,1.84.45A4,4,0,0,0,39.26,65.84ZM218.36,178A12,12,0,0,1,208,196H48A12,12,0,0,1,37.64,178C47.17,161.56,52,139.37,52,112a76,76,0,0,1,152,0C204,139.36,208.83,161.55,218.36,178Zm-6.92,4C201.19,164.34,196,140.79,196,112a68,68,0,0,0-136,0c0,28.8-5.19,52.34-15.44,70a4,4,0,0,0,0,4A3.89,3.89,0,0,0,48,188H208a3.89,3.89,0,0,0,3.43-2A4,4,0,0,0,211.44,182Z"/></svg>`;
}
