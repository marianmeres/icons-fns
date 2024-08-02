export const iconPhFillScissors = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236.52,187.09l-143-97.87a36,36,0,1,0-14.38,17.27l21.39,21.69L79.15,149.54l0,0a35.91,35.91,0,1,0,14.38,17.27l26.91-18.41L170,198.64a32.26,32.26,0,0,0,22.7,9.37,31.52,31.52,0,0,0,4.11-.27l.28,0,36.27-6.11a8,8,0,0,0,3.19-14.5Zm-162.38-97A20,20,0,1,1,80,76,20,20,0,0,1,74.14,90.13Zm0,104A20,20,0,1,1,80,180,20,20,0,0,1,74.14,194.15Zm61-101.5L169.94,57.4a32.19,32.19,0,0,1,26.84-9.14l.28,0,36,6.07a8.21,8.21,0,0,1,6.09,4.42,8,8,0,0,1-2.67,10.12l-69.93,47.85a4,4,0,0,1-4.51,0l-26.31-18A4,4,0,0,1,135.18,92.65Z"/></svg>`;
}
