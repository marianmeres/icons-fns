export const iconPhLightMediumLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M72,66a62,62,0,1,0,62,62A62.07,62.07,0,0,0,72,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,72,178ZM184,66c-17.1,0-30,26.65-30,62s12.9,62,30,62,30-26.65,30-62S201.1,66,184,66Zm0,112c-7.34,0-18-19.48-18-50s10.66-50,18-50,18,19.48,18,50S191.34,178,184,178ZM246,72V184a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Z"/></svg>`;
}
