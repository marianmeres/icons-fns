export const iconPhLightFloppyDiskBack = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H83.31a13.94,13.94,0,0,0-9.9,4.1L38.1,73.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM86,46h84V80a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V83.31a2,2,0,0,1,.59-1.41L74,54.48V80A14,14,0,0,0,88,94h80a14,14,0,0,0,14-14V46h26a2,2,0,0,1,2,2Zm-82-94a38,38,0,1,0,38,38A38,38,0,0,0,128,114Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,178Z"/></svg>`;
}
