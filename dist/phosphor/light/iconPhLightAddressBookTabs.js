export const iconPhLightAddressBookTabs = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-18,68h20v52H190Zm20-54V90H190V46h18A2,2,0,0,1,210,48ZM46,208V48a2,2,0,0,1,2-2H178V210H48A2,2,0,0,1,46,208Zm162,2H190V166h20v42A2,2,0,0,1,208,210Zm-58.19-43.49A38,38,0,0,0,131.23,143a30,30,0,1,0-38.45,0A38,38,0,0,0,74.19,166.5a6,6,0,0,0,11.62,3C88.67,158.38,99.93,150,112,150s23.34,8.38,26.19,19.49a6,6,0,0,0,11.62-3ZM94,120a18,18,0,1,1,18,18A18,18,0,0,1,94,120Z"/></svg>`;
}
