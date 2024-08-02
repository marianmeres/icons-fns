export const iconPhBoldHighlighter = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252.49,107.51a12,12,0,0,0-17,0L192,151,113,72l43.52-43.51a12,12,0,0,0-17-17L93.17,57.86a20,20,0,0,0-4.72,20.72L69.17,97.86a20,20,0,0,0,0,28.28L71,128,15.51,183.51a12,12,0,0,0,4.7,19.87l72,24A11.8,11.8,0,0,0,96,228a12,12,0,0,0,8.49-3.52L136,193l1.86,1.86a20,20,0,0,0,28.28,0l19.27-19.27a20.27,20.27,0,0,0,6.59,1.13,19.86,19.86,0,0,0,14.14-5.86l46.35-46.34A12,12,0,0,0,252.49,107.51ZM92.76,202.27,46.21,186.76,88,145l31,31ZM152,175,96.49,119.52h0L89,112l15-15,63,63Z"/></svg>`;
}
