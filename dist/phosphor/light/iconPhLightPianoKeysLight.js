export const iconPhLightPianoKeysLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM78,46h28v92H78Zm34,104a6,6,0,0,0,6-6V46h20v98a6,6,0,0,0,6,6h10v60H102V150Zm38-12V46h28v92ZM46,208V48a2,2,0,0,1,2-2H66v98a6,6,0,0,0,6,6H90v60H48A2,2,0,0,1,46,208Zm164,0a2,2,0,0,1-2,2H166V150h18a6,6,0,0,0,6-6V46h18a2,2,0,0,1,2,2Z"/></svg>`;
}
