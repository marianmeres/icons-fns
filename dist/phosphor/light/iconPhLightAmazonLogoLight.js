export const iconPhLightAmazonLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,168v32a6,6,0,0,1-12,0V182.48l-5.66,5.66C225.6,191.15,188.86,230,128,230c-62,0-98.92-40.27-100.46-42a6,6,0,1,1,8.92-8c.34.37,35.09,38,91.54,38s91.2-37.64,91.55-38l.21-.22,5.76-5.76H208a6,6,0,0,1,0-12h32A6,6,0,0,1,246,168ZM162,99.56V84A38,38,0,0,0,90.14,66.73a6,6,0,1,1-10.68-5.46A50,50,0,0,1,174,84v92a6,6,0,0,1-12,0V164.44a50,50,0,1,1,0-64.88ZM162,132a38,38,0,1,0-38,38A38,38,0,0,0,162,132Z"/></svg>`;
}
