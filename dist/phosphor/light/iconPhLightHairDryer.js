export const iconPhLightHairDryer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198,88a30,30,0,1,0-30,30A30,30,0,0,0,198,88Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,168,106Zm-5.15,108a14,14,0,0,0,12.74-8.21l31.8-69.94A62,62,0,0,0,168,26a6.61,6.61,0,0,0-1,.08L29.7,49A14,14,0,0,0,18,62.78v50.44A14,14,0,0,0,29.7,127L130,143.75V200a14,14,0,0,0,14,14h2v2a38,38,0,0,0,38,38h16a6,6,0,0,0,0-12H184a26,26,0,0,1-26-26v-2ZM30,113.22V62.78a2,2,0,0,1,1.67-2L168.48,38a50,50,0,0,1,0,100L31.67,115.2A2,2,0,0,1,30,113.22ZM142,200V145.75l25,4.17a6.61,6.61,0,0,0,1,.08,61.75,61.75,0,0,0,21.53-3.86l-24.86,54.69a2,2,0,0,1-1.82,1.17H144A2,2,0,0,1,142,200Z"/></svg>`;
}
