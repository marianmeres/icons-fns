export const iconPhLightChalkboard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,194H230V56a14,14,0,0,0-14-14H40A14,14,0,0,0,26,56V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2V194H198V168a6,6,0,0,0-6-6H120a6,6,0,0,0-6,6v26H70V86H186v50a6,6,0,0,0,12,0V80a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V194H38ZM186,194H126V174h60Z"/></svg>`;
}
