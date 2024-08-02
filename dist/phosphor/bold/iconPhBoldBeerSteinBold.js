export const iconPhBoldBeerSteinBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,84H204V72a44.05,44.05,0,0,0-44-44h-9.73C137.77,17.78,121.18,12,104,12,66.5,12,36,38.92,36,72V208a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20v-4h12a28,28,0,0,0,28-28V112A28,28,0,0,0,216,84ZM104,36c12.85,0,25,4.62,33.44,12.67a12,12,0,0,0,8.3,3.33H160a20,20,0,0,1,19.6,16H60.28C62.72,50,81.39,36,104,36Zm76,168H60V92H180Zm40-28a4,4,0,0,1-4,4H204V108h12a4,4,0,0,1,4,4ZM108,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Zm48,0v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Z"/></svg>`;
}
