export const iconPhLightFirstAid = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,90H166V40a14,14,0,0,0-14-14H104A14,14,0,0,0,90,40V90H40a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14H90v50a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V166h50a14,14,0,0,0,14-14V104A14,14,0,0,0,216,90Zm2,62a2,2,0,0,1-2,2H160a6,6,0,0,0-6,6v56a2,2,0,0,1-2,2H104a2,2,0,0,1-2-2V160a6,6,0,0,0-6-6H40a2,2,0,0,1-2-2V104a2,2,0,0,1,2-2H96a6,6,0,0,0,6-6V40a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2V96a6,6,0,0,0,6,6h56a2,2,0,0,1,2,2Z"/></svg>`;
}
