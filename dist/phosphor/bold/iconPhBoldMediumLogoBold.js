export const iconPhBoldMediumLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M68,60a68,68,0,1,0,68,68A68.07,68.07,0,0,0,68,60Zm0,112a44,44,0,1,1,44-44A44.05,44.05,0,0,1,68,172ZM184,60c-23.63,0-36,34.21-36,68s12.37,68,36,68,36-34.21,36-68S207.63,60,184,60Zm0,111.87c-3.74-2.16-12-17.09-12-43.87s8.26-41.71,12-43.87c3.74,2.16,12,17.09,12,43.87S187.74,169.71,184,171.87ZM256,72V184a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Z"/></svg>`;
}
