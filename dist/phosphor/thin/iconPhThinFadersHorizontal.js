export const iconPhThinFadersHorizontal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,80a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H184A4,4,0,0,1,180,80ZM40,84H148v20a4,4,0,0,0,8,0V56a4,4,0,0,0-8,0V76H40a4,4,0,0,0,0,8Zm176,88H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8ZM88,148a4,4,0,0,0-4,4v20H40a4,4,0,0,0,0,8H84v20a4,4,0,0,0,8,0V152A4,4,0,0,0,88,148Z"/></svg>`;
}
