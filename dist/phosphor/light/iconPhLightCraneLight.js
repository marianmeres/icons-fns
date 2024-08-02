export const iconPhLightCraneLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.09,18.86a6,6,0,0,0-5.91-.15L102.5,82H32A14,14,0,0,0,18,96V200a14,14,0,0,0,14,14h88a14,14,0,0,0,14-14V168a6.28,6.28,0,0,0-.25-1.72L111.16,91,218,34V160a2,2,0,0,1-2,2H200a2,2,0,0,1-2-2v-8a6,6,0,0,0-12,0v8a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V24A6,6,0,0,0,227.09,18.86ZM99.54,94l20.4,68H62V94ZM32,94H50v68H30V96A2,2,0,0,1,32,94Zm88,108H32a2,2,0,0,1-2-2V174h92v26A2,2,0,0,1,120,202Z"/></svg>`;
}
