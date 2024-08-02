export const iconPhBoldShieldPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M84,128a12,12,0,0,1,12-12h20V96a12,12,0,0,1,24,0v20h20a12,12,0,0,1,0,24H140v20a12,12,0,0,1-24,0V140H96A12,12,0,0,1,84,128ZM228,56v56c0,54.29-26.32,87.22-48.4,105.29-23.71,19.39-47.44,26-48.44,26.29a12.1,12.1,0,0,1-6.32,0c-1-.28-24.73-6.9-48.44-26.29C54.32,199.22,28,166.29,28,112V56A20,20,0,0,1,48,36H208A20,20,0,0,1,228,56Zm-24,4H52v52c0,35.71,13.09,64.69,38.91,86.15A126.14,126.14,0,0,0,128,219.38a126.28,126.28,0,0,0,37.09-21.23C190.91,176.69,204,147.71,204,112Z"/></svg>`;
}
