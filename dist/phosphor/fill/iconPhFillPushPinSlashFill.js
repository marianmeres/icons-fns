export const iconPhFillPushPinSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.33,104l-47.62,47.78a4,4,0,0,1-5.79-.14L108,70.27a4,4,0,0,1,.13-5.51L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104ZM53.92,34.62a8,8,0,0,0-12,.21,8.18,8.18,0,0,0,.37,10.75L67.32,73.15C58.26,75.09,48.2,79.37,38,87.63a16,16,0,0,0-1.29,23.78L85,159.71,42.55,202.14a8.17,8.17,0,0,0-.6,11.09,8,8,0,0,0,11.71.43L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33,88.62,88.62,0,0,0,11.64-20.2l21.77,23.95a8,8,0,1,0,11.84-10.76Z"/></svg>`;
}
