export const iconPhThinCactusThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,212H164V180h8a64.07,64.07,0,0,0,64-64,24,24,0,0,0-48,0,16,16,0,0,1-16,16h-8V56a36,36,0,0,0-72,0V92H84A16,16,0,0,1,68,76a24,24,0,0,0-48,0,64.07,64.07,0,0,0,64,64h8v72H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM96,132H84A56.06,56.06,0,0,1,28,76a16,16,0,0,1,32,0,24,24,0,0,0,24,24H96a4,4,0,0,0,4-4V56a28,28,0,0,1,56,0v80a4,4,0,0,0,4,4h12a24,24,0,0,0,24-24,16,16,0,0,1,32,0,56.06,56.06,0,0,1-56,56H160a4,4,0,0,0-4,4v36H100V136A4,4,0,0,0,96,132Z"/></svg>`;
}
