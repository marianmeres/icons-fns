export const iconPhLightNumpadLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M78,48A14,14,0,1,1,64,34,14,14,0,0,1,78,48Zm50-14a14,14,0,1,0,14,14A14,14,0,0,0,128,34Zm64,28a14,14,0,1,0-14-14A14,14,0,0,0,192,62ZM64,90a14,14,0,1,0,14,14A14,14,0,0,0,64,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,192,90ZM64,146a14,14,0,1,0,14,14A14,14,0,0,0,64,146Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,146Zm0,56a14,14,0,1,0,14,14A14,14,0,0,0,128,202Zm64-56a14,14,0,1,0,14,14A14,14,0,0,0,192,146Z"/></svg>`;
}
