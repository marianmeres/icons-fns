export const iconPhLightBuildingApartment = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,210H230V72a6,6,0,0,0-6-6H182V40a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6V98H32a6,6,0,0,0-6,6V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,110H80a6,6,0,0,0,6-6V46h84V72a6,6,0,0,0,6,6h42V210H150V168a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6v42H38ZM138,210H118V174h20ZM114,72a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,72Zm0,32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,104Zm56,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,104ZM86,136a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H80A6,6,0,0,1,86,136Zm0,32a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H80A6,6,0,0,1,86,168Zm28-32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,136Zm56,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,136Zm0,32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,168Z"/></svg>`;
}
