export const iconPhLightEject = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,154H48a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V168A14,14,0,0,0,208,154Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V168a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM48.24,134H207.76a14.19,14.19,0,0,0,13.1-8.55,13.61,13.61,0,0,0-2.72-15L144.41,33a22.76,22.76,0,0,0-32.82,0L37.86,110.5a13.61,13.61,0,0,0-2.72,15A14.19,14.19,0,0,0,48.24,134Zm-1.69-15.23,73.73-77.51a10.77,10.77,0,0,1,15.44,0l73.73,77.51a1.67,1.67,0,0,1,.38,2,2.11,2.11,0,0,1-2.07,1.27H48.24a2.11,2.11,0,0,1-2.07-1.27A1.67,1.67,0,0,1,46.55,118.77Z"/></svg>`;
}
