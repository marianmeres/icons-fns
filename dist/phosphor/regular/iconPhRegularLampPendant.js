export const iconPhRegularLampPendant = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208ZM32.33,168A95.79,95.79,0,0,1,91.08,87.35,8,8,0,0,0,96,80V72h64v8a8,8,0,0,0,4.92,7.38A95.79,95.79,0,0,1,223.67,168Z"/></svg>`;
}
