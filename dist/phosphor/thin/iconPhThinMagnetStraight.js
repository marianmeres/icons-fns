export const iconPhThinMagnetStraight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,44H160a12,12,0,0,0-12,12v88a20,20,0,0,1-40,0V56A12,12,0,0,0,96,44H56A12,12,0,0,0,44,56v88a84,84,0,0,0,84,84h.64c46-.34,83.36-38.47,83.36-85V56A12,12,0,0,0,200,44Zm-40,8h40a4,4,0,0,1,4,4V92H156V56A4,4,0,0,1,160,52ZM56,52H96a4,4,0,0,1,4,4V92H52V56A4,4,0,0,1,56,52Zm72.58,168H128a76,76,0,0,1-76-76V100h48v44a28,28,0,0,0,56,0V100h48v43C204,185.15,170.17,219.69,128.58,220Z"/></svg>`;
}
