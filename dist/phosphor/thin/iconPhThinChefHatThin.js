export const iconPhThinChefHatThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,112a52.06,52.06,0,0,0-52-52,53,53,0,0,0-7.77.59,52,52,0,0,0-96.46,0A53,53,0,0,0,72,60,52,52,0,0,0,52,160v48a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V160A52.07,52.07,0,0,0,236,112Zm-40,96a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V162.59A52.13,52.13,0,0,0,72,164H184a52.13,52.13,0,0,0,12-1.41Zm-12-52H165.12l6.76-27a4,4,0,0,0-7.76-1.94l-7.24,29H132V128a4,4,0,0,0-8,0v28H99.12l-7.24-29A4,4,0,1,0,84.12,129l6.76,27H72a44,44,0,0,1,0-88,45.3,45.3,0,0,1,5.34.33A51.68,51.68,0,0,0,76,80a4,4,0,0,0,8,0,44,44,0,0,1,88,0,4,4,0,0,0,8,0,51.68,51.68,0,0,0-1.34-11.67A45.3,45.3,0,0,1,184,68a44,44,0,0,1,0,88Z"/></svg>`;
}
