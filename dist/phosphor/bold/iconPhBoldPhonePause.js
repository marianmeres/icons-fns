export const iconPhBoldPhonePause = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,162.8l-47.09-21.1-.18-.08a19.89,19.89,0,0,0-19,1.74,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a10.67,10.67,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83l-.08-.18L93.2,40A20.06,20.06,0,0,0,72.42,28.15,60.27,60.27,0,0,0,20,88c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,216,162.8ZM168,212A124.15,124.15,0,0,1,44,88,36.27,36.27,0,0,1,72.48,52.47l18.82,42-19.16,22.8a10.75,10.75,0,0,0-.86,1.15A20,20,0,0,0,70,138.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,138,184.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,168,212Zm20-108V48a12,12,0,0,1,24,0v56a12,12,0,0,1-24,0Zm-40,0V48a12,12,0,0,1,24,0v56a12,12,0,0,1-24,0Z"/></svg>`;
}
