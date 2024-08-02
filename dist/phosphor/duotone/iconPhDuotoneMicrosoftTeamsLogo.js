export const iconPhDuotoneMicrosoftTeamsLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,80v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h96A8,8,0,0,1,144,80Z" opacity="0.2"/><path d="M80,152V112H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16H96v40a8,8,0,0,1-16,0ZM232,92.74V152a40,40,0,0,1-36.63,39.85,64,64,0,0,1-118.7.15H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96.81a40,40,0,0,1,73.31-28.85A32,32,0,0,1,211.69,80h7.57A12.76,12.76,0,0,1,232,92.74ZM175.6,50.4A39.89,39.89,0,0,1,168,80h16a16,16,0,1,0-8.4-29.6ZM113.38,64H136a16,16,0,0,1,15.07,10.68A24,24,0,1,0,113.38,64ZM40,176h96V80H40Zm144-8V96H152v80a16,16,0,0,1-16,16H94.44A48,48,0,0,0,184,168Zm32-72H200v72a62.76,62.76,0,0,1-.36,6.75A24,24,0,0,0,216,152Z"/></svg>`;
}
