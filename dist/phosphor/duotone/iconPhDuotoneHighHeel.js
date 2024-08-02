export const iconPhDuotoneHighHeel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,187.31V192a8,8,0,0,1-8,8H150.72a8,8,0,0,1-7.42-4.92C125.51,151.28,82.38,120,32,120c0-31,12.59-58.78,32-80L176,152l53.21,12A23.92,23.92,0,0,1,248,187.31Z" opacity="0.2"/><path d="M231,156.19,180,144.71,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V143.06c2.49,1.45,4.94,3,7.34,4.64a112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19ZM72,192H40V128.29a110.88,110.88,0,0,1,32,7.12Zm168,0H150.68a128.36,128.36,0,0,0-46.27-57.46,126.9,126.9,0,0,0-64.12-22.26A110.67,110.67,0,0,1,64.46,51.78L170.34,157.66a8,8,0,0,0,3.9,2.14l53.24,12A15.81,15.81,0,0,1,240,187.31Z"/></svg>`;
}
