export const iconPhDuotoneTextSuperscriptDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,64V184a16,16,0,0,1-16,16H40V64A16,16,0,0,1,56,48H224A16,16,0,0,1,240,64Z" opacity="0.2"/><path d="M248,144a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.17-57.55a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.33,32,32,0,1,1,55.74,29.92L208,136h32A8,8,0,0,1,248,144ZM149.24,74a8,8,0,0,0-11.29.8L92,127.79l-45.95-53A8,8,0,0,0,34,85.24L81.41,140,34,194.76a8,8,0,0,0,12.1,10.48l46-53,45.95,53a8,8,0,1,0,12.1-10.48L102.59,140l47.46-54.76A8,8,0,0,0,149.24,74Z"/></svg>`;
}
