export const iconPhLightCheckerboard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-13.52,88L134,61.52V46h15.52L210,106.48V122ZM134,78.48,177.52,122H134ZM210,48V89.52L166.48,46H208A2,2,0,0,1,210,48ZM48,46h74v76H46V48A2,2,0,0,1,48,46Zm58.48,164L46,149.52V134H61.52L122,194.48V210ZM122,177.52,78.48,134H122ZM46,208V166.48L89.52,210H48A2,2,0,0,1,46,208Zm162,2H134V192h0V134h76v74A2,2,0,0,1,208,210Z"/></svg>`;
}
