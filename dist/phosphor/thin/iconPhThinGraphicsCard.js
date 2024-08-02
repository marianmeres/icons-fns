export const iconPhThinGraphicsCard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,52H16a4,4,0,0,0-4,4V208a4,4,0,0,0,8,0V188H44v20a4,4,0,0,0,8,0V188H76v20a4,4,0,0,0,8,0V188h24v20a4,4,0,0,0,8,0V188H232a12,12,0,0,0,12-12V64A12,12,0,0,0,232,52Zm4,124a4,4,0,0,1-4,4H20V60H232a4,4,0,0,1,4,4ZM176,84a36,36,0,1,0,36,36A36,36,0,0,0,176,84Zm-28,36a27.89,27.89,0,0,1,5.58-16.76l39.18,39.18A28,28,0,0,1,148,120Zm50.42,16.76L159.24,97.58a28,28,0,0,1,39.18,39.18ZM80,84a36,36,0,1,0,36,36A36,36,0,0,0,80,84ZM52,120a27.89,27.89,0,0,1,5.58-16.76l39.18,39.18A28,28,0,0,1,52,120Zm50.42,16.76L63.24,97.58a28,28,0,0,1,39.18,39.18Z"/></svg>`;
}
