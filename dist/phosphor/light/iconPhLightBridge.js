export const iconPhLightBridge = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,162H198V95.28a69.81,69.81,0,0,0,31.75,25.63,6,6,0,1,0,4.5-11.12A57.8,57.8,0,0,1,198,56a6,6,0,0,0-12,0A58,58,0,0,1,70,56a6,6,0,0,0-12,0,57.8,57.8,0,0,1-36.25,53.79,6,6,0,1,0,4.5,11.12A69.81,69.81,0,0,0,58,95.28V162H24a6,6,0,0,0,0,12H58v26a6,6,0,0,0,12,0V174H186v26a6,6,0,0,0,12,0V174h34a6,6,0,0,0,0-12Zm-86-38.35V162H110V123.65a70.11,70.11,0,0,0,36,0ZM70,95.15a70.49,70.49,0,0,0,28,24.09V162H70ZM158,162V119.24a70.49,70.49,0,0,0,28-24.09V162Z"/></svg>`;
}
