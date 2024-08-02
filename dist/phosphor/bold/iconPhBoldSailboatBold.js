export const iconPhBoldSailboatBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M250.82,170.8A12,12,0,0,0,240,164H148V148h68a12,12,0,0,0,8.88-20.07L148,43.36V12a12,12,0,0,0-21.19-7.71l-104,124A12,12,0,0,0,32,148h92v16H16a12,12,0,0,0-9.37,19.5l29.6,37A19.9,19.9,0,0,0,51.84,228H204.16a19.9,19.9,0,0,0,15.61-7.51l29.6-37A12,12,0,0,0,250.82,170.8ZM188.87,124H148V79ZM57.73,124,124,45v79Zm144.5,80H53.77L41,188H215Z"/></svg>`;
}
