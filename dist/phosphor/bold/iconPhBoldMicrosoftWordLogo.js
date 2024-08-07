export const iconPhBoldMicrosoftWordLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,20H72A20,20,0,0,0,52,40V56H36A20,20,0,0,0,16,76V180a20,20,0,0,0,20,20H52v16a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-32,88h28v40H168ZM76,44H196V84H168V76a20,20,0,0,0-20-20H76ZM40,80H144v96H40ZM76,212V200h72a20,20,0,0,0,20-20v-8h28v40ZM64.36,154.91l-12-48a12,12,0,1,1,23.28-5.82l4.13,16.53,1.5-3a12,12,0,0,1,21.46,0l1.5,3,4.13-16.53a12,12,0,0,1,23.28,5.82l-12,48a12,12,0,0,1-10.33,9A11.62,11.62,0,0,1,108,164a12,12,0,0,1-10.73-6.63L92,146.83l-5.27,10.54a12,12,0,0,1-22.37-2.46Z"/></svg>`;
}
