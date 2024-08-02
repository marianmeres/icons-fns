export const iconPhLightMicrosoftExcelLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,26H72A14,14,0,0,0,58,40V66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H58v26a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm-42,76h44v52H158Zm44-62V90H158V80a14,14,0,0,0-14-14h-2V38h58A2,2,0,0,1,202,40ZM70,40a2,2,0,0,1,2-2h58V66H70ZM38,176V80a2,2,0,0,1,2-2H144a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm32,40V190h60v28H72A2,2,0,0,1,70,216Zm130,2H142V190h2a14,14,0,0,0,14-14V166h44v50A2,2,0,0,1,200,218ZM67.39,148.16,84.19,128l-16.8-20.16a6,6,0,1,1,9.22-7.68L92,118.63l15.39-18.47a6,6,0,0,1,9.22,7.68L99.81,128l16.8,20.16a6,6,0,1,1-9.22,7.68L92,137.37,76.61,155.84a6,6,0,0,1-9.22-7.68Z"/></svg>`;
}
