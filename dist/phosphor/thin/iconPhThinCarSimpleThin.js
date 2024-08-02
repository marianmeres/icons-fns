export const iconPhThinCarSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,108H226.6L197.77,43.13a12,12,0,0,0-11-7.13H69.2a12,12,0,0,0-11,7.13L29.4,108H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V180H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V116h12a4,4,0,0,0,0-8ZM65.54,46.38A4,4,0,0,1,69.2,44H186.8a4,4,0,0,1,3.66,2.38L217.84,108H38.16ZM220,200a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V176a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v24a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V116H220Z"/></svg>`;
}
