export const iconPhThinBatteryChargingVerticalThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M147.4,133.9a4,4,0,0,1,.18,3.89l-16,32A4,4,0,0,1,128,172a4.12,4.12,0,0,1-1.79-.42,4,4,0,0,1-1.79-5.37L137.53,140H112a4,4,0,0,1-3.58-5.79l16-32a4,4,0,1,1,7.16,3.58L118.47,132H144A4,4,0,0,1,147.4,133.9ZM96,12h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8ZM196,56V224a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V56A20,20,0,0,1,80,36h96A20,20,0,0,1,196,56Zm-8,0a12,12,0,0,0-12-12H80A12,12,0,0,0,68,56V224a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12Z"/></svg>`;
}
