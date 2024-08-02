export const iconPhLightMicrosoftWordLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,26H72A14,14,0,0,0,58,40V66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H58v26a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm-42,76h44v52H158ZM70,40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2V90H158V80a14,14,0,0,0-14-14H70ZM38,176V80a2,2,0,0,1,2-2H144a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm162,42H72a2,2,0,0,1-2-2V190h74a14,14,0,0,0,14-14V166h44v50A2,2,0,0,1,200,218ZM70.18,153.46l-12-48a6,6,0,1,1,11.64-2.92l8.07,32.27,8.74-17.49a6,6,0,0,1,10.74,0l8.74,17.49,8.07-32.27a6,6,0,1,1,11.64,2.92l-12,48a6,6,0,0,1-5.17,4.5,4.63,4.63,0,0,1-.65,0,6,6,0,0,1-5.37-3.32L92,133.42,81.37,154.68a6,6,0,0,1-11.19-1.22Z"/></svg>`;
}
