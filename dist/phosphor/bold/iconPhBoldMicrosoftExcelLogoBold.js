export const iconPhBoldMicrosoftExcelLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,20H72A20,20,0,0,0,52,40V56H36A20,20,0,0,0,16,76V180a20,20,0,0,0,20,20H52v16a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-32,88h28v40H168Zm28-24H168V76a20,20,0,0,0-20-20V44h48ZM76,44h48V56H76ZM40,80H144v96H40ZM76,200h48v12H76Zm72,12V200a20,20,0,0,0,20-20v-8h28v40ZM64.32,161.22a12,12,0,0,1-1.54-16.9L76.38,128l-13.6-16.32A12,12,0,1,1,81.22,96.32L92,109.25l10.78-12.93a12,12,0,0,1,18.44,15.36L107.62,128l13.6,16.32a12,12,0,1,1-18.44,15.36L92,146.75,81.22,159.68a12,12,0,0,1-16.9,1.54Z"/></svg>`;
}
