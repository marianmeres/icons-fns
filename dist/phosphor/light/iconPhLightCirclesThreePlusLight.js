export const iconPhLightCirclesThreePlusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M80,42a38,38,0,1,0,38,38A38,38,0,0,0,80,42Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,106Zm96,12a38,38,0,1,0-38-38A38,38,0,0,0,176,118Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,176,54ZM80,138a38,38,0,1,0,38,38A38,38,0,0,0,80,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,202Zm134-26a6,6,0,0,1-6,6H182v26a6,6,0,0,1-12,0V182H144a6,6,0,0,1,0-12h26V144a6,6,0,0,1,12,0v26h26A6,6,0,0,1,214,176Z"/></svg>`;
}
