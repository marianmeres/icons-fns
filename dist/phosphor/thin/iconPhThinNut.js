export const iconPhThinNut = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm93.76-94.34-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18h0A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM220,175.82a4,4,0,0,1-2.08,3.5l-88,48.18a4,4,0,0,1-3.84,0l-88-48.17A4,4,0,0,1,36,175.82V80.18a4,4,0,0,1,2.08-3.5l88-48.18a3.94,3.94,0,0,1,3.84,0l88,48.18a4,4,0,0,1,2.08,3.5Z"/></svg>`;
}
