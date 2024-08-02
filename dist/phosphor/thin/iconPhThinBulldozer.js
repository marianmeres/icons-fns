export const iconPhThinBulldozer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,204h-8a12,12,0,0,1-12-12V160a12,12,0,0,1,12-12h8a4,4,0,0,0,0-8h-8a20,20,0,0,0-20,20v12H195.77a36.06,36.06,0,0,0-33.06-31.89l-37-88.73A12,12,0,0,0,114.67,44H24A12,12,0,0,0,12,56v97.41A36,36,0,0,0,40,212H160a36,36,0,0,0,35.77-32H220v12a20,20,0,0,0,20,20h8a4,4,0,0,0,0-8ZM118.36,54.46,154,140H60V52h54.67A4,4,0,0,1,118.36,54.46ZM24,52H52v88H40a35.76,35.76,0,0,0-20,6.08V56A4,4,0,0,1,24,52ZM160,204H40a28,28,0,0,1,0-56H160a28,28,0,0,1,0,56Zm4-28a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H160A4,4,0,0,1,164,176Z"/></svg>`;
}
