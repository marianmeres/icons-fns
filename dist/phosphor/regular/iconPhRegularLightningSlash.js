export const iconPhRegularLightningSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-39.18,42a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l30.12-32.27,60.78,66.86ZM108.66,71a8,8,0,0,1-.39-11.31l45.88-49.16a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95l-22.3,23.89a8,8,0,0,1-11.7-10.91L194,123.29l-52.8-19.8a8,8,0,0,1-5-9.06l10.47-52.38L120,70.62A8,8,0,0,1,108.66,71Z"/></svg>`;
}
