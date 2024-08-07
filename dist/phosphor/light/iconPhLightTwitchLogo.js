export const iconPhLightTwitchLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V192a14,14,0,0,0,14,14H66v34a6,6,0,0,0,9.84,4.61L122.17,206H165.1a14,14,0,0,0,9-3.25L217,167a14,14,0,0,0,5-10.76V48A14,14,0,0,0,208,34Zm2,122.25a2,2,0,0,1-.72,1.54l-42.9,35.75a2,2,0,0,1-1.28.46H120a6,6,0,0,0-3.84,1.39L78,227.19V200a6,6,0,0,0-6-6H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM174,88v48a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm-48,0v48a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Z"/></svg>`;
}
