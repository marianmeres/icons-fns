export const iconPhLightRanking = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M114.31,101.9a6,6,0,0,1,3.79-7.59l12-4A6,6,0,0,1,138,96v40a6,6,0,0,1-12,0V104.32l-4.1,1.37A6,6,0,0,1,114.31,101.9ZM246,208a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H26V104A14,14,0,0,1,40,90H82V56A14,14,0,0,1,96,42h64a14,14,0,0,1,14,14v74h42a14,14,0,0,1,14,14v58h10A6,6,0,0,1,246,208Zm-72-66v60h44V144a2,2,0,0,0-2-2ZM94,202h68V56a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2Zm-56,0H82V102H40a2,2,0,0,0-2,2Z"/></svg>`;
}
