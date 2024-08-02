export const iconPhThinAirTrafficControl = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.83,73.11A12,12,0,0,0,216,68H132V28h20a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8h20V68H40A12,12,0,0,0,28.72,84.1l26.19,72A12,12,0,0,0,66.18,164H100v68a4,4,0,0,0,8,0V164h40v68a4,4,0,0,0,8,0V164h33.82a12,12,0,0,0,11.27-7.9l26.19-72A12,12,0,0,0,225.83,73.11ZM107.34,156,92.79,76h70.42l-14.55,80Zm-44.92-2.63-26.18-72A4,4,0,0,1,40,76H84.66L99.2,156h-33A4,4,0,0,1,62.42,153.37Zm157.34-72-26.18,72a4,4,0,0,1-3.76,2.63h-33l14.55-80H216a4,4,0,0,1,3.76,5.37Z"/></svg>`;
}
