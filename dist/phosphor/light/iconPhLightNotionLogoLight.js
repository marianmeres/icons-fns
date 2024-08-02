export const iconPhLightNotionLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,42H168a6,6,0,0,0,0,12h18V184.64L109.26,45.11A6,6,0,0,0,104,42H40a6,6,0,0,0,0,12H58V202H40a6,6,0,0,0,0,12H88a6,6,0,0,0,0-12H70V71.36l76.74,139.53A6,6,0,0,0,152,214h40a6,6,0,0,0,6-6V54h18a6,6,0,0,0,0-12ZM74.15,54h26.3l81.4,148h-26.3Z"/></svg>`;
}
