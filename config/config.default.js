const path = require('path');

module.exports = (appInfo) => ({
    static: {
        dir: path.join(appInfo.baseDir, 'client/public'),
    },
    keys: 'c1o2o3k4i5e',
});
