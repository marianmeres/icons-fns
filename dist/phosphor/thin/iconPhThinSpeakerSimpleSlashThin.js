export const iconPhThinSpeakerSimpleSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,152V104a4,4,0,0,1,8,0v48a4,4,0,0,1-8,0Zm36-68a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,232,84ZM219,213.31a4,4,0,1,1-5.92,5.38l-49-53.94V224a4,4,0,0,1-2.24,3.59A3.92,3.92,0,0,1,160,228a4.07,4.07,0,0,1-2.46-.84L86.63,172H40a12,12,0,0,1-12-12V96A12,12,0,0,1,40,84H90.59L53,42.69A4,4,0,0,1,59,37.31ZM156,156,97.87,92H40a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H88a4.06,4.06,0,0,1,2.46.84l65.54,51Zm-33.39-89.8,33.39-26v66.65a4,4,0,0,0,8,0V32a4,4,0,0,0-6.46-3.16l-39.85,31a4,4,0,1,0,4.92,6.31Z"/></svg>`;
}
