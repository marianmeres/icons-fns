export const iconPhBoldPersonSimpleTaiChiBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,84A36,36,0,1,0,92,48,36,36,0,0,0,128,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,128,36Zm100,72a12,12,0,0,1-12,12H140v16.09L188.73,157A12,12,0,0,1,196,168v48a12,12,0,0,1-24,0V175.91l-41.67-17.86L56,224.92A12,12,0,0,1,40,207.08l76-68.42V120H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,108Z"/></svg>`;
}
