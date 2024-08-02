export const iconPhLightStarOfDavidLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.91,128l30.3-53A6,6,0,0,0,224,66H163.49L133.21,13a6,6,0,0,0-10.42,0L92.5,66H32a6,6,0,0,0-5.21,9l30.28,53L26.79,181A6,6,0,0,0,32,190H92.5l30.29,53a6,6,0,0,0,10.42,0l30.28-53H224a6,6,0,0,0,5.21-9Zm14.75-50L192,115.91,170.34,78Zm-28.57,50-28.56,50-57.07,0L70.9,128,99.46,78l57.07,0ZM128,28.09,149.67,66H106.32ZM42.34,78h43.3L64,115.91Zm0,99.92L64,140.09,85.64,178ZM128,227.91,106.32,190h43.35ZM170.34,178,192,140.09,213.66,178Z"/></svg>`;
}
