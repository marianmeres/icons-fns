export const iconPhLightCactusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,210H166V182h6a66.08,66.08,0,0,0,66-66,26,26,0,0,0-52,0,14,14,0,0,1-14,14h-6V56a38,38,0,0,0-76,0V90H84A14,14,0,0,1,70,76a26,26,0,0,0-52,0,66.08,66.08,0,0,0,66,66h6v68H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM96,130H84A54.06,54.06,0,0,1,30,76a14,14,0,0,1,28,0,26,26,0,0,0,26,26H96a6,6,0,0,0,6-6V56a26,26,0,0,1,52,0v80a6,6,0,0,0,6,6h12a26,26,0,0,0,26-26,14,14,0,0,1,28,0,54.06,54.06,0,0,1-54,54H160a6,6,0,0,0-6,6v34H102V136A6,6,0,0,0,96,130Z"/></svg>`;
}
