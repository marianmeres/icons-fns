export const iconPhLightCalendarSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,48,34,14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a6,6,0,0,0,4.44-10ZM46.26,47,78.07,82H46V48A2.06,2.06,0,0,1,46.26,47ZM48,210a2,2,0,0,1-2-2V94H89L194.44,210ZM222,48V177.23a6,6,0,1,1-12,0V94H134.88a6,6,0,0,1,0-12H210V48a2,2,0,0,0-2-2H182V56a6,6,0,0,1-12,0V46H91.25a6,6,0,0,1,0-12H170V24a6,6,0,0,1,12,0V34h26A14,14,0,0,1,222,48Z"/></svg>`;
}
