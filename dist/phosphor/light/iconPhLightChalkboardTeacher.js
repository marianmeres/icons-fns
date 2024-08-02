export const iconPhLightChalkboardTeacher = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H53.39a6,6,0,0,0,5.42-3.43,50,50,0,0,1,90.38,0,6,6,0,0,0,5.42,3.43H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM78,144a26,26,0,1,1,26,26A26,26,0,0,1,78,144Zm140,56a2,2,0,0,1-2,2H158.27a62.34,62.34,0,0,0-31.48-27.61,38,38,0,1,0-45.58,0A62.34,62.34,0,0,0,49.73,202H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM198,80v96a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h10V86H70V96a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H192A6,6,0,0,1,198,80Z"/></svg>`;
}
