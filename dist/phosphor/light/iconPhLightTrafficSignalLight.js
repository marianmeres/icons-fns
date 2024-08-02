export const iconPhLightTrafficSignalLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,58a30,30,0,1,0,30,30A30,30,0,0,0,128,58Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm0,32a30,30,0,1,0,30,30A30,30,0,0,0,128,138Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,186Zm88-40H198V78h18a6,6,0,0,0,0-12H198V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V66H40a6,6,0,0,0,0,12H58v68H40a6,6,0,0,0,0,12H58v58a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V158h18a6,6,0,0,0,0-12Zm-30,70a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z"/></svg>`;
}
