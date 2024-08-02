export const iconPhThinHand = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,52a23.9,23.9,0,0,0-16,6.13V44a24,24,0,0,0-47.93-1.8A24,24,0,0,0,84,60v78L72.75,119.94a24,24,0,0,0-41.62,23.92C64.44,214.12,82.17,236,128,236a84.09,84.09,0,0,0,84-84V76A24,24,0,0,0,188,52Zm16,100a76.09,76.09,0,0,1-76,76c-37.29,0-53.59-11.51-89.71-87.71l-.15-.29a16,16,0,0,1,27.71-16,.75.75,0,0,1,.07.12l18.68,30A4,4,0,0,0,92,152V60a16,16,0,0,1,32,0v60a4,4,0,0,0,8,0V44a16,16,0,0,1,32,0v76a4,4,0,0,0,8,0V76a16,16,0,0,1,32,0Z"/></svg>`;
}
