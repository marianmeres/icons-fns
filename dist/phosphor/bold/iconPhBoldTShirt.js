export const iconPhBoldTShirt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246.17,57.9,198.09,29.65h0A11.9,11.9,0,0,0,192,28H160a12,12,0,0,0-12,12,20,20,0,0,1-40,0A12,12,0,0,0,96,28H64a11.9,11.9,0,0,0-6.07,1.66h0L9.83,57.9A20.18,20.18,0,0,0,2,84l17.9,36.8A19.62,19.62,0,0,0,37.67,132H52v76a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V132h14.32a19.64,19.64,0,0,0,17.75-11.17L254,84A20.18,20.18,0,0,0,246.17,57.9ZM40.37,108,25.16,76.73,52,61v47ZM180,204H76V52h9.67a44,44,0,0,0,84.68,0H180Zm35.62-96H204V61l26.83,15.76Z"/></svg>`;
}
