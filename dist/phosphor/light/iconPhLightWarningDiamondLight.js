export const iconPhLightWarningDiamondLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm6,26a10,10,0,1,0,10,10A10,10,0,0,0,128,162Zm110-34a13.82,13.82,0,0,1-4.09,9.86l-96,96.06a14,14,0,0,1-19.72,0h0l-96-96.06a13.93,13.93,0,0,1,0-19.72l96.05-96.06a14,14,0,0,1,19.72,0l96,96.06A13.82,13.82,0,0,1,238,128Zm-12,0a1.94,1.94,0,0,0-.57-1.38L129.38,30.56a2,2,0,0,0-2.76,0L30.57,126.62a2,2,0,0,0,0,2.76l96.05,96.06h0a2,2,0,0,0,2.76,0l96.05-96.06A1.94,1.94,0,0,0,226,128Z"/></svg>`;
}
