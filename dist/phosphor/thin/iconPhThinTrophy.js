export const iconPhThinTrophy = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,68H204V48a4,4,0,0,0-4-4H56a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80V96a36,36,0,0,0,36,36h6.66A76,76,0,0,0,124,187.89V220H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V187.88c32.93-1.74,60.41-24.91,69.11-55.88H208a36,36,0,0,0,36-36V80A12,12,0,0,0,232,68ZM48,124A28,28,0,0,1,20,96V80a4,4,0,0,1,4-4H52v36a77,77,0,0,0,1,12Zm148-12.9c0,37.71-30.79,68.62-68,68.9a68,68,0,0,1-68-68V52H196ZM236,96a28,28,0,0,1-28,28h-5.1a77.35,77.35,0,0,0,1.1-12.9V76h28a4,4,0,0,1,4,4Z"/></svg>`;
}
