export const iconPhLightGitCommitLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,122H181.66a54,54,0,0,0-107.32,0H8a6,6,0,0,0,0,12H74.34a54,54,0,0,0,107.32,0H248a6,6,0,0,0,0-12ZM128,170a42,42,0,1,1,42-42A42,42,0,0,1,128,170Z"/></svg>`;
}
