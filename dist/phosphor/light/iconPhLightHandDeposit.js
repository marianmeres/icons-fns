export const iconPhLightHandDeposit = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M126,30.49V128a6,6,0,0,1-12,0V30.49L92.24,52.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48Zm64,94.2V96a14,14,0,0,0-14-14H160a6,6,0,0,0,0,12h16a2,2,0,0,1,2,2v86.14A26,26,0,0,0,133.49,209c0,.1.11.19.17.29l22.26,34a6,6,0,0,0,10-6.58L143.8,202.87A14,14,0,0,1,168.13,189a2.75,2.75,0,0,0,.17.29L179,205.59a6,6,0,0,0,11-3.28V139.57a76.83,76.83,0,0,1,28,59.08V240a6,6,0,0,0,12,0V198.65A88.88,88.88,0,0,0,190,124.69ZM80,82H64A14,14,0,0,0,50,96V200a6,6,0,0,0,12,0V96a2,2,0,0,1,2-2H80a6,6,0,0,0,0-12Z"/></svg>`;
}
