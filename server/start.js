require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: [
        "@babel/plugin-proposal-class-properties",
    ]

});

module.exports = require('./server.js');
