export const iconPhBoldVignetteBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM81.43,166.05C94,175.05,110.56,180,128,180s34-4.95,46.57-13.95C188.19,156.32,196,142.45,196,128s-7.81-28.32-21.43-38C162,81,145.44,76,128,76S94,81,81.43,90C67.81,99.68,60,113.55,60,128S67.81,156.32,81.43,166.05ZM128,100c23.85,0,44,12.82,44,28s-20.15,28-44,28-44-12.82-44-28S104.15,100,128,100Z"/></svg>`;
}
