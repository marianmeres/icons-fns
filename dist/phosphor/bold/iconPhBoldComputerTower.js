export const iconPhBoldComputerTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M84,76A12,12,0,0,1,96,64h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,76Zm12,52h64a12,12,0,0,0,0-24H96a12,12,0,0,0,0,24ZM212,40V216a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V40A20,20,0,0,1,64,20H192A20,20,0,0,1,212,40Zm-24,4H68V212H188ZM128,168a16,16,0,1,0,16,16A16,16,0,0,0,128,168Z"/></svg>`;
}
