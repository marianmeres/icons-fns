export const iconPhThinAirplaneLandingThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,216a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8H248A4,4,0,0,1,252,216Zm-21.08-28.15L54.29,138.4A36.12,36.12,0,0,1,28,103.73V48A12,12,0,0,1,43.79,36.63l5.48,1.82a4,4,0,0,1,2.49,2.44L63.07,72.18,100,82.71V48a12,12,0,0,1,15.79-11.38l5.48,1.82a4,4,0,0,1,2.42,2.25l23.25,55.42,62.7,17.52A36.1,36.1,0,0,1,236,148.33V184a4,4,0,0,1-5.08,3.85ZM228,148.33a28.07,28.07,0,0,0-20.51-27l-64.57-18a4,4,0,0,1-2.61-2.31L117,45.47l-3.75-1.25A4,4,0,0,0,108,48V88a4,4,0,0,1-5.1,3.85l-44-12.54a4,4,0,0,1-2.66-2.49L44.9,45.43l-3.64-1.21a3.95,3.95,0,0,0-3.6.55A4,4,0,0,0,36,48v55.72a28.1,28.1,0,0,0,20.45,27l171.55,48Z"/></svg>`;
}