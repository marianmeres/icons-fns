export const iconPhLightTildeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.68,129.34c-14.17,17.62-28.06,26.92-42.46,28.44A40.75,40.75,0,0,1,174,158c-18.64,0-34.44-12.87-49.76-25.35S94.57,108.51,79,110.16c-11.06,1.16-22.3,9-34.36,24a6,6,0,1,1-9.36-7.52c14.17-17.61,28.06-26.92,42.46-28.43,20.52-2.18,37.54,11.7,54,25.12C147,135.76,161.42,147.48,177,145.84c11.06-1.16,22.3-9,34.36-24a6,6,0,0,1,9.36,7.52Z"/></svg>`;
}
