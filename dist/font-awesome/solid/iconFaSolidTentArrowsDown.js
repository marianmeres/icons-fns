export const iconFaSolidTentArrowsDown = (props = {}) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M209.8 111.9c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36L136 24c0-13.3-10.7-24-24-24S88 10.7 88 24l0 122.1-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zm352 0c-8.9-9.9-24-10.7-33.9-1.8l-39.9 36V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V146.1l-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72c9.9-8.9 10.7-24 1.8-33.9zM307.4 166.5c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S86.7 512 96 512H240h16c17.7 0 32-14.3 32-32V361.9c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7H464h16c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>`;
}
