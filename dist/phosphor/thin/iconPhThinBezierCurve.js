export const iconPhThinBezierCurve = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M217.83,148.07A92.6,92.6,0,0,0,165.53,84H240a4,4,0,0,0,0-8H155.71a28,28,0,0,0-55.42,0H16a4,4,0,0,0,0,8H90.47a92.6,92.6,0,0,0-52.3,64.07,28,28,0,1,0,8.07.64,84.51,84.51,0,0,1,55-60.36,28,28,0,0,0,53.46,0,84.53,84.53,0,0,1,55,60.36,28,28,0,1,0,8.07-.64ZM60,176a20,20,0,1,1-20-20A20,20,0,0,1,60,176Zm68-76a20,20,0,1,1,20-20A20,20,0,0,1,128,100Zm88,96a20,20,0,1,1,20-20A20,20,0,0,1,216,196Z"/></svg>`;
}
