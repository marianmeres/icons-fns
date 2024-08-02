export const iconPhDuotonePlugChargingDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,64v96a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64Z" opacity="0.2"/><path d="M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM192,160a24,24,0,0,1-24,24H88a24,24,0,0,1-24-24V72H192Zm-86.58-27.44a8,8,0,0,1-.91-7.37l12-32a8,8,0,1,1,15,5.62l-8,21.19H144a8,8,0,0,1,7.49,10.81l-12,32a8,8,0,0,1-15-5.62l8-21.19H112A8,8,0,0,1,105.42,132.56Z"/></svg>`;
}
