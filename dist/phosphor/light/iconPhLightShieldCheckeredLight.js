export const iconPhLightShieldCheckeredLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,14v56c0,3.39-.12,6.72-.34,10H134V54h74A2,2,0,0,1,210,56ZM46,56a2,2,0,0,1,2-2h74v68H46.34c-.22-3.28-.34-6.61-.34-10Zm1.71,78H122v89.52a133.13,133.13,0,0,1-34.56-20.46C65.5,185,52.2,161.8,47.71,134Zm120.85,69.06A133.13,133.13,0,0,1,134,223.52V134h74.29C203.8,161.8,190.5,185,168.56,203.06Z"/></svg>`;
}
