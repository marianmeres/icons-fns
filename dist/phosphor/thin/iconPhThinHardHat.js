export const iconPhThinHardHat = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,156h-4V136a92.35,92.35,0,0,0-64-87.65V40a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v8.35A92.35,92.35,0,0,0,36,136v20H32a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V168A12,12,0,0,0,224,156Zm-12-20v20H156V56.8A84.33,84.33,0,0,1,212,136ZM112,36h32a4,4,0,0,1,4,4V156H108V40A4,4,0,0,1,112,36ZM44,136a84.33,84.33,0,0,1,56-79.2V156H44Zm184,56a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4Z"/></svg>`;
}
