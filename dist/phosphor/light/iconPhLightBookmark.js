export const iconPhLightBookmark = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34ZM72,46H184a2,2,0,0,1,2,2V165.18l-54.83-34.27a6,6,0,0,0-6.36,0L70,165.17V48A2,2,0,0,1,72,46Zm59.17,132.91a6,6,0,0,0-6.36,0L70,213.17V179.33l58-36.25,58,36.25v33.84Z"/></svg>`;
}
