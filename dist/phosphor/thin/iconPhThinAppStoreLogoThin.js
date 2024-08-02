export const iconPhThinAppStoreLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M60.9,194l-9.46,16A4,4,0,1,1,44.56,206L54,190A4,4,0,0,1,60.9,194ZM232,156H181.92L150,102a4,4,0,1,0-6.89,4.07L204.56,210a4,4,0,1,0,6.88-4.07l-24.79-42H232a4,4,0,0,0,0-8Zm-89.53,0H83.37L155.44,34A4,4,0,1,0,148.56,30L128,64.75,107.44,30A4,4,0,1,0,100.56,34l22.79,38.58L74.08,156H24a4,4,0,0,0,0,8H142.47a4,4,0,1,0,0-8Z"/></svg>`;
}
