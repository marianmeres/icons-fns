export const iconPhThinPaintBrushBroad = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,28H72A36,36,0,0,0,36,64v72a20,20,0,0,0,20,20h48a4,4,0,0,1,4,4.52l-7.9,46.81a3.79,3.79,0,0,0-.06.67,28,28,0,0,0,56,0,3.79,3.79,0,0,0-.06-.67L148,160.52a4,4,0,0,1,4-4.52h48a20,20,0,0,0,20-20V32A4,4,0,0,0,216,28ZM72,36H180V80a4,4,0,0,0,8,0V36h24v72H44V64A28,28,0,0,1,72,36ZM200,148H152a12,12,0,0,0-11.88,13.7s0,.06,0,.1L148,208.32a20,20,0,0,1-40,0l7.86-46.52s0-.07,0-.1A12,12,0,0,0,104,148H56a12,12,0,0,1-12-12V116H212v20A12,12,0,0,1,200,148Z"/></svg>`;
}
