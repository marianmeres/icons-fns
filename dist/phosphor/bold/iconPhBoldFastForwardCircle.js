export const iconPhBoldFastForwardCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,128a12,12,0,0,1-4.5,9.37l-40,32A12,12,0,0,1,132,160V140.17l-36.5,29.2A12,12,0,0,1,76,160V96a12,12,0,0,1,19.5-9.37l36.5,29.2V96a12,12,0,0,1,19.5-9.37l40,32A12,12,0,0,1,196,128Zm40,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/></svg>`;
}
