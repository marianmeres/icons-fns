export const iconPhThinCookingPotThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,48V16a4,4,0,0,1,8,0V48a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V16a4,4,0,0,0-8,0V48A4,4,0,0,0,128,52Zm32,0a4,4,0,0,0,4-4V16a4,4,0,0,0-8,0V48A4,4,0,0,0,160,52Zm90.4,47.2L220,122v62a28,28,0,0,1-28,28H64a28,28,0,0,1-28-28V122L5.6,99.2a4,4,0,0,1,4.8-6.4L36,112V80a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v32l25.6-19.2a4,4,0,1,1,4.8,6.4ZM212,84H44V184a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20Z"/></svg>`;
}
