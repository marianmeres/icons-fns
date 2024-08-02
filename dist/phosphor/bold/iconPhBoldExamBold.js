export const iconPhBoldExamBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H40A20,20,0,0,0,20,56V216a12,12,0,0,0,17.37,10.73L64,213.42l26.63,13.31a12,12,0,0,0,10.74,0L128,213.42l26.63,13.31a12,12,0,0,0,10.74,0L192,213.42l26.63,13.31A12,12,0,0,0,236,216V56A20,20,0,0,0,216,36Zm-4,160.58-14.63-7.31a12,12,0,0,0-10.74,0L160,202.58l-26.63-13.31a12,12,0,0,0-10.74,0L96,202.58,69.37,189.27a12,12,0,0,0-10.74,0L44,196.58V60H212ZM62.63,170.73a12,12,0,0,0,16.1-5.36L81.42,160h37.16l2.69,5.37a12,12,0,1,0,21.46-10.74l-32-64a12,12,0,0,0-21.46,0l-32,64A12,12,0,0,0,62.63,170.73ZM106.58,136H93.42L100,122.83ZM144,128a12,12,0,0,1,12-12h4v-4a12,12,0,0,1,24,0v4h4a12,12,0,0,1,0,24h-4v4a12,12,0,0,1-24,0v-4h-4A12,12,0,0,1,144,128Z"/></svg>`;
}
