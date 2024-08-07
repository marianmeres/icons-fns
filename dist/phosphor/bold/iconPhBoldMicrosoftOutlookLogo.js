export const iconPhBoldMicrosoftOutlookLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,128a36,36,0,1,0-36,36A36,36,0,0,0,124,128Zm-48,0a12,12,0,1,1,12,12A12,12,0,0,1,76,128Zm148-28H212V32a12,12,0,0,0-12-12H104A12,12,0,0,0,92,32V56H36A20,20,0,0,0,16,76V180a20,20,0,0,0,20,20H68v16a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V112A12,12,0,0,0,224,100Zm-52.45,68L212,136.54v62.92ZM116,44h72v80.8l-28,21.78V76a20,20,0,0,0-20-20H116ZM40,80h96v96H40ZM92,200h48a20,20,0,0,0,18.28-11.92L189,212H92Z"/></svg>`;
}
