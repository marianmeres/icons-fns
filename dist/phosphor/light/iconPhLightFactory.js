export const iconPhLightFactory = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M114,176a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h28A6,6,0,0,1,114,176Zm62-6H148a6,6,0,0,0,0,12h28a6,6,0,0,0,0-12Zm62,46a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H34V88a6,6,0,0,1,9.6-4.8L98,124V88a6,6,0,0,1,9.6-4.8L149,114.28l12-84.26a14.07,14.07,0,0,1,13.86-12h18.12a14.07,14.07,0,0,1,13.86,12l15,105.13s.06.59.06.85v74h10A6,6,0,0,1,238,216Zm-78-93.51L170,130h39.08L195,31.72a2,2,0,0,0-2-1.72H174.94a2,2,0,0,0-2,1.72ZM46,210H210V142H168a6,6,0,0,1-3.6-1.2L150,130l0,0L110,100v36a6,6,0,0,1-9.6,4.8L46,100Z"/></svg>`;
}
