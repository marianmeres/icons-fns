export const iconPhThinHockey = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,156H129.05l-94-110.59A4,4,0,1,0,29,50.59L162.56,207.77A12,12,0,0,0,171.7,212H224a12,12,0,0,0,12-12V168A12,12,0,0,0,224,156Zm-55.35,46.59L135.85,164H196v40H171.7A4,4,0,0,1,168.65,202.59ZM228,200a4,4,0,0,1-4,4H204V164h20a4,4,0,0,1,4,4ZM104,183.06l-16.6,19.53a4,4,0,0,1-3,1.41H60V164H85.2a4,4,0,0,0,0-8H32a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H84.3a12,12,0,0,0,9.14-4.23l16.61-19.53a4,4,0,0,0-6.1-5.18ZM28,200V168a4,4,0,0,1,4-4H52v40H32A4,4,0,0,1,28,200Zm125.41-68.95a4,4,0,0,1-.46-5.64l68-80a4,4,0,1,1,6.1,5.18l-68,80a4,4,0,0,1-5.64.46Z"/></svg>`;
}
