export const iconPhBoldHairDryerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,88a32,32,0,1,0-32,32A32,32,0,0,0,200,88Zm-32,8a8,8,0,1,1,8-8A8,8,0,0,1,168,96Zm13.06,112.28,31.25-68.76A68,68,0,0,0,168,20a11.81,11.81,0,0,0-2,.16L28.71,43.05A19.94,19.94,0,0,0,12,62.78v50.44A19.94,19.94,0,0,0,28.71,133L124,148.83V200a20,20,0,0,0,16.69,19.7A44.06,44.06,0,0,0,184,256h16a12,12,0,0,0,0-24H184a20,20,0,0,1-18.41-12.19A20.09,20.09,0,0,0,181.06,208.28ZM36,66.17,168.93,44a44,44,0,0,1,0,88L36,109.83Zm130,89.67a11.81,11.81,0,0,0,2,.16,68.08,68.08,0,0,0,10.85-.88L160.27,196H148V152.83Z"/></svg>`;
}
