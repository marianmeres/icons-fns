export const iconPhThinBathtub = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,100H204V96a4,4,0,0,0-4-4H136a4,4,0,0,0-4,4v4H60V52A16,16,0,0,1,76,36,16.49,16.49,0,0,1,92.08,48.8a4,4,0,1,0,7.84-1.6A24.32,24.32,0,0,0,76,28,24,24,0,0,0,52,52v48H16a4,4,0,0,0-4,4v40a52.06,52.06,0,0,0,52,52h4v20a4,4,0,0,0,8,0V196H180v20a4,4,0,0,0,8,0V196h4a52.06,52.06,0,0,0,52-52V104A4,4,0,0,0,240,100Zm-100,0h56v40H140Zm96,44a44.05,44.05,0,0,1-44,44H64a44.05,44.05,0,0,1-44-44V108H132v36a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V108h32Z"/></svg>`;
}
