export const iconPhFillSteeringWheel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM49.63,168H90.45l17,45.58A88.35,88.35,0,0,1,49.63,168ZM128,156a16,16,0,1,1,16-16A16,16,0,0,1,128,156Zm20.46,57.59L165.55,168h40.82A88.34,88.34,0,0,1,148.46,213.59ZM128,96a136.38,136.38,0,0,0-88,32.33V128a88,88,0,0,1,176,0v.33A136.38,136.38,0,0,0,128,96Z"/></svg>`;
}
