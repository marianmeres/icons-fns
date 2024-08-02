export const iconPhBoldSynagogueBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,54.34V32a12,12,0,0,0-24,0V54.34A32.06,32.06,0,0,0,164,84v26.75L140,97V72a12,12,0,0,0-24,0V97L92,110.75V84A32.06,32.06,0,0,0,72,54.34V32a12,12,0,0,0-24,0V54.34A32.06,32.06,0,0,0,28,84V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V84A32.06,32.06,0,0,0,208,54.34ZM128,160a12,12,0,0,0-12,12v32H92V138.39l36-20.57,36,20.57V204H140V172A12,12,0,0,0,128,160ZM52,84a8,8,0,0,1,16,0v16H52Zm136,0a8,8,0,0,1,16,0v16H188ZM52,124H68v80H52Zm136,80V124h16v80Z"/></svg>`;
}
