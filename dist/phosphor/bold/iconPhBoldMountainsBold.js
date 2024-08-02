export const iconPhBoldMountainsBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,80a32,32,0,1,0-32-32A32,32,0,0,0,160,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,160,40Zm94.32,153.88L199.76,101.8A19.85,19.85,0,0,0,182.55,92h0a19.83,19.83,0,0,0-17.2,9.8l-18.7,31.55-37.42-63.5a20,20,0,0,0-34.46,0L1.66,193.91A12,12,0,0,0,12,212H244a12,12,0,0,0,10.32-18.12ZM92,87.87,108.57,116H75.43ZM33,188l28.28-48h61.44L151,188Zm145.86,0L160.56,157l22-37.1L222.94,188Z"/></svg>`;
}
