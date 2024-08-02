export const iconPhLightChatCircleSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,43.56,44L55.07,56.7a102,102,0,0,0-16.72,120L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,0,0,192,207.37L203.56,220a6,6,0,0,0,8.88-8.08ZM128,218a90,90,0,0,1-45.06-12.08,6,6,0,0,0-4.91-.5L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,0,1,63.16,65.6L184,198.47A89.74,89.74,0,0,1,128,218Zm102-90a102.25,102.25,0,0,1-12.14,48.31,6,6,0,0,1-5.29,3.15,6,6,0,0,1-5.28-8.84A90.05,90.05,0,0,0,93.1,45,6,6,0,0,1,88.45,34,102.06,102.06,0,0,1,230,128Z"/></svg>`;
}
