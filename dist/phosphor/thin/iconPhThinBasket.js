export const iconPhThinBasket = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,120v56a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm49.2-4a4,4,0,0,0-4.38,3.58l-5.6,56A4,4,0,0,0,174.8,180l.41,0a4,4,0,0,0,4-3.6l5.6-56A4,4,0,0,0,181.2,116ZM74.8,116a4,4,0,0,0-3.58,4.38l5.6,56a4,4,0,0,0,4,3.6l.41,0a4,4,0,0,0,3.58-4.38l-5.6-56A4,4,0,0,0,74.8,116ZM236,88.53,220.89,201.59A12,12,0,0,1,209,212H47a12,12,0,0,1-11.89-10.41L20,88.53A4,4,0,0,1,21,85.37,4,4,0,0,1,24,84H70.18L125,21.37a4,4,0,0,1,6,0L185.82,84H232a4,4,0,0,1,3,1.37A4,4,0,0,1,236,88.53ZM80.82,84h94.36L128,30.07Zm146.61,8H28.57L43,200.53A4,4,0,0,0,47,204H209a4,4,0,0,0,4-3.47Z"/></svg>`;
}
