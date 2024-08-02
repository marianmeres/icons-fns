export const iconPhLightPipeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,106H206V54h26a6,6,0,0,0,0-12H204.63A14,14,0,0,0,192,34H176a14,14,0,0,0-12.63,8H144A102.12,102.12,0,0,0,42,144v19.37A14,14,0,0,0,34,176v16a14,14,0,0,0,8,12.63V232a6,6,0,0,0,12,0V206h52v26a6,6,0,0,0,12,0V204.63A14,14,0,0,0,126,192V176a14,14,0,0,0-8-12.63V144a26,26,0,0,1,26-26h19.37A14,14,0,0,0,176,126h16a14,14,0,0,0,12.63-8H232a6,6,0,0,0,0-12ZM112,174a2,2,0,0,1,2,2v16a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2Zm-6-30v18H54V144a90.1,90.1,0,0,1,90-90h18v52H144A38,38,0,0,0,106,144Zm86-30H176a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2v64A2,2,0,0,1,192,114Z"/></svg>`;
}
