export const iconPhThinLighthouseThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,84a4,4,0,0,0-4,4v20H185.23L180,55.6A4,4,0,0,0,178.66,53L135.78,14.87l-.1-.09a12,12,0,0,0-15.36,0l-.1.09L77.34,53A4,4,0,0,0,76,55.6L70.77,108H52V88a4,4,0,0,0-8,0v24a4,4,0,0,0,4,4H70l-9.92,98.86A12,12,0,0,0,72,228H184a12,12,0,0,0,11.94-13.16L186,116h22a4,4,0,0,0,4-4V88A4,4,0,0,0,208,84ZM125.48,20.89a4,4,0,0,1,5,0l35,31.11h-75ZM83.62,60h88.76l4.81,48H132V88a4,4,0,0,0-8,0v20H78.81ZM187,218.69a3.94,3.94,0,0,1-3,1.31H72a4,4,0,0,1-4-4.36L72.39,172H183.61L188,215.62A3.93,3.93,0,0,1,187,218.69ZM182.81,164H73.19L78,116H178Z"/></svg>`;
}
