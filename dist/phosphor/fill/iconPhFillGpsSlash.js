export const iconPhFillGpsSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,136H215.63a87.21,87.21,0,0,1-10.13,33.61,4,4,0,0,1-6.5.81L92.51,53.28a4,4,0,0,1,1.4-6.38A87,87,0,0,1,120,40.37V16a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,136,16.27v24.1A88.13,88.13,0,0,1,215.63,120h24.1a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,240,136ZM53.92,34.62A8,8,0,1,0,42.08,45.38l21.09,23.2A87.63,87.63,0,0,0,40.37,120H16a8,8,0,0,0,0,16H40.37A88.13,88.13,0,0,0,120,215.63V240a8,8,0,0,0,16,0V215.63a87.51,87.51,0,0,0,45-17.43l21.08,23.18a8,8,0,1,0,11.84-10.76Z"/></svg>`;
}
