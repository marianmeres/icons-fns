export const iconPhFillApplePodcastsLogoFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M159.8,151.82a19.67,19.67,0,0,1,3.58,17.05l-12.18,48A20.17,20.17,0,0,1,131.56,232h-7.12a20.17,20.17,0,0,1-19.64-15.13l-12.18-48a19.67,19.67,0,0,1,3.58-17.05,20.17,20.17,0,0,1,16-7.82h31.5A20.17,20.17,0,0,1,159.8,151.82ZM156,116a28,28,0,1,0-28,28A28,28,0,0,0,156,116Zm26,27a8,8,0,1,0,15.41,4.29,72,72,0,1,0-138.74,0A8,8,0,0,0,74,143,56,56,0,1,1,182,143ZM128,24A104,104,0,0,0,70.18,214.46a8,8,0,1,0,8.9-13.3,88,88,0,1,1,97.84,0,8,8,0,0,0,8.9,13.3A104,104,0,0,0,128,24Z"/></svg>`;
}
