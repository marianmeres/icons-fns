export const iconPhThinWindowsLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,140H128a4,4,0,0,0-4,4v57.45a4,4,0,0,0,3.28,3.94l80,14.55a4.37,4.37,0,0,0,.72.06,4,4,0,0,0,2.56-.93A4,4,0,0,0,212,216V144A4,4,0,0,0,208,140Zm-4,71.21-72-13.09V148h72ZM96,140H32a4,4,0,0,0-4,4v40a4,4,0,0,0,3.28,3.94l64,11.63a3.51,3.51,0,0,0,.72.07,4,4,0,0,0,4-4V144A4,4,0,0,0,96,140Zm-4,50.84L36,180.66V148H92ZM210.56,36.93a4,4,0,0,0-3.28-.87l-80,14.55A4,4,0,0,0,124,54.55V112a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V40A4,4,0,0,0,210.56,36.93ZM204,108H132V57.88l72-13.09ZM95.28,56.43l-64,11.63A4,4,0,0,0,28,72v40a4,4,0,0,0,4,4H96a4,4,0,0,0,4-4V60.36a4,4,0,0,0-4.72-3.93ZM92,108H36V75.34L92,65.16Z"/></svg>`;
}
