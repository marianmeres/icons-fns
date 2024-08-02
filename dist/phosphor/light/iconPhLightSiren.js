export const iconPhLightSiren = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M122,16V8a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm78,30a6,6,0,0,0,4.24-1.76l8-8a6,6,0,1,0-8.48-8.48l-8,8A6,6,0,0,0,200,46ZM51.76,44.24a6,6,0,0,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48ZM137,74.08a6,6,0,1,0-2,11.84c20,3.34,35,21.44,35,42.08a6,6,0,0,0,12,0C182,101.57,162.65,78.39,137,74.08ZM230,176v24a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V176a14,14,0,0,1,14-14h2V128a86,86,0,0,1,86-86h.65c47.06.35,85.35,39.38,85.35,87v33h2A14,14,0,0,1,230,176ZM54,162H202V129c0-41-32.94-74.7-73.44-75H128a74,74,0,0,0-74,74Zm164,14a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v24a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"/></svg>`;
}
