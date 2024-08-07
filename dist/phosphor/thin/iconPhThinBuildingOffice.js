export const iconPhThinBuildingOffice = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,212H228V92h4a4,4,0,0,0,0-8H180V44h4a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8h4V212H24a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8ZM220,92V212H180V92ZM52,44H172V212H140V160a4,4,0,0,0-4-4H88a4,4,0,0,0-4,4v52H52Zm80,168H92V164h40ZM76,80a4,4,0,0,1,4-4H96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,80Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H128A4,4,0,0,1,124,80ZM80,124a4,4,0,0,1,0-8H96a4,4,0,0,1,0,8Zm44-4a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H128A4,4,0,0,1,124,120Z"/></svg>`;
}
