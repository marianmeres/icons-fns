export const iconPhLightGooglePhotosLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,122H189.18A70,70,0,0,0,128,18a6,6,0,0,0-6,6V66.82A70,70,0,0,0,18,128a6,6,0,0,0,6,6H66.82A70,70,0,0,0,128,238a6,6,0,0,0,6-6V189.18A70,70,0,0,0,238,128,6,6,0,0,0,232,122ZM186,88a57.3,57.3,0,0,1-11,34H134V30.31A58.08,58.08,0,0,1,186,88ZM88,70a57.3,57.3,0,0,1,34,11v41H30.31A58.08,58.08,0,0,1,88,70ZM70,168a57.3,57.3,0,0,1,11-34h41v91.69A58.08,58.08,0,0,1,70,168Zm98,18a57.3,57.3,0,0,1-34-11V134h91.69A58.08,58.08,0,0,1,168,186Z"/></svg>`;
}
