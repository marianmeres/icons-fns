export const iconPhDuotonePersonSimpleSkiDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,60a20,20,0,1,1-20-20A20,20,0,0,1,192,60Z" opacity="0.2"/><path d="M172,88a28,28,0,1,0-28-28A28,28,0,0,0,172,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,172,48ZM32.32,77.76a8,8,0,0,1,9.92-5.44L112,92.67l10.32-10.33a8,8,0,0,1,11.32,0L163.31,112H200a8,8,0,0,1,0,16H160a8,8,0,0,1-5.66-2.34L148.73,120l-111-32.36A8,8,0,0,1,32.32,77.76ZM236.44,204.24a69.78,69.78,0,0,1-58.37,8.95L21.76,167.67a8,8,0,1,1,4.48-15.36l76,22.13L128.73,148,85.8,135.69a8,8,0,0,1,4.4-15.39l56,16a8,8,0,0,1,3.46,13.35l-29.9,29.9,62.79,18.28a53.78,53.78,0,0,0,45-6.9,8,8,0,1,1,8.88,13.31Z"/></svg>`;
}
