export const iconPhThinFireTruck = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M251.71,118.51l-14-35A12,12,0,0,0,226.58,76H188V64a4,4,0,0,0-8,0V166.71A28.05,28.05,0,0,0,164.29,188H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V136a4,4,0,0,0-8,0v48a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V120A4,4,0,0,0,251.71,118.51ZM226.58,84a4,4,0,0,1,3.72,2.51L242.09,116H188V84ZM80,212a20,20,0,1,1,20-20A20,20,0,0,1,80,212Zm112,0a20,20,0,1,1,20-20A20,20,0,0,1,192,212Zm48-24H219.71A28,28,0,0,0,188,164.29V124h56v60A4,4,0,0,1,240,188ZM24,100a4,4,0,0,0,0,8H152a4,4,0,0,0,0-8H132V68h20a4,4,0,0,0,0-8H24a4,4,0,0,0,0,8H44v32Zm100,0H92V68h32ZM52,68H84v32H52Z"/></svg>`;
}
