export const iconPhThinBatteryCharging = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V80A20,20,0,0,0,200,60Zm12,116a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V80A12,12,0,0,1,32,68H200a12,12,0,0,1,12,12Zm40-80v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0ZM135.4,125.9a4,4,0,0,1,.18,3.89l-16,32A4,4,0,0,1,116,164a4.12,4.12,0,0,1-1.79-.42,4,4,0,0,1-1.79-5.37L125.53,132H100a4,4,0,0,1-3.58-5.79l16-32a4,4,0,1,1,7.16,3.58L106.47,124H132A4,4,0,0,1,135.4,125.9Z"/></svg>`;
}
