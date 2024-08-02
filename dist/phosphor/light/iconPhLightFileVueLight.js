export const iconPhLightFileVueLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M85.65,154l-20,56a6,6,0,0,1-11.3,0l-20-56a6,6,0,1,1,11.3-4L60,190.16,74.35,150a6,6,0,0,1,11.3,4ZM208,158a6,6,0,0,0,0-12H176a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h32a6,6,0,0,0,0-12H182V186h18a6,6,0,0,0,0-12H182V158Zm-64-12a6,6,0,0,0-6,6v38a12,12,0,0,1-24,0V152a6,6,0,0,0-12,0v38a24,24,0,0,0,48,0V152A6,6,0,0,0,144,146Zm70-58v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-20.48-6L158,46.48V82Z"/></svg>`;
}
