export const iconPhBoldJarLabel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM60,120H196v48H60ZM164,48H140V36h24ZM116,36V48H92V36ZM80,72h96a20,20,0,0,1,20,20v4H60V92A20,20,0,0,1,80,72Zm96,148H80a20,20,0,0,1-20-20v-8H196v8A20,20,0,0,1,176,220Z"/></svg>`;
}
