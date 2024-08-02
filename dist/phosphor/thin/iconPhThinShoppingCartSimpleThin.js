export const iconPhThinShoppingCartSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.18,69.58A4,4,0,0,0,232,68H54.15L43.85,30.93A4,4,0,0,0,40,28H16a4,4,0,0,0,0,8H37L72.89,165.35A20.06,20.06,0,0,0,92.16,180H191a20.06,20.06,0,0,0,19.27-14.65l25.63-92.28A4,4,0,0,0,235.18,69.58Zm-32.67,93.63A12,12,0,0,1,191,172H92.16a12,12,0,0,1-11.56-8.79L56.37,76H226.74ZM100,216a12,12,0,1,1-12-12A12,12,0,0,1,100,216Zm104,0a12,12,0,1,1-12-12A12,12,0,0,1,204,216Z"/></svg>`;
}
