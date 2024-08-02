export const iconPhLightFlashlight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,18H72A14,14,0,0,0,58,32V77.33a14,14,0,0,0,2.8,8.4l20.8,27.73a2,2,0,0,1,.4,1.21V224a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V114.67a2,2,0,0,1,.4-1.2l20.8-27.74a14,14,0,0,0,2.8-8.4V32A14,14,0,0,0,184,18ZM72,30H184a2,2,0,0,1,2,2V58H70V32A2,2,0,0,1,72,30ZM185.6,78.53l-20.8,27.74a14,14,0,0,0-2.8,8.4V224a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2V114.67a14,14,0,0,0-2.8-8.4L70.4,78.54a2,2,0,0,1-.4-1.21V70H186v7.33A2,2,0,0,1,185.6,78.53ZM134,120v32a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Z"/></svg>`;
}
