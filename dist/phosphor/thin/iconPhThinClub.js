export const iconPhThinClub = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,92a52.88,52.88,0,0,0-8.26.65,52,52,0,1,0-95.48,0A52.88,52.88,0,0,0,72,92a52,52,0,1,0,31.38,93.48L92.17,222.85A4,4,0,0,0,96,228h64a4,4,0,0,0,3.83-5.15l-11.21-37.37A52,52,0,1,0,184,92Zm0,96a43.92,43.92,0,0,1-36.73-19.77,4,4,0,0,0-7.17,3.36L154.62,220H101.38l14.52-48.41a4,4,0,0,0-7.17-3.36,44,44,0,1,1-21.91-65.67,4,4,0,0,0,4.66-6,44,44,0,1,1,73,0,4,4,0,0,0,4.66,6A44,44,0,1,1,184,188Z"/></svg>`;
}
