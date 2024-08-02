export const iconPhThinWaveSineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.62,129.7C214.4,174.93,196.1,196,178,196c-22.56,0-37.67-32.21-53.66-66.3C110.15,99.37,95.44,68,78,68c-14.2,0-31.13,20.76-50.34,61.7a4,4,0,0,1-7.24-3.4C41.6,81.07,59.9,60,78,60c22.56,0,37.67,32.21,53.66,66.3C145.85,156.63,160.56,188,178,188c14.2,0,31.13-20.76,50.34-61.7a4,4,0,0,1,7.24,3.4Z"/></svg>`;
}
