export const iconPhLightFunnelSimpleXLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,142H64a6,6,0,0,1,0-12H192a6,6,0,0,1,0,12Zm40-60H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM128,178H104a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm92.24-6.24a6,6,0,0,0-8.48,0L192,191.51l-19.76-19.75a6,6,0,0,0-8.48,8.48L183.51,200l-19.75,19.76a6,6,0,1,0,8.48,8.48L192,208.49l19.76,19.75a6,6,0,0,0,8.48-8.48L200.49,200l19.75-19.76A6,6,0,0,0,220.24,171.76Z"/></svg>`;
}
