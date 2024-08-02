export const iconPhThinToilet = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M116,64a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h16A4,4,0,0,1,116,64Zm52,130.86,3.92,27.44A12,12,0,0,1,160,236H96a12,12,0,0,1-11.88-13.7L88,194.86A92.11,92.11,0,0,1,36,112a4,4,0,0,1,4-4H60V40A12,12,0,0,1,72,28H184a12,12,0,0,1,12,12v68h20a4,4,0,0,1,4,4A92.11,92.11,0,0,1,168,194.86ZM68,108H188V40a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4Zm92.34,90.13a92,92,0,0,1-64.68,0L92,223.43a4,4,0,0,0,.94,3.19A3.93,3.93,0,0,0,96,228h64a3.93,3.93,0,0,0,3-1.38,4,4,0,0,0,.94-3.19ZM211.91,116H44.09a84,84,0,0,0,167.82,0Z"/></svg>`;
}
