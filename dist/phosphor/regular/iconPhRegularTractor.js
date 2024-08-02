export const iconPhRegularTractor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,165.41V134a15.89,15.89,0,0,0-11.4-15.32l-.21-.06L192,108.71V72a8,8,0,0,0-16,0v32.38l-24-6.5V56h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V88H40a8,8,0,0,0,0,16H68a68.07,68.07,0,0,1,68,68v12a8,8,0,0,0,8,8h32.23A36,36,0,1,0,240,165.41ZM68,88H64V56h72v66.77A83.92,83.92,0,0,0,68,88Zm84,26.45L224,134v20.1A36,36,0,0,0,178.06,176H152ZM212,208a20,20,0,1,1,20-20A20,20,0,0,1,212,208ZM68,120a52,52,0,1,0,52,52A52.06,52.06,0,0,0,68,120Zm0,88a36,36,0,1,1,36-36A36,36,0,0,1,68,208Zm12-36a12,12,0,1,1-12-12A12,12,0,0,1,80,172Z"/></svg>`;
}
