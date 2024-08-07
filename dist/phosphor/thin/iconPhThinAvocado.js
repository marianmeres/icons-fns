export const iconPhThinAvocado = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,116a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,116Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,196Zm79.22-64L177.43,47.8A52,52,0,0,0,79,46.66h0L49.45,130.17A84,84,0,1,0,207.22,132ZM128,236A76.06,76.06,0,0,1,57,132.92L86.5,49.33a44,44,0,0,1,83.35,1.05l29.82,84.28A76,76,0,0,1,128,236Z"/></svg>`;
}
