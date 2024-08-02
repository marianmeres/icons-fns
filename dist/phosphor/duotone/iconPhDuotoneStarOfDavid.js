export const iconPhDuotoneStarOfDavid = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,128l32,56H160l-32,56L96,184H32l32-56L32,72H96l32-56,32,56h64Z" opacity="0.2"/><path d="M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm9-48L192,111.88,173.79,80Zm-27.42,48-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0ZM128,32.12,146.22,64H109.77ZM45.78,80H82.19L64,111.88Zm0,95.92L64,144.12,82.19,176ZM128,223.88,109.77,192h36.45ZM173.79,176,192,144.12,210.21,176Z"/></svg>`;
}
