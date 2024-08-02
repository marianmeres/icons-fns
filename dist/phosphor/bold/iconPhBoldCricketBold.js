export const iconPhBoldCricketBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246.15,78.54,193.46,25.85a20,20,0,0,0-28.28,0L57.86,133.17a20,20,0,0,0,0,28.28l17.86,17.86-44.2,44.2a12,12,0,0,0,17,17l44.2-44.21,17.86,17.86a20,20,0,0,0,28.28,0L246.15,106.82A20,20,0,0,0,246.15,78.54ZM124.69,194.34l-15-15,26.83-26.83a12,12,0,0,0-17-17L92.69,162.34l-15-15L109,116h47v47ZM180,139V104a12,12,0,0,0-12-12H133l46.34-46.34,47,47ZM60,92A32,32,0,1,0,28,60,32,32,0,0,0,60,92Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,60,52Z"/></svg>`;
}
