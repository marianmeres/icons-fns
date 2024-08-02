export const iconPhLightSynagogue = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M206,58.84V32a6,6,0,0,0-12,0V58.84A22,22,0,0,0,178,80v45.66l-44-25.14V72a6,6,0,0,0-12,0v28.52L78,125.66V80A22,22,0,0,0,62,58.84V32a6,6,0,0,0-12,0V58.84A22,22,0,0,0,34,80V216a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V176a10,10,0,0,1,20,0v40a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V80A22,22,0,0,0,206,58.84ZM200,70a10,10,0,0,1,10,10v26H190V80A10,10,0,0,1,200,70ZM56,70A10,10,0,0,1,66,80v26H46V80A10,10,0,0,1,56,70ZM46,118H66v92H46Zm82,36a22,22,0,0,0-22,22v34H78V139.48l50-28.57,50,28.57V210H150V176A22,22,0,0,0,128,154Zm62,56V118h20v92Z"/></svg>`;
}
