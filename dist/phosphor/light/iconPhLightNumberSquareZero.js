export const iconPhLightNumberSquareZero = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,74c-13.52,0-24.69,6.12-32.29,17.71C89.45,101.24,86,114.13,86,128s3.45,26.76,9.7,36.29C103.31,175.88,114.47,182,128,182s24.69-6.12,32.29-17.71c6.26-9.53,9.71-22.42,9.71-36.29s-3.45-26.76-9.7-36.29C152.69,80.12,141.52,74,128,74Zm0,96c-20.72,0-30-21.09-30-42s9.28-42,30-42,30,21.09,30,42S148.72,170,128,170ZM208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/></svg>`;
}
