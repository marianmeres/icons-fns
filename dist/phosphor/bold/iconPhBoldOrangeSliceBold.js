export const iconPhBoldOrangeSliceBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,76H12A12,12,0,0,0,0,88v4a128,128,0,0,0,256,0V88A12,12,0,0,0,244,76ZM64.52,100h42.69L84.67,139.05A63.87,63.87,0,0,1,64.52,100ZM128,112l22.94,39.73a63.76,63.76,0,0,1-45.88,0Zm43.33,27.05L148.79,100h42.69A63.87,63.87,0,0,1,171.33,139.05ZM128,196A104.15,104.15,0,0,1,24.3,100H40.37a88,88,0,0,0,175.26,0H231.7A104.15,104.15,0,0,1,128,196Z"/></svg>`;
}
