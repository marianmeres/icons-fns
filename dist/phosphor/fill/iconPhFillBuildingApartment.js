export const iconPhFillBuildingApartment = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,176H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm64,64H112V168h32Zm-8-64H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm56,96H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/></svg>`;
}
