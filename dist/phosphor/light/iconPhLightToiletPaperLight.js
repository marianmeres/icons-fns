export const iconPhLightToiletPaperLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M74,120a10,10,0,1,1-10-10A10,10,0,0,1,74,120Zm164,0v88a14,14,0,0,1-14,14H112a14,14,0,0,1-14-14V178.48C89.65,195.49,77.6,206,64,206c-25.79,0-46-37.78-46-86S38.21,34,64,34H192C217.79,34,238,71.78,238,120ZM98,120c0-44.26-17.58-74-34-74S30,75.74,30,120s17.58,74,34,74S98,164.27,98,120Zm128,88V126H208a6,6,0,0,1,0-12h17.88C224.37,73.08,207.67,46,192,46H87.76c12.57,13.92,21.09,38.74,22.12,68H128a6,6,0,0,1,0,12H110v82a2,2,0,0,0,2,2H224A2,2,0,0,0,226,208Zm-50-94H160a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Z"/></svg>`;
}
