export const iconPhLightPrescription = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180.49,188l23.75-23.76a6,6,0,0,0-8.48-8.48L172,179.51l-45.58-45.57A50,50,0,0,0,124,34H72a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V134h31.51l54,54-23.75,23.76a6,6,0,1,0,8.48,8.48L172,196.49l23.76,23.75a6,6,0,0,0,8.48-8.48ZM78,46h46a38,38,0,0,1,0,76H78Z"/></svg>`;
}
