export const iconPhBoldCrown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,80a32,32,0,1,0-60,15.45l-20.86,25.66L150.82,74.4a32,32,0,1,0-45.64,0L84.87,121.11,64,95.45a32,32,0,1,0-35,15.78l14,84.06A19.94,19.94,0,0,0,62.78,212H193.22A19.94,19.94,0,0,0,213,195.29l14-84.06A32.05,32.05,0,0,0,252,80Zm-32-8a8,8,0,1,1-8,8A8,8,0,0,1,220,72ZM128,44a8,8,0,1,1-8,8A8,8,0,0,1,128,44ZM36,72a8,8,0,1,1-8,8A8,8,0,0,1,36,72ZM189.83,188H66.17L55.29,122.78l23.4,28.79A12,12,0,0,0,88,156a12.87,12.87,0,0,0,1.63-.11,12,12,0,0,0,9.37-7.1L127.18,84l.82,0,.82,0L157,148.79a12,12,0,0,0,9.37,7.1A12.87,12.87,0,0,0,168,156a12,12,0,0,0,9.31-4.43l23.4-28.79Z"/></svg>`;
}
