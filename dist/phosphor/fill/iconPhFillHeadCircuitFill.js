export const iconPhFillHeadCircuitFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,72a8,8,0,1,1,8,8A8,8,0,0,1,120,72Zm24,64a8,8,0,1,0,8-8A8,8,0,0,0,144,136Zm48.5,35.47A88.32,88.32,0,0,0,224,101.89q0-1.1-.09-2.19a4,4,0,0,0-4-3.75H195.75L172.62,123.7a24,24,0,1,1-12.28-10.25l25.51-30.62A8,8,0,0,1,192,80h23.14a4,4,0,0,0,3.77-5.35C207.27,42,176.86,18,140.74,16.08l-.59,0a4,4,0,0,0-4.15,4V49.33a24,24,0,1,1-16,0v-27a4,4,0,0,0-4.89-3.91A88.16,88.16,0,0,0,48,102L25.55,145.14l-.22.45a16,16,0,0,0,7.51,20.7l.25.12L56,176.9v31a16,16,0,0,0,16,16h40v8a8,8,0,0,0,8,8h71.77a8.42,8.42,0,0,0,4.06-1,8,8,0,0,0,4.11-8Z"/></svg>`;
}
