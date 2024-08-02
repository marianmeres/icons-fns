export const iconPhBoldFilmStripBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,100h72v56H44Zm96-24V60h24V76Zm-24,0H92V60h24Zm0,104v16H92V180Zm24,0h24v16H140Zm0-24V100h72v56Zm72-80H188V60h24ZM68,60V76H44V60ZM44,180H68v16H44Zm144,16V180h24v16Z"/></svg>`;
}
