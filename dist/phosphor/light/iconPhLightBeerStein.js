export const iconPhLightBeerStein = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,90H198V72a38,38,0,0,0-38-38H148.07C136.47,23.8,120.56,18,104,18,69.81,18,42,42.22,42,72V208a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V198h18a22,22,0,0,0,22-22V112A22,22,0,0,0,216,90ZM104,30c14.38,0,28.08,5.22,37.59,14.33A6,6,0,0,0,145.74,46H160a26,26,0,0,1,25.29,20H54.52C58,45.67,78.86,30,104,30Zm82,178a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V78H186Zm40-32a10,10,0,0,1-10,10H198V102h18a10,10,0,0,1,10,10ZM102,104v80a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v80a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"/></svg>`;
}
