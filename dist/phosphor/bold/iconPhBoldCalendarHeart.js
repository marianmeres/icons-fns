export const iconPhBoldCalendarHeart = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H68a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16ZM152,84a35.86,35.86,0,0,0-24,9.19A36,36,0,0,0,68,120c0,17,9.53,33.56,28.32,49.22a151.47,151.47,0,0,0,26.31,17.51,12,12,0,0,0,10.74,0,151.47,151.47,0,0,0,26.31-17.51C178.47,153.56,188,137,188,120A36,36,0,0,0,152,84Zm-24,78.29c-13.15-7.86-36-25.06-36-42.29a12,12,0,0,1,24,0,12,12,0,0,0,24,0,12,12,0,0,1,24,0C164,137.23,141.14,154.44,128,162.29Z"/></svg>`;
}
