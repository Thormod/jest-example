module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Tests",
            "outputPath": "reports/test-report.html",
            "includeFailureMsg": false,
        }]
    ]
};