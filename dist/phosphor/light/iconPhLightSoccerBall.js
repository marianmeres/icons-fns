export const iconPhLightSoccerBall = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm77.67,147.42H169.89L159.41,159l13.29-38.72,17-5.51,27.94,21.43A89.38,89.38,0,0,1,205.67,173.42Zm-119.56,0H50.33A89.38,89.38,0,0,1,38.38,136.2l27.94-21.43,17,5.51L96.59,159ZM51,81.42l7.24,24.41-20,15.34A89.47,89.47,0,0,1,51,81.42ZM107.56,154,95.15,117.86,128,95.28l32.85,22.58L148.44,154Zm90.19-48.17L205,81.42a89.47,89.47,0,0,1,12.75,39.75Zm-1.66-36.62L186,103.35l-17,5.53-35-24V67.16l30.9-21.24A90.3,90.3,0,0,1,196.09,69.21ZM150.92,41,128,56.72,105.08,41a90.22,90.22,0,0,1,45.84,0ZM91.11,45.91,122,67.16V84.84l-35,24-17-5.53L59.91,69.21A90.4,90.4,0,0,1,91.11,45.91ZM58.75,185.42H84.93l9.19,26A90.37,90.37,0,0,1,58.75,185.42Zm49.68,30.43L95.88,180.39,106.34,166h43.32l10.46,14.39-12.55,35.46a90.14,90.14,0,0,1-39.14,0Zm53.45-4.48,9.19-26h26.18A90.37,90.37,0,0,1,161.88,211.37Z"/></svg>`;
}
