export const iconPhBoldToilet = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,68a12,12,0,0,1-12,12H100a12,12,0,0,1,0-24h16A12,12,0,0,1,128,68Zm48.15,127.62,3.65,25.55A20,20,0,0,1,160,244H96a20,20,0,0,1-19.8-22.83l3.65-25.55A100.08,100.08,0,0,1,28,108,12,12,0,0,1,40,96H52V40A20,20,0,0,1,72,20H184a20,20,0,0,1,20,20V96h12a12,12,0,0,1,12,12A100.08,100.08,0,0,1,176.15,195.62ZM76,96H180V44H76Zm77.21,108.78a100.3,100.3,0,0,1-50.42,0L100.61,220h54.78ZM203.05,120H53a76,76,0,0,0,150.1,0Z"/></svg>`;
}
