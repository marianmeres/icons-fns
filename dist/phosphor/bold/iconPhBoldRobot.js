export const iconPhBoldRobot = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"/></svg>`;
}
