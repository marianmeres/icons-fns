export const iconPhLightSubwayLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,96V208a6,6,0,0,1-12,0V96a58.07,58.07,0,0,0-58-58H104A58.07,58.07,0,0,0,46,96V208a6,6,0,0,1-12,0V96a70.08,70.08,0,0,1,70-70h48A70.08,70.08,0,0,1,222,96Zm-40,0v72a22,22,0,0,1-20.33,21.93l3.7,7.39a6,6,0,0,1-10.74,5.36L148.29,190H107.71l-6.34,12.68a6,6,0,1,1-10.74-5.36l3.7-7.39A22,22,0,0,1,74,168V96A22,22,0,0,1,96,74h64A22,22,0,0,1,182,96ZM86,96v50h84V96a10,10,0,0,0-10-10H96A10,10,0,0,0,86,96Zm32,62v20h20V158ZM96,178h10V158H86v10A10,10,0,0,0,96,178Zm74-10V158H150v20h10A10,10,0,0,0,170,168Z"/></svg>`;
}
