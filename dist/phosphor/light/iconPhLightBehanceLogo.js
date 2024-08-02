export const iconPhLightBehanceLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M112.15,122.36A36,36,0,0,0,90,58H32a6,6,0,0,0-6,6V192a6,6,0,0,0,6,6H94a40,40,0,0,0,18.15-75.64ZM38,70H90a24,24,0,0,1,0,48H38ZM94,186H38V130H94a28,28,0,0,1,0,56ZM162,80a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H168A6,6,0,0,1,162,80Zm38,26a46,46,0,1,0,36.8,73.61,6,6,0,0,0-9.6-7.21A34,34,0,0,1,166.53,158H240a6,6,0,0,0,6-6A46.06,46.06,0,0,0,200,106Zm-33.47,40a34,34,0,0,1,66.94,0Z"/></svg>`;
}
