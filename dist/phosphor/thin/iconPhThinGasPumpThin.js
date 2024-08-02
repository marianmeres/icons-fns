export const iconPhThinGasPumpThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238.14,72.49,218.83,53.17a4,4,0,0,0-5.66,5.66l19.32,19.31A12,12,0,0,1,236,86.63V168a12,12,0,0,1-24,0V128a20,20,0,0,0-20-20H172V56a20,20,0,0,0-20-20H72A20,20,0,0,0,52,56V212H32a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8H172V116h20a12,12,0,0,1,12,12v40a20,20,0,0,0,40,0V86.63A19.85,19.85,0,0,0,238.14,72.49ZM60,212V56A12,12,0,0,1,72,44h80a12,12,0,0,1,12,12V212Zm80-100a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,112Z"/></svg>`;
}
