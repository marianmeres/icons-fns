export const iconPhDuotoneVirus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,40a88,88,0,1,0,88,88A88,88,0,0,0,128,40Zm-20,88a20,20,0,1,1,20-20A20,20,0,0,1,108,128Z" opacity="0.2"/><path d="M136,108a28,28,0,1,0-28,28A28,28,0,0,0,136,108Zm-28,12a12,12,0,1,1,12-12A12,12,0,0,1,108,120Zm68-8a16,16,0,1,1-16,16A16,16,0,0,1,176,112Zm-32,64a16,16,0,1,1-16-16A16,16,0,0,1,144,176Zm96-56H223.66a95.52,95.52,0,0,0-22.39-53.95l12.39-12.39a8,8,0,0,0-11.32-11.32L190,54.73A95.52,95.52,0,0,0,136,32.34V16a8,8,0,0,0-16,0V32.34A95.52,95.52,0,0,0,66.05,54.73L53.66,42.34A8,8,0,0,0,42.34,53.66L54.73,66.05a95.52,95.52,0,0,0-22.39,54H16a8,8,0,0,0,0,16H32.34A95.52,95.52,0,0,0,54.73,190L42.34,202.34a8,8,0,0,0,11.32,11.32l12.39-12.39a95.52,95.52,0,0,0,54,22.39V240a8,8,0,0,0,16,0V223.66A95.52,95.52,0,0,0,190,201.27l12.39,12.39a8,8,0,0,0,11.32-11.32L201.27,190A95.52,95.52,0,0,0,223.66,136H240a8,8,0,0,0,0-16ZM128,208a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,208Z"/></svg>`;
}
