export const iconPhBoldSteamLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm50.16,122.22a40,40,0,1,0-57.25-55.34L92.57,123.6,55.18,86.21a83.55,83.55,0,1,1-9.39,24.55l32.76,32.76a32,32,0,0,0,49.51,37.41ZM117,131.27A40.26,40.26,0,0,0,132.73,147L113.3,162l-.25.2a7.93,7.93,0,0,1-5,1.79,8,8,0,0,1-8-8,7.93,7.93,0,0,1,1.79-5.05l.2-.25ZM152,128a16,16,0,1,1,16-16A16,16,0,0,1,152,128Z"/></svg>`;
}
