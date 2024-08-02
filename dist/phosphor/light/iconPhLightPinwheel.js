export const iconPhLightPinwheel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.24,219.76,177.38,168.9a60.19,60.19,0,0,0,6.45-1.92,58,58,0,0,0,34.66-74.34,6,6,0,0,0-7.69-3.58L161.5,107a60.16,60.16,0,0,0,3.54-6.46,58,58,0,0,0-72.4-79,6,6,0,0,0-3.58,7.69L107,78.52A60.16,60.16,0,0,0,100.54,75a58,58,0,0,0-79,72.4,6,6,0,0,0,3.1,3.38,6,6,0,0,0,4.59.2L78.52,133A58.3,58.3,0,0,0,75,139.48,58.06,58.06,0,0,0,127.5,222a58.25,58.25,0,0,0,19.88-3.53A6,6,0,0,0,151,210.8L133,161.5A57.8,57.8,0,0,0,162,170.45l57.79,57.79a6,6,0,0,0,8.48-8.48ZM102.52,31.11a46,46,0,0,1,31.2,85.72ZM31.11,137.5a46,46,0,0,1,85.72-31.2ZM137.5,208.9a46,46,0,0,1-31.2-85.72Zm26.95-50.41a46.07,46.07,0,0,1-41.27-24.77l85.72-31.2a46.06,46.06,0,0,1-44.39,56Z"/></svg>`;
}
