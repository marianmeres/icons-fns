export const iconPhLightShirtFoldedLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,42H178.48L164.25,27.76A6,6,0,0,0,160,26H96a6,6,0,0,0-4.25,1.76L77.52,42H56A14,14,0,0,0,42,56V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM128,69.18,107.21,38h41.58Zm32.93-27.76L170,50.49V104a2,2,0,0,1-3.25,1.56L135.93,78.92ZM86,50.49l9.07-9.07,25,37.5L89.25,105.54A2,2,0,0,1,86,104ZM54,208V56a2,2,0,0,1,2-2H74v50a13.87,13.87,0,0,0,8.06,12.68A14.11,14.11,0,0,0,88,118,13.87,13.87,0,0,0,97,114.74l.08-.07,25-21.56V210H56A2,2,0,0,1,54,208Zm148,0a2,2,0,0,1-2,2H134V93.11l25,21.56.08.07A13.87,13.87,0,0,0,168,118a14.08,14.08,0,0,0,6-1.35A13.87,13.87,0,0,0,182,104V54h18a2,2,0,0,1,2,2Z"/></svg>`;
}
