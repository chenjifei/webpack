console.log("-------- index ---------");
var importBtn = document.querySelector("#es6Import");
var nodeReuireBtn = document.querySelector("#nodeReuire");
var requireEnsureBtn = document.querySelector("#requireEnsure");
var amdBtn = document.querySelector("#amd");
importBtn.addEventListener("click", function () {
    var es6Import = import(/*webpackChunkName:'es6.import' */"./import.js").then(function (module) {
        console.log(module, module.default);
        var test = module.default;
        test();
    });
}, false);
nodeReuireBtn.addEventListener("click", function () {
    var nodeRequire = require("./node.require").default;
    console.log(nodeRequire());
}, false);
requireEnsureBtn.addEventListener("click", function () {

    var requireEnsure = require.ensure([], function (require) {
        var re = require("./require.ensure");
        console.log(re, re.default);
        var test = re.default;
        test();
    }, "require.ensure");
}, false);
amdBtn.addEventListener("click", function () {
    var amd = require(["./amd.js"], function (amdArgs) {
        console.log(amdArgs, amdArgs.default, amdArgs.default())

    });
    console.log(amd);

}, false);