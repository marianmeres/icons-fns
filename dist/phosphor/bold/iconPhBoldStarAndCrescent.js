export const iconPhBoldStarAndCrescent = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M157.46,195.72a76,76,0,0,1,0-135.44,12,12,0,0,0,0-21.37,100,100,0,1,0,0,178.18,12,12,0,0,0,0-21.37ZM112,204a76,76,0,0,1,0-152,77.2,77.2,0,0,1,13.57,1.19,100.14,100.14,0,0,0,0,149.62A77.2,77.2,0,0,1,112,204Zm136.75-87L224.47,106.5l-2.12-27.42a12,12,0,0,0-21.22-6.72l-17,20.58-25.26-6.25a12,12,0,0,0-13.22,17.73L159.54,128l-13.88,23.58a12,12,0,0,0,13.22,17.73l25.26-6.25,17,20.58a12,12,0,0,0,9.26,4.36,11.88,11.88,0,0,0,3.62-.56,12,12,0,0,0,8.34-10.52l2.12-27.42L248.75,139a12,12,0,0,0,0-22Zm-40.44,13.35a12,12,0,0,0-7.21,10.09l-.39,5L197.84,142a12,12,0,0,0-9.25-4.36,11.76,11.76,0,0,0-2.88.35l-4.89,1.21,3-5.07a12,12,0,0,0,0-12.18l-3-5.07,4.89,1.21a12,12,0,0,0,12.13-4l2.87-3.48.39,5a12,12,0,0,0,7.21,10.09l5.4,2.33Z"/></svg>`;
}
