export const iconPhLightEscalatorDownLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M171.76,84.24a6,6,0,0,1,8.48-8.48L194,89.51V48a6,6,0,0,1,12,0V89.51l13.76-13.75a6,6,0,0,1,8.48,8.48l-24,24a6,6,0,0,1-8.48,0ZM238,160v40a14,14,0,0,1-14,14H168a6,6,0,0,1-4.41-1.93L69.37,110H32A14,14,0,0,1,18,96V56A14,14,0,0,1,32,42H88a6,6,0,0,1,4.41,1.93L186.63,146H224A14,14,0,0,1,238,160Zm-12,0a2,2,0,0,0-2-2H184a6,6,0,0,1-4.41-1.93L85.37,54H32a2,2,0,0,0-2,2V96a2,2,0,0,0,2,2H72a6,6,0,0,1,4.41,1.93L170.63,202H224a2,2,0,0,0,2-2Z"/></svg>`;
}
