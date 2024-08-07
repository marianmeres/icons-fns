export const iconPhLightCoffee = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M82,56V24a6,6,0,0,1,12,0V56a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V24a6,6,0,0,0-12,0V56A6,6,0,0,0,120,62Zm32,0a6,6,0,0,0,6-6V24a6,6,0,0,0-12,0V56A6,6,0,0,0,152,62Zm94,58v8a38,38,0,0,1-36.94,38,94.55,94.55,0,0,1-31.13,44H208a6,6,0,0,1,0,12H32a6,6,0,0,1,0-12H62.07A94.34,94.34,0,0,1,26,136V88a6,6,0,0,1,6-6H208A38,38,0,0,1,246,120Zm-44,16V94H38v42a82.27,82.27,0,0,0,46.67,74h70.66A82.27,82.27,0,0,0,202,136Zm32-16a26,26,0,0,0-20-25.29V136a93.18,93.18,0,0,1-1.69,17.64A26,26,0,0,0,234,128Z"/></svg>`;
}
