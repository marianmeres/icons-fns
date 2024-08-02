export const iconPhLightEjectSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,200a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,200ZM27.39,150A14,14,0,0,1,29.16,135L110.82,34.2a22.1,22.1,0,0,1,34.36,0L226.84,135a14.09,14.09,0,0,1-10.93,23H40.09A14,14,0,0,1,27.39,150Zm10.83-5.16A2,2,0,0,0,40.09,146H215.91a2,2,0,0,0,1.87-1.18,2,2,0,0,0-.27-2.24L135.86,41.76a10.1,10.1,0,0,0-15.72,0L38.49,142.58A2,2,0,0,0,38.22,144.82Z"/></svg>`;
}
