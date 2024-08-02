export const iconPhThinVanThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M251,109.4,205.47,56.3a12,12,0,0,0-9.21-4.3H32A12,12,0,0,0,20,64V176a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V112A4,4,0,0,0,251,109.4ZM199.36,61.47,239.3,108H172V60h24.26A4,4,0,0,1,199.36,61.47ZM100,108V60h64v48ZM32,60H92v48H28V64A4,4,0,0,1,32,60ZM80,204a20,20,0,1,1,20-20A20,20,0,0,1,80,204Zm112,0a20,20,0,1,1,20-20A20,20,0,0,1,192,204Zm48-24H219.71a28,28,0,0,0-55.42,0H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V116H244v60A4,4,0,0,1,240,180Z"/></svg>`;
}
