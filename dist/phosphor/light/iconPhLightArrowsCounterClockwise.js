export const iconPhLightArrowsCounterClockwise = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,102H40a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V81.52l18-18a93.45,93.45,0,0,1,66-27.53h.52A93.39,93.39,0,0,1,196.19,62.7a6,6,0,0,1-8.38,8.58A82,82,0,0,0,72.53,72L54.48,90H88a6,6,0,0,1,0,12Zm128,52H168a6,6,0,0,0,0,12h33.52l-18.05,18a81.51,81.51,0,0,1-57.53,24h-.46a81.5,81.5,0,0,1-57.29-23.34,6,6,0,0,0-8.38,8.58,93.39,93.39,0,0,0,65.67,26.76H126a93.45,93.45,0,0,0,66-27.53l18-18.05V208a6,6,0,0,0,12,0V160A6,6,0,0,0,216,154Z"/></svg>`;
}
