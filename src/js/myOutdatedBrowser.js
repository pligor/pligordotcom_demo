/**
 * Created by pligor on 6/1/15.
 */

function MyOutdatedBrowser() {
    //TODO create a public api to have these set from the cloud rather than having them hardcoded in typescript
    var browsers = {
        GoogleChrome: {
            name: "chrome",
            version: 43
        },
        MozillaFirefox: {
            name: "firefox",
            version: 38
        },
        InternetExplorer: {
            name: "msie",
            version: 11
        },
        AppleSafari: {
            name: "safari",
            version: 8
        },
        Opera: {
            name: "opera",
            version: 29
        }
    }

    function getBrowserKeys() {
        return Object.getOwnPropertyNames(browsers)
    }

    function isBrowserOutdated(curBrowser) {
        var curBrowserName = curBrowser.name.toLowerCase()

        var keys = getBrowserKeys()

        for(var i=0; i< keys.length ; i++) {
            var browser = browsers[keys[i]]

            if(curBrowserName === browser.name) {
                return curBrowser.version < browser.version;
            } else {
                //continue
            }
        }

        return true;  //browser is found and version is equal or great than ours
    }

    /**
     * http://stackoverflow.com/a/16938481/720484
     * @returns {any}
     */
    function get_browser_info() {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name: 'IE ', version: (tem[1] || '')};
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/)
            if (tem != null) {
                return {name: 'Opera', version: tem[1]};
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    }

    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }

    var blockID = "outdated"
    var closeButtonID = "btnCloseUpdateBrowser"

    addLoadEvent(function() {
        if(isBrowserOutdated(get_browser_info())) {
            var block = document.getElementById(blockID)

            //show
            block.setAttribute("style", "display: block;height: 260px")

            document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden")

            document.getElementById(closeButtonID).onclick = function(event) {
                block.parentNode.removeChild(block)
                document.getElementsByTagName("body")[0].setAttribute("style", "overflow: auto")
            }
        } else {
            //nop
        }
    })
}

MyOutdatedBrowser()
