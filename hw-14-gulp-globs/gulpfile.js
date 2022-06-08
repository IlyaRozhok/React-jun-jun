const {src, dest} = require('gulp')

const copyAllFontsSvg = () => {
    return src('./src/fonts/**/*.svg')
        .pipe(dest('build/svg/'))
}

const copyAllCss = () => {
    return (src('./src/**/*.css'))
        .pipe(dest('./build/css'))
}

exports.copyFontsSvg = copyAllFontsSvg;
exports.copyStyles = copyAllCss;
