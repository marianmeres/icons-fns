export const iconPhDuotoneCloudMoonDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M106.31,130.38ZM102.38,17.62h0A64.06,64.06,0,0,1,25.62,94.38h0A64.12,64.12,0,0,0,63,138.93h0a44.08,44.08,0,0,1,43.33-8.54,68.13,68.13,0,0,1,45.47-47.32l.15,0c0-1,.07-2,.07-3A64,64,0,0,0,102.38,17.62Z" opacity="0.2"/><path d="M172,72a76.45,76.45,0,0,0-12.36,1A71.93,71.93,0,0,0,104.17,9.83a8,8,0,0,0-9.59,9.58A56.05,56.05,0,0,1,40,88a56.45,56.45,0,0,1-12.59-1.42,8,8,0,0,0-9.59,9.59,72.22,72.22,0,0,0,32.29,45.06A52,52,0,0,0,92,224h80a76,76,0,0,0,0-152ZM37.37,104c.87,0,1.75,0,2.63,0a72.08,72.08,0,0,0,72-72c0-.89,0-1.78,0-2.67a55.63,55.63,0,0,1,32,48,76.28,76.28,0,0,0-43,43.4A52,52,0,0,0,62,129.59,56.22,56.22,0,0,1,37.37,104ZM172,208H92a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,172,208Z"/></svg>`;
}
