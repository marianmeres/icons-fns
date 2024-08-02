export const iconPhLightBandaidsLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M181.74,128l29.13-29.13a38,38,0,1,0-53.74-53.74L128,74.26,98.87,45.13A38,38,0,1,0,45.13,98.87L74.26,128,45.13,157.13a38,38,0,1,0,53.74,53.74L128,181.74l29.13,29.13a38,38,0,1,0,53.74-53.74ZM165.62,53.62h0a26,26,0,1,1,36.76,36.77l-29.13,29.13L136.49,82.75ZM164.77,128,128,164.77,91.23,128,128,91.23ZM53.62,90.38A26,26,0,1,1,90.38,53.62l29.13,29.13L82.75,119.52Zm36.76,112a26,26,0,1,1-36.76-36.76l29.13-29.13,36.76,36.76Zm112,0a26,26,0,0,1-36.76,0l-29.14-29.13,36.77-36.77,29.13,29.14a26,26,0,0,1,0,36.76ZM118,128a10,10,0,1,1,10,10A10,10,0,0,1,118,128Z"/></svg>`;
}