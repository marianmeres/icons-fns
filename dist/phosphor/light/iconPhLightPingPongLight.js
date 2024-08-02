export const iconPhLightPingPongLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238,196.2A14,14,0,0,0,232.14,186l-39.93-28.52,18.62-18.62a37.65,37.65,0,0,0,10.46-34A97.43,97.43,0,0,0,186.6,48.12a99.82,99.82,0,0,0-64-22.11A98.29,98.29,0,0,0,26,122.61a100.09,100.09,0,0,0,22.11,64,97.4,97.4,0,0,0,56.72,34.69,37.65,37.65,0,0,0,34-10.46l18.62-18.62L186,232.14A14,14,0,0,0,196.2,238c.39,0,.78.05,1.16.05a14,14,0,0,0,9.89-4.1l26.65-26.64A14,14,0,0,0,238,196.2ZM57.47,179.08A88.12,88.12,0,0,1,38,122.77,86.29,86.29,0,0,1,122.77,38a88.21,88.21,0,0,1,56.31,19.46,87.3,87.3,0,0,1,20,22.93L80.4,199.12A87.14,87.14,0,0,1,57.47,179.08Zm167.94,19.69-26.64,26.64a2,2,0,0,1-3-.25l-32.64-45.69A6,6,0,0,0,158.7,177l-.49,0a6,6,0,0,0-4.24,1.76l-23.63,23.62h0a25.69,25.69,0,0,1-23.17,7.17,82,82,0,0,1-15.49-4.72L204.8,91.68a82.19,82.19,0,0,1,4.72,15.49,25.67,25.67,0,0,1-7.18,23.17L178.72,154a6,6,0,0,0,.75,9.12l45.69,32.64a2,2,0,0,1,.25,3Z"/></svg>`;
}