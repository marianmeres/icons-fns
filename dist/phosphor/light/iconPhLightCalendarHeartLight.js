export const iconPhLightCalendarHeartLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2ZM152,90a30,30,0,0,0-24,12,30,30,0,0,0-54,18c0,35.3,49.22,60.32,51.32,61.37a6,6,0,0,0,5.36,0C132.78,180.32,182,155.3,182,120A30,30,0,0,0,152,90Zm-3.67,65.25A138,138,0,0,1,128,169.19a138.82,138.82,0,0,1-20.33-13.94C97.78,147,86,134.15,86,120a18,18,0,0,1,36,0,6,6,0,0,0,12,0,18,18,0,0,1,36,0C170,134.15,158.22,147,148.33,155.25Z"/></svg>`;
}