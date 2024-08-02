export const iconPhLightBarn = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,194H230V124.32l5.12,7.17a6,6,0,1,0,9.76-7l-40-56a6.14,6.14,0,0,0-1.47-1.45L135.77,20.35a14,14,0,0,0-15.62.06L52.59,67.06a6.14,6.14,0,0,0-1.47,1.45l-40,56a6,6,0,1,0,9.76,7L26,124.32V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,107.52,60.27,76.34l66.62-46a2,2,0,0,1,2.14-.06l66.7,46.06L218,107.52V194H190V120a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v74H38Zm90,45.11L90.72,126h74.56Zm50-21v56.68L138.32,160ZM117.68,160,78,188.34V131.66ZM128,167.37,165.28,194H90.72ZM106,88a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,88Z"/></svg>`;
}
