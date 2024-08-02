export const iconPhThinHashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,92H170.61l9.33-51.28a4,4,0,1,0-7.88-1.44L162.48,92H106.61l9.33-51.28a4,4,0,1,0-7.88-1.44L98.48,92H48a4,4,0,0,0,0,8H97L86.84,156H32a4,4,0,0,0,0,8H85.39l-9.33,51.28a4,4,0,0,0,3.22,4.65A3.65,3.65,0,0,0,80,220a4,4,0,0,0,3.94-3.29L93.52,164h55.87l-9.33,51.28a4,4,0,0,0,3.22,4.65,3.65,3.65,0,0,0,.72.07,4,4,0,0,0,3.94-3.29L157.52,164H208a4,4,0,0,0,0-8H159l10.19-56H224a4,4,0,0,0,0-8Zm-73.16,64H95l10.19-56H161Z"/></svg>`;
}
