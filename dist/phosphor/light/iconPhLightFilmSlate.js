export const iconPhLightFilmSlate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,106H86.68L209.53,73.57a6,6,0,0,0,4.26-7.38l-8.16-30a13.94,13.94,0,0,0-17-9.72L36.32,66.67a13.77,13.77,0,0,0-8.48,6.47,13.57,13.57,0,0,0-1.36,10.42L34,111.34c0,.22,0,.44,0,.66v88a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V112A6,6,0,0,0,216,106ZM125.75,55.48l33,19.07-42.43,11.2-33-19.07Zm66-17.41a1.92,1.92,0,0,1,2.34,1.26l6.57,24.18L175.26,70.2l-33-19.07ZM38.23,79.14a1.85,1.85,0,0,1,1.15-.87L66.86,71l33,19.08L44.66,104.68l-6.6-24.27A1.63,1.63,0,0,1,38.23,79.14ZM210,200a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V118H210Z"/></svg>`;
}
