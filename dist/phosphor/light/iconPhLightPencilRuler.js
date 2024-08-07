export const iconPhLightPencilRuler = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V174h26a6,6,0,0,0,0-12H158V134h26a6,6,0,0,0,0-12H158V94h26a6,6,0,0,0,0-12H158V48a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM76.24,27.76a6,6,0,0,0-8.48,0l-32,32A6,6,0,0,0,34,64V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V64a6,6,0,0,0-1.76-4.24ZM46,178V78H66V178ZM78,78H98V178H78ZM72,40.49,97.51,66h-51ZM96,210H48a2,2,0,0,1-2-2V190H98v18A2,2,0,0,1,96,210Z"/></svg>`;
}
