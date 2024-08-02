export const iconPhLightPen = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1l86.16-86.16,4.61,18.42-37.6,37.6a6,6,0,1,0,8.49,8.48l40-40a6,6,0,0,0,1.58-5.7l-7.18-28.7,27.26-27.25A14,14,0,0,0,225.91,74.79ZM46,208V174.49L81.52,210H48A2,2,0,0,1,46,208Zm50-.49L48.48,160,136,72.49,183.52,120ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z"/></svg>`;
}
