export const iconPhLightSpeakerSimpleSlashLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M194,152V104a6,6,0,0,1,12,0v48a6,6,0,0,1-12,0Zm38-70a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,232,82ZM220.44,212a6,6,0,0,1-8.88,8.08L166,169.92V224a6,6,0,0,1-9.68,4.74L85.94,174H40a14,14,0,0,1-14-14V96A14,14,0,0,1,40,82H86.07L51.56,44A6,6,0,0,1,60.44,36ZM154,156.72,97,94H40a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H88a6,6,0,0,1,3.68,1.26L154,211.73Zm-30.17-89L154,44.27v62.56a6,6,0,0,0,12,0V32a6,6,0,0,0-9.68-4.74l-39.85,31a6,6,0,1,0,7.36,9.47Z"/></svg>`;
}
