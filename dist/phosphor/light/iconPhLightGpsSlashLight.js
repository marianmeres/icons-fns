export const iconPhLightGpsSlashLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,128a6,6,0,0,1-6,6H213.79a85.2,85.2,0,0,1-7.3,29.2,6,6,0,0,1-5.48,3.55,5.91,5.91,0,0,1-2.45-.53,6,6,0,0,1-3-7.93,74.05,74.05,0,0,0-91.28-100.4,6,6,0,0,1-3.84-11.37A85.64,85.64,0,0,1,122,42.22V16a6,6,0,0,1,12,0V42.23A86.12,86.12,0,0,1,213.77,122H240A6,6,0,0,1,246,128Zm-33.56,84a6,6,0,0,1-8.88,8.08l-22.3-24.54A85.73,85.73,0,0,1,134,213.77V240a6,6,0,0,1-12,0V213.77A86.12,86.12,0,0,1,42.23,134H16a6,6,0,0,1,0-12H42.22A86.23,86.23,0,0,1,65.86,68.56L43.56,44A6,6,0,0,1,52.44,36ZM173.17,186.6,74,77.48A74,74,0,0,0,173.17,186.6Z"/></svg>`;
}
