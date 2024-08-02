export const iconPhLightPokerChip = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,152a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178Zm39.37-97.86A61.68,61.68,0,0,0,134,66.3V38.2a89.64,89.64,0,0,1,53.22,22.09ZM122,66.3A61.68,61.68,0,0,0,88.63,80.14L68.78,60.29A89.64,89.64,0,0,1,122,38.2ZM80.14,88.63A61.68,61.68,0,0,0,66.3,122H38.2A89.61,89.61,0,0,1,60.29,68.78ZM66.3,134a61.68,61.68,0,0,0,13.84,33.37L60.29,187.22A89.61,89.61,0,0,1,38.2,134Zm22.33,41.86A61.68,61.68,0,0,0,122,189.7v28.1a89.64,89.64,0,0,1-53.22-22.09ZM134,189.7a61.68,61.68,0,0,0,33.37-13.84l19.85,19.85A89.64,89.64,0,0,1,134,217.8Zm41.86-22.33A61.68,61.68,0,0,0,189.7,134h28.1a89.61,89.61,0,0,1-22.09,53.22ZM189.7,122a61.68,61.68,0,0,0-13.84-33.37l19.85-19.85A89.61,89.61,0,0,1,217.8,122Z"/></svg>`;
}
