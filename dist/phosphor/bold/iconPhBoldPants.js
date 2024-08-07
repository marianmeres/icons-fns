export const iconPhBoldPants = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.85,213.52l-22-176A20,20,0,0,0,186,20H70A20,20,0,0,0,50.15,37.52l-22,176A20,20,0,0,0,48,236H88.69A19.94,19.94,0,0,0,108.07,221l19.93-77,19.91,76.94A20,20,0,0,0,167.31,236H208a20,20,0,0,0,19.85-22.48ZM182.47,44l2,16H71.53l2-16ZM85.6,212H52.53l11.2-89.6A44.11,44.11,0,0,0,95.81,84H116V94.47Zm84.81,0L140,94.47V84h20.19a44.09,44.09,0,0,0,32.08,38.39L203.47,212Z"/></svg>`;
}
