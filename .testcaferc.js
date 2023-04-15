module.exports = {
    browsers: "chrome",
    src: "./tests/**/**.js",
    baseUrl: "https://hudl.com/login",
    reporter: {
        name: "spec",
        output: "artifacts/reports/testResults.txt"
    },
    screenshots: {
        path: "artifacts/screenshots/",
        takeOnFails: true,
        pathPattern: "${DATE}_${TIME}/Test - ${TEST}/${USERAGENT}/Test - ${TEST}_${BROWSER}_${BROWSER_VERSION}.png",
        fullPage: true,
        takeOnFails: true,
        thumbnails: false
    },
    quarantineMode: {
        successThreshold: 1,
        attemptLimit: 2
    },
    nativeAutomation: true,
    skipJsErrors: true,
    skipUncaughtErrors: true,
    concurrency: 5,
    selectorTimeout: 5000,
    assertionTimeout: 5000,
    pageLoadTimeout: 5000,
    pageRequestTimeout: 5000,
    testExecutionTimeout: 300000,
    runExecutionTimeout: 600000
}
