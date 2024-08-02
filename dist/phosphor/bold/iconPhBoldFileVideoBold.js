export const iconPhBoldFileVideoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212a12,12,0,0,0,0,24h4a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160Zm-1.91,84.69a12,12,0,0,0-11.92-.15L126.5,152.44A20,20,0,0,0,108,140H48a20,20,0,0,0-20,20v48a20,20,0,0,0,20,20h60a20,20,0,0,0,18.5-12.44l19.67,10.93A12,12,0,0,0,164,216V152A12,12,0,0,0,158.09,141.66ZM104,204H52V164h52Zm36-8.39-12-6.67v-9.88l12-6.67Z"/></svg>`;
}
