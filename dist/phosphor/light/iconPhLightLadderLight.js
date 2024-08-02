export const iconPhLightLadderLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M213.64,214,162.38,73l9.82-27H184a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12h7.43L34.36,214A6,6,0,0,0,38,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95L55.84,190h51.23L98.36,214a6,6,0,0,0,3.59,7.69,6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95L128.57,166h54.86l18.93,52.05A6,6,0,0,0,208,222a6.15,6.15,0,0,0,2.05-.36A6,6,0,0,0,213.64,214ZM128.89,130H77.66L90.75,94H142Zm30.54-84L146.34,82H95.11L108.2,46ZM60.2,178l13.09-36h51.23l-13.09,36Zm72.73-24L156,90.56,179.07,154Z"/></svg>`;
}
