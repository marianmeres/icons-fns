export const iconPhThinTextStrikethroughThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,128a4,4,0,0,1-4,4H161.16c15.45,7.24,26.84,17.8,26.84,36,0,24.26-26.92,44-60,44s-60-19.74-60-44a4,4,0,0,1,8,0c0,19.85,23.33,36,52,36s52-16.15,52-36c0-19.54-16.13-28.3-42.18-36H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM76.33,100a3.85,3.85,0,0,0,1.25-.2,4,4,0,0,0,2.55-5,21.9,21.9,0,0,1-1-6.75c0-20.52,21-36,48.89-36,20.32,0,37,8.2,44.49,21.92a4,4,0,0,0,7-3.85C170.54,53.75,151.29,44,128,44,95.57,44,71.11,62.92,71.11,88a29.76,29.76,0,0,0,1.42,9.25A4,4,0,0,0,76.33,100Z"/></svg>`;
}
