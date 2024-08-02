export const iconPhFillTextTSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,72h48a8,8,0,0,1,8,8V96a8,8,0,0,1-16,0V88H128a8,8,0,0,1,0-16Zm61.27,126a8,8,0,0,1-11.29-.75l-42-48V176h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V131L88,94.43V96a8,8,0,0,1-16,0V80a8.13,8.13,0,0,1,.63-3.13L66,69.27A8,8,0,0,1,78,58.73l112,128A8,8,0,0,1,189.27,198Z"/></svg>`;
}
