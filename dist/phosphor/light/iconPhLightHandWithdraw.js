export const iconPhLightHandWithdraw = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,198.65V240a6,6,0,0,1-12,0V198.65a76.83,76.83,0,0,0-28-59.08v62.74a6,6,0,0,1-11,3.28l-10.68-16.3a2.75,2.75,0,0,1-.17-.29,14,14,0,0,0-24.33,13.87L166,236.71a6,6,0,0,1-10,6.58l-22.26-34c-.06-.1-.12-.19-.17-.29A26,26,0,0,1,178,182.14V64a2,2,0,0,0-2-2H160a6,6,0,0,1,0-12h16a14,14,0,0,1,14,14v60.69A88.88,88.88,0,0,1,230,198.65ZM86,56a6,6,0,0,0-6-6H64A14,14,0,0,0,50,64V200a6,6,0,0,0,12,0V64a2,2,0,0,1,2-2H80A6,6,0,0,0,86,56Zm70.24,43.76a6,6,0,0,0-8.48,0L126,121.51V16a6,6,0,0,0-12,0V121.51L92.24,99.76a6,6,0,0,0-8.48,8.48l32,32a6,6,0,0,0,8.48,0l32-32A6,6,0,0,0,156.24,99.76Z"/></svg>`;
}
