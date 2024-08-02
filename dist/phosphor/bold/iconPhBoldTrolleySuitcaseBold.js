export const iconPhBoldTrolleySuitcaseBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M96,156H216a20,20,0,0,0,20-20V76a20,20,0,0,0-20-20H192V40a20,20,0,0,0-20-20H140a20,20,0,0,0-20,20V56H96A20,20,0,0,0,76,76v60A20,20,0,0,0,96,156ZM144,44h24V56H144ZM100,80H212v52H100ZM92,224a20,20,0,1,1-20-20A20,20,0,0,1,92,224Zm144,0a20,20,0,1,1-20-20A20,20,0,0,1,236,224Zm16-44a12,12,0,0,1-12,12H32a12,12,0,0,1,0-24h4V77L15.51,56.49a12,12,0,0,1,17-17L54.14,61.17A19.86,19.86,0,0,1,60,75.31V168H240A12,12,0,0,1,252,180Z"/></svg>`;
}
