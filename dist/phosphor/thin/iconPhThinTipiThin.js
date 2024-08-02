export const iconPhThinTipiThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.37,213.84,132.75,53.5l22.62-35.34a4,4,0,1,0-6.74-4.32L128,46.08,107.37,13.84a4,4,0,0,0-6.74,4.32L123.25,53.5,20.63,213.84A4,4,0,0,0,24,220H232a4,4,0,0,0,3.37-6.16ZM79,212l49-76.58L177,212Zm107.52,0-55.14-86.16a4,4,0,0,0-6.74,0L69.49,212H31.31L128,60.92,224.69,212Z"/></svg>`;
}
