export const iconPhRegularBarn = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,192h-8V130.57l1.49,2.08a8,8,0,1,0,13-9.3l-40-56a8,8,0,0,0-2-1.94L137,18.77l-.1-.07a16,16,0,0,0-17.76,0l-.1.07L51.45,65.42a8,8,0,0,0-2,1.94l-40,56a8,8,0,1,0,13,9.3L24,130.57V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,108.17,61.7,77.79,128,32l66.3,45.78L216,108.17V192H192V120a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v72H40Zm88,42L97,128H159Zm48-14.62v48.91L141.76,160ZM114.24,160,80,184.46V135.55ZM128,169.83,159,192H97ZM104,88a8,8,0,0,1,8-8h32a8,8,0,1,1,0,16H112A8,8,0,0,1,104,88Z"/></svg>`;
}
