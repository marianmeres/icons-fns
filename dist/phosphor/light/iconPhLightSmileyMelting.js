export const iconPhLightSmileyMelting = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,140a10,10,0,1,1-10-10A10,10,0,0,1,174,140ZM126,92a10,10,0,1,0-10,10A10,10,0,0,0,126,92Zm73.62-36.63A102,102,0,0,0,52,196a6,6,0,1,0,8.94-8A90.09,90.09,0,0,1,126.72,38H128a90,90,0,0,1,67.07,150,6,6,0,0,0,8.95,8,102,102,0,0,0-4.41-140.63ZM152,170H136c-22.65,0-50-18.73-50-42a43.15,43.15,0,0,1,.58-7,6,6,0,1,0-11.83-2,54,54,0,0,0-.75,9c0,14.26,7.2,28,20.27,38.6,12,9.79,27.26,15.4,41.73,15.4h16a10,10,0,0,1,0,20H96a22,22,0,0,0,0,44,6,6,0,0,0,0-12,10,10,0,0,1,0-20h56a22,22,0,0,0,0-44Z"/></svg>`;
}
