export const iconPhThinSubway = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,96V208a4,4,0,0,1-8,0V96a60.07,60.07,0,0,0-60-60H104A60.07,60.07,0,0,0,44,96V208a4,4,0,0,1-8,0V96a68.07,68.07,0,0,1,68-68h48A68.07,68.07,0,0,1,220,96Zm-40,0v72a20,20,0,0,1-20,20h-1.53l5.11,10.21a4,4,0,0,1-1.79,5.37A4.12,4.12,0,0,1,160,204a4,4,0,0,1-3.58-2.21L149.53,188H106.47l-6.89,13.79A4,4,0,0,1,96,204a4.12,4.12,0,0,1-1.79-.42,4,4,0,0,1-1.79-5.37L97.53,188H96a20,20,0,0,1-20-20V96A20,20,0,0,1,96,76h64A20,20,0,0,1,180,96ZM84,96v52h88V96a12,12,0,0,0-12-12H96A12,12,0,0,0,84,96Zm32,60v24h24V156ZM96,180h12V156H84v12A12,12,0,0,0,96,180Zm76-12V156H148v24h12A12,12,0,0,0,172,168Z"/></svg>`;
}
