export const iconPhFillClockCountdown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,96a12,12,0,1,1,12,12A12,12,0,0,1,208,96ZM196,72a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm28.66,56a8,8,0,0,0-8.63,7.31A88.12,88.12,0,1,1,120.66,40,8,8,0,0,0,119.34,24,104.12,104.12,0,1,0,232,136.66,8,8,0,0,0,224.66,128ZM128,56a72,72,0,1,1-72,72A72.08,72.08,0,0,1,128,56Zm-8,72a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H136V80a8,8,0,0,0-16,0Zm40-80a12,12,0,1,0-12-12A12,12,0,0,0,160,48Z"/></svg>`;
}
