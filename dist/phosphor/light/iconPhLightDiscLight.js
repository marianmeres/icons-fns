export const iconPhLightDiscLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm37.52,96a37.79,37.79,0,0,0-6.76-16.27l37-36.95A89.61,89.61,0,0,1,217.8,122ZM154,128a26,26,0,1,1-26-26A26,26,0,0,1,154,128Zm-26,90A90,90,0,1,1,187.22,60.29L150.27,97.24A38,38,0,1,0,165.52,134H217.8A90.12,90.12,0,0,1,128,218Z"/></svg>`;
}
