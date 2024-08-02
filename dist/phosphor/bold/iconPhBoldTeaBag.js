export const iconPhBoldTeaBag = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,156a12,12,0,0,1-12-12V64A60,60,0,0,0,92,64v4H76.53a20.1,20.1,0,0,0-17.15,9.71L38.85,111.92A20.07,20.07,0,0,0,36,122.22V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V122.22a20,20,0,0,0-2.85-10.29L148.62,77.71A20.1,20.1,0,0,0,131.47,68H116V64a36,36,0,0,1,72,0v80a36,36,0,0,0,36,36,12,12,0,0,0,0-24ZM129.21,92,148,123.32V212H60V123.32L78.79,92H92v44a12,12,0,0,0,24,0V92Z"/></svg>`;
}
