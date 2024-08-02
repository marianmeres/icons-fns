export const iconPhBoldGasPump = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M247.8,66.83,228.49,47.51a12,12,0,0,0-17,17L230.83,83.8A4,4,0,0,1,232,86.63V166a6,6,0,0,1-12,0V128a28,28,0,0,0-28-28H180V56a28,28,0,0,0-28-28H72A28,28,0,0,0,44,56V204H32a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24H180V124h12a4,4,0,0,1,4,4v38a30,30,0,0,0,60,0V86.63A27.81,27.81,0,0,0,247.8,66.83ZM68,204V56a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4V204Zm72-92a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h32A12,12,0,0,1,140,112Z"/></svg>`;
}
