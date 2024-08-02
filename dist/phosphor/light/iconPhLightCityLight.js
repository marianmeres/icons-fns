export const iconPhLightCityLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,210H230V88a6,6,0,0,0-6-6H160a6,6,0,0,0-6,6v42H102V40a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM166,94h52V210H166Zm-12,48v68H102V142ZM38,46H90V210H38ZM70,72V88a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm52,16V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm64,0V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm0-48V120a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Z"/></svg>`;
}
