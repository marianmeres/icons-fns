export const iconPhThinTruckThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M251.71,118.52l-14-35A12,12,0,0,0,226.58,76H188V64a4,4,0,0,0-4-4H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V120A4,4,0,0,0,251.71,118.52ZM188,84h38.58a4,4,0,0,1,3.72,2.51L242.09,116H188ZM28,72a4,4,0,0,1,4-4H180v72H28ZM80,212a20,20,0,1,1,20-20A20,20,0,0,1,80,212Zm84.29-24H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V148H180v18.71A28.05,28.05,0,0,0,164.29,188ZM192,212a20,20,0,1,1,20-20A20,20,0,0,1,192,212Zm52-28a4,4,0,0,1-4,4H219.71A28,28,0,0,0,188,164.29V124h56Z"/></svg>`;
}
