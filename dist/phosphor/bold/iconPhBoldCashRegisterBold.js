export const iconPhBoldCashRegisterBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.61,157,221.17,71a20,20,0,0,0-19.35-15H140V40a20,20,0,0,0-20-20H80A20,20,0,0,0,60,40V56H54.18A20,20,0,0,0,34.83,71L12.39,157a11.94,11.94,0,0,0-.39,3v32a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V160A11.94,11.94,0,0,0,243.61,157ZM84,44h32V56H84ZM57.27,80H198.73l17.74,68H39.53ZM36,188V172H220v16Zm28-72a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H76A12,12,0,0,1,64,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,112,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,160,116Z"/></svg>`;
}
