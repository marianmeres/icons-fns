export const iconPhLightDnaLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198,204.5V232a6,6,0,0,1-12,0V204.5a65.64,65.64,0,0,0-36.48-59l-48.4-24.2A77.57,77.57,0,0,1,58,51.5V24a6,6,0,0,1,12,0V51.5a65.64,65.64,0,0,0,36.48,59l48.4,24.2A77.57,77.57,0,0,1,198,204.5ZM160,202H70.05A66,66,0,0,1,74,182h74.13a6,6,0,0,0,0-12H79.77a65.85,65.85,0,0,1,17.16-18.7,6,6,0,0,0-7.1-9.67A78.27,78.27,0,0,0,58,204.5V232a6,6,0,0,0,12,0V214h90a6,6,0,0,0,0-12ZM192,18a6,6,0,0,0-6,6V42H96a6,6,0,0,0,0,12H186A66,66,0,0,1,182,74H107.89a6,6,0,1,0,0,12h68.34a65.85,65.85,0,0,1-17.16,18.7,6,6,0,0,0,7.1,9.67A78.27,78.27,0,0,0,198,51.5V24A6,6,0,0,0,192,18Z"/></svg>`;
}
