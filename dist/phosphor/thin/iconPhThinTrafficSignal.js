export const iconPhThinTrafficSignal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,60a28,28,0,1,0,28,28A28,28,0,0,0,128,60Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,108Zm0,32a28,28,0,1,0,28,28A28,28,0,0,0,128,140Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,188Zm88-40H196V76h20a4,4,0,0,0,0-8H196V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V68H40a4,4,0,0,0,0,8H60v72H40a4,4,0,0,0,0,8H60v60a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V156h20a4,4,0,0,0,0-8Zm-28,68a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z"/></svg>`;
}
