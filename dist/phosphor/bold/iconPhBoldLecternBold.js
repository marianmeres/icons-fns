export const iconPhBoldLecternBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M249.87,119.06l-40-80A19.89,19.89,0,0,0,192,28H64A19.89,19.89,0,0,0,46.13,39.06l-40,80A20,20,0,0,0,24,148h92v56H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V148h92a20,20,0,0,0,17.89-28.94ZM30.49,124l36-72h123l36,72ZM192,100a12,12,0,0,1-12,12H76a12,12,0,0,1,0-24H180A12,12,0,0,1,192,100Z"/></svg>`;
}
