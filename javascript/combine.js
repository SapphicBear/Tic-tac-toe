// All modules will come through here before passing into the index.js

import * as DOM from "./DOM.js";
import * as listener from "./listener.js";
import * as handler from "./handler.js";
import * as player from "./players.js";
import * as game from "./gameLogic.js";

export { DOM, listener, handler, player, game };