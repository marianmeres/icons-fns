export const iconPhLightThumbsUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232.49,81.44A22,22,0,0,0,216,74H158V56a38,38,0,0,0-38-38,6,6,0,0,0-5.37,3.32L76.29,98H32a14,14,0,0,0-14,14v88a14,14,0,0,0,14,14H204a22,22,0,0,0,21.83-19.27l12-96A22,22,0,0,0,232.49,81.44ZM30,200V112a2,2,0,0,1,2-2H74v92H32A2,2,0,0,1,30,200ZM225.92,97.24l-12,96A10,10,0,0,1,204,202H86V105.42l37.58-75.17A26,26,0,0,1,146,56V80a6,6,0,0,0,6,6h64a10,10,0,0,1,9.92,11.24Z"/></svg>`;
}
