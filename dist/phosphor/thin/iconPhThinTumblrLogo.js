export const iconPhThinTumblrLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,116a4,4,0,0,0,4-4V72a4,4,0,0,0-4-4H148V24a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4A44.05,44.05,0,0,1,64,68a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H92v60a60.07,60.07,0,0,0,60,60h40a4,4,0,0,0,4-4V184a4,4,0,0,0-4-4H160a12,12,0,0,1-12-12V116Zm-32,72h28v40H152a52.06,52.06,0,0,1-52-52V112a4,4,0,0,0-4-4H68V75.85A52.09,52.09,0,0,0,115.85,28H140V72a4,4,0,0,0,4,4h44v32H144a4,4,0,0,0-4,4v56A20,20,0,0,0,160,188Z"/></svg>`;
}
