export const iconPhBoldPixLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238.16,113.89l-96-96a20,20,0,0,0-28.22,0l-96,96.05a20,20,0,0,0,0,28.22l96.05,96a20,20,0,0,0,28.22,0l96-96a20,20,0,0,0,0-28.22ZM128,37.68,174.32,84H160a12,12,0,0,0-8.49,3.51L128,111,104.49,87.51A12,12,0,0,0,96,84H81.68ZM57.68,108H91l20,20L91,148H57.68l-20-20ZM128,218.32,81.68,172H96a12,12,0,0,0,8.49-3.51L128,145l23.51,23.52A12,12,0,0,0,160,172h14.32ZM198.32,148H165l-20-20,20-20h33.35l20,20Z"/></svg>`;
}
