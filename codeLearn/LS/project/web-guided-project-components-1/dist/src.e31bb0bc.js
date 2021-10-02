// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/panelData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var panelData = [{
  title: "Vigilante",
  content: "No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an idel and if they can't stop you then you become something else entirely. Legend, Mr Wayne."
}, {
  title: "The Mountain",
  content: "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place."
}, {
  title: "A World without Batman",
  content: "I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring. I've had a change of heart. I don't want Mr Reese spoiling everything but why should I have all the fun? Let's give someone else a chance. If Coleman Reese isn't dead in 60 minutes then I blow up a hospital."
}, {
  title: "Balance",
  content: "I'm here to ensure the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die."
}];
var _default = panelData;
exports.default = _default;
},{}],"data/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var open = "\u25BC";
var close = "\u25B2";
var _default = {
  open: open,
  close: close
};
exports.default = _default;
},{}],"data/linkData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var linkData = [{
  href: '#',
  className: 'nav-item',
  text: 'Home'
}, {
  href: '#',
  className: 'nav-item',
  text: 'About'
}, {
  href: '#',
  className: 'nav-item',
  text: 'Blog'
}, {
  href: '#',
  className: 'nav-item',
  text: 'Contact'
}];
var _default = linkData;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _panelData = _interopRequireDefault(require("./data/panelData.js"));

var _constants = _interopRequireDefault(require("./data/constants.js"));

var _linkData = _interopRequireDefault(require("./data/linkData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
var imageData = [{
  imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg'
}, {
  imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg'
}, {
  imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg'
}];

function makeImage(_ref) {
  var imageURL = _ref.imageURL;
  // step oone : Create the element
  var image = document.createElement('img'); // step two: [optional]: add content to the element

  image.src = imageURL; // step three [optional]:add styling

  image.style.height = '10em'; // step four: return the element

  return image;
}

imageData.forEach(function (item) {
  //console.log(item.imageURL);
  // makeImage(item.imageURL)
  //makeImage(item)
  var imgElement = makeImage(item); //document.body.prepend(imgElement);
  //ioidocument.body.appendChild(imgElement);
});
imageData.forEach(function (imgObj) {
  var imgElement = makeImage(imgObj);
  document.body.prepend(imgElement);
}); // TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants

// TASK 2- Verify our imports using log statements
// console.log(panelData) // log the panelData
// console.log(constants) // log the open arrow
// console.log(linkData) // log the close arrow
var open = _constants.default.open,
    close = _constants.default.close; // {open: 'asdf', close: 'blah'}
// const open = constants.open
// const close = constants.close
// console.log(open);
// console.log(close);
// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.

var accordion = document.querySelector('.accordion'); // console.log(accordion);
// <div class="panel">
//   <div class="panel-bar">
//     <h3>Title of Panel</h3>
//     <div class="panel-buttons">
//       <button class="panel-btn-open">&#9660</button>
//       <button class="panel-btn-close hide-btn">Close</button>
//     </div>
//   </div>
//   <div class="panel-content toggle-on">
//     Content of panel
//   </div>
// </div>
// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.

function makePanel(_ref2) {
  var title = _ref2.title,
      content = _ref2.content;
  // TASK 5- Instantiate all the elements needed for a panel
  var panel = document.createElement('div');
  var panelBar = document.createElement('div');
  var panelContent = document.createElement('div');
  var panelTitle = document.createElement('h3');
  var panelButtons = document.createElement('div');
  var openButton = document.createElement('button');
  var closeButton = document.createElement('button'); // document.body.prepend(panel);
  // TASK 6- Setup the structure of our elements

  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */

  panel.appendChild(panelBar);
  panel.appendChild(panelContent);
  panelBar.appendChild(panelTitle);
  panelBar.appendChild(panelButtons);
  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton); // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden

  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  panelButtons.classList.add('panel-buttons');
  openButton.classList.add('panel-btn-open');
  closeButton.classList.add('panel-btn-close', 'hide-btn');
  panelContent.classList.add('panel-content', 'toggle-on'); // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file

  panelTitle.textContent = title;
  panelContent.textContent = content;
  openButton.textContent = open;
  closeButton.textContent = close; // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)

  panelButtons.addEventListener('click', function () {
    openButton.classList.toggle('hide-btn');
    closeButton.classList.toggle('hide-btn');
    panelContent.classList.toggle('toggle-on');
    console.log(panelTitle.textContent);
  }); // don't forget to return the panel!

  return panel;
} //const panelElement = makePanel({title:'MJ', content:'ggg'});


var panelElements = _panelData.default.map(function (panelElem) {
  return makePanel(panelElem);
}); // TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.
// accordion.appendChild(panelElement);


panelElements.forEach(function (panelElement) {
  accordion.appendChild(panelElement);
}); // [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.

function linkMaker(_ref3) {
  var href = _ref3.href,
      className = _ref3.className,
      text = _ref3.text;
  // const href = obj.href;
  // const className = obj.className
  var link = document.createElement('a');
  link.href = href;
  link.className = className;
  link.textContent = text;
  return link;
}

_linkData.default.forEach(function (linkObj) {
  var linkElem = linkMaker(linkObj);
  document.querySelector('nav').appendChild(linkElem); // const navEl = document.querySelector('nav');
  // document.querySelector('.main-nav');
  // navEl.appendChild(linkElem);
});
},{"./data/panelData.js":"data/panelData.js","./data/constants.js":"data/constants.js","./data/linkData.js":"data/linkData.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63334" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map