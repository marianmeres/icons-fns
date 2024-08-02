export const iconPhThinFactoryThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M112,176a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h28A4,4,0,0,1,112,176Zm64-4H148a4,4,0,0,0,0,8h28a4,4,0,0,0,0-8Zm60,44a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H36V88a4,4,0,0,1,6.4-3.2L100,128V88a4,4,0,0,1,6.4-3.2l44.14,33.11L163.06,30.3A12.06,12.06,0,0,1,174.94,20h18.12a12.06,12.06,0,0,1,11.88,10.3l15,105.13a3.64,3.64,0,0,1,0,.57v76h12A4,4,0,0,1,236,216Zm-78.16-92.62L169.33,132h42.06L197,31.43a4,4,0,0,0-4-3.43H174.94a4,4,0,0,0-4,3.43ZM44,212H212V140H168a4,4,0,0,1-2.4-.8L108,96v40a4,4,0,0,1-6.4,3.2L44,96Z"/></svg>`;
}
