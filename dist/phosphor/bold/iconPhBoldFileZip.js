export const iconPhBoldFileZip = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,140H172a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0v-4h4a32,32,0,0,0,0-64Zm0,40h-4V164h4a8,8,0,0,1,0,16Zm-48-28v56a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM96,208a12,12,0,0,1-12,12H52a12,12,0,0,1-10.42-17.95L63.32,164H52a12,12,0,0,1,0-24H84A12,12,0,0,1,94.42,158L72.68,196H84A12,12,0,0,1,96,208ZM216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,0,0,24,0V88A12,12,0,0,0,216.49,79.52ZM160,80V57l23,23Z"/></svg>`;
}
