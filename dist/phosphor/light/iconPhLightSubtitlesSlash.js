export const iconPhLightSubtitlesSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,43.56,44L49,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H190.8l12.76,14a6,6,0,0,0,8.88-8.08ZM32,194a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H59.89l61.82,68H104a6,6,0,0,0,0,12h28.62l18.18,20H56a6,6,0,0,0,0,12H161.71l18.18,20Zm18-58a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H56A6,6,0,0,1,50,136ZM238,64V194.83a6,6,0,1,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H224A14,14,0,0,1,238,64Zm-59.48,78a6,6,0,1,1,0-12H200a6,6,0,0,1,0,12Z"/></svg>`;
}
