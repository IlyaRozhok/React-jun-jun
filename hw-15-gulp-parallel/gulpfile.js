const {src, dest, parallel} = require('gulp')

const copyAllFontsTtf = () => {
    return (src('./src/fonts/**/*.ttf'))
        .pipe(dest('./build/fonts'))
}

const copyAllFontsWoff = () => {
    return (src('./src/fonts/**/*.woff'))
        .pipe(dest('./build/fonts'))
}

const copyAllFontsWoff2 = () => {
    return (src('./src/fonts/**/*.woff2'))
        .pipe(dest('./build/fonts'))
}

exports.copyFonts = parallel(copyAllFontsTtf, copyAllFontsWoff, copyAllFontsWoff2);

exports.copyTtf = copyAllFontsTtf;
exports.copyWoff = copyAllFontsWoff;
