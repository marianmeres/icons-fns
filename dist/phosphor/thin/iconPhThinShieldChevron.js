export const iconPhThinShieldChevron = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44ZM169.71,204.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11A115.08,115.08,0,0,1,59.21,173L128,124.88,196.79,173A115.08,115.08,0,0,1,169.71,204.71ZM212,112c0,20-3.85,38-11.46,53.89l-70.25-49.17a4,4,0,0,0-4.58,0L55.46,165.89C47.85,150,44,132,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/></svg>`;
}
