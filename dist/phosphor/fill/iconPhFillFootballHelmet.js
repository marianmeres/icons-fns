export const iconPhFillFootballHelmet = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,160H165.8l-7.09-24H216a8,8,0,0,0,8-8v-4A100,100,0,0,0,122.58,24C68.24,24.77,24,69.61,24,124A100,100,0,0,0,67.62,206.6a8,8,0,0,0,4.52,1.4H120a16,16,0,0,0,15.62-19.47,5.44,5.44,0,0,0-.15-.54l-3.56-12h21.93l10.79,36.53A16.1,16.1,0,0,0,180,224h36a16,16,0,0,0,16-16V176A16,16,0,0,0,216,160ZM84,176a12,12,0,1,1,12-12A12,12,0,0,1,84,176Zm43.16-16L120,136h22l7.09,24ZM216,208H180l-9.46-32H216Z"/></svg>`;
}
