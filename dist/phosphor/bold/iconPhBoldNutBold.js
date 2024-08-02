export const iconPhBoldNutBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,128a52,52,0,1,0,52-52A52.05,52.05,0,0,0,76,128Zm80,0a28,28,0,1,1-28-28A28,28,0,0,1,156,128Zm69.6-65.36-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17h0A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM212,173.44l-84,46-84-46V82.56l84-46,84,46Z"/></svg>`;
}
