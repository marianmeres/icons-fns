export const iconPhLightJeepLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,90H228.85l-9.63-44.93A14.06,14.06,0,0,0,205.53,34H50.47A14.06,14.06,0,0,0,36.78,45.07L27.15,90H16a6,6,0,0,0,0,12H26v98a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V174H178v26a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V102h10a6,6,0,0,0,0-12ZM48.51,47.58a2,2,0,0,1,2-1.58H205.53a2,2,0,0,1,2,1.58L216.58,90H39.42ZM66,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V174H66Zm150,2H192a2,2,0,0,1-2-2V174h28v26A2,2,0,0,1,216,202Zm2-40H150V128a6,6,0,0,0-12,0v34H118V128a6,6,0,0,0-12,0v34H38V102H218ZM58,132a10,10,0,1,1,10,10A10,10,0,0,1,58,132Zm120,0a10,10,0,1,1,10,10A10,10,0,0,1,178,132Z"/></svg>`;
}
