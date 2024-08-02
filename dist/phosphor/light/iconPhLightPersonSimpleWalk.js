export const iconPhLightPersonSimpleWalk = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152,78a30,30,0,1,0-30-30A30,30,0,0,0,152,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,30Zm62,114a6,6,0,0,1-6,6c-34.48,0-51.06-16.75-65.7-31.52-3.47-3.51-6.75-6.82-10.15-9.78L117,143.61l38.52,27.51A6,6,0,0,1,158,176v56a6,6,0,0,1-12,0V179.09l-33.92-24.23L77.5,234.39a6,6,0,0,1-11-4.78l55-126.61c-10.18-2.75-23.07,0-38.51,8.29a165.76,165.76,0,0,0-30.92,22,6,6,0,0,1-8.22-8.74,175.4,175.4,0,0,1,33.27-23.77c25.93-14,47.64-14.39,62.77-1.26,3.77,3.27,7.4,6.93,10.9,10.47,13.62,13.75,27.69,28,57.17,28A6,6,0,0,1,214,144Z"/></svg>`;
}
