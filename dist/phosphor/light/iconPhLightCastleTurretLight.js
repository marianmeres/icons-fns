export const iconPhLightCastleTurretLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,218H198V114.49l11.9-11.91a13.9,13.9,0,0,0,4.1-9.89V48a14,14,0,0,0-14-14H176a6,6,0,0,0-6,6V66H150V40a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6V66H86V40a6,6,0,0,0-6-6H56A14,14,0,0,0,42,48V92.69a13.9,13.9,0,0,0,4.1,9.89L58,114.49V218H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM68.24,107.76,54.58,94.1A2,2,0,0,1,54,92.69V48a2,2,0,0,1,2-2H74V72a6,6,0,0,0,6,6h32a6,6,0,0,0,6-6V46h20V72a6,6,0,0,0,6,6h32a6,6,0,0,0,6-6V46h18a2,2,0,0,1,2,2V92.69a2,2,0,0,1-.58,1.41l-13.66,13.66A6,6,0,0,0,186,112V218H158V168a30,30,0,0,0-60,0v50H70V112A6,6,0,0,0,68.24,107.76ZM146,218H110V168a18,18,0,0,1,36,0Z"/></svg>`;
}
