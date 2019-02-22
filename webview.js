"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('mail-NestedList-Item-Info-Link-Text').length > 0) {
      if (document.getElementsByClassName('mail-NestedList-Item-Info-Link-Text')[0].innerHTML != null) {
        count = parseInt(document.getElementsByClassName('mail-NestedList-Item-Info-Link-Text')[0].innerHTML, 10);
      }
    }

    count = parseInt(count, 10);

    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};