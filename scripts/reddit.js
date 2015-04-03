'use strict';

$(function() {

  var firstComment = $('.sitetable .thing .entry .tagline .expand').first();
  // Set focusedComment to null initially, so that it doesn't steal any default focus.
  var focusedComment = null;

  $('body').on('keypress', function(key) {
    if(document.activeElement.tagName === 'INPUT') {
      // Don't mess with input elements
      return;
    }
    if(!focusedComment) {
      // Nothing is in focus right now, bring first comment in focus to start with.
      focusedComment = firstComment.focus();
      return;
    }
    switch(key.which) {
      case 106: // j = 106
        focusedComment = focusNextComment();
      break;
      case 107: // k = 107
        focusedComment = focusPreviousComment();
      break;
      case 119: // w = 119
        case 108: // l = 108
        focusedComment = focusNextChildComment();
      break;
      case 98: // b = 98
        case 104: // h = 104
        focusedComment = focusPreviousChildComment();
      break;
      case 111: // o = 111
        focusedComment.click();
      break;
    }
  });

  var focusCommentToggleElement = function(commentContainer) {
    /*
     * [-] [+] thing
     */
    var element = commentContainer.find('.entry .tagline .expand').first();
    focusedComment = element.length ? element.focus() : focusedComment;
    return focusedComment;
  };

    var focusNextComment = function(element) {
      element = element || focusedComment;
      var nextCommentContainer = element.closest('.thing').nextAll('.thing:first');
      return focusCommentToggleElement(nextCommentContainer);
    };

    var focusPreviousComment = function(element) {
      element = element || focusedComment;
      var previousCommentContainer = element.closest('.thing').prevAll('.thing:first');
      return focusCommentToggleElement(previousCommentContainer);
    };

    var focusNextChildComment = function(element) {
      element = element || focusedComment;
      var nextChildCommentContainer = element.closest('.thing').find('.sitetable .thing').first();
      return focusCommentToggleElement(nextChildCommentContainer);
    };

    var focusPreviousChildComment = function(element) {
      element = element || focusedComment;
      var previousChildCommentContainer = element.closest('.child').closest('.thing').first();
      return focusCommentToggleElement(previousChildCommentContainer);
    };

    var focusClickedComment = function(element) {
      var commentContainer = element.closest('.thing');
      return focusCommentToggleElement(commentContainer);
    };

    $('.thing.comment .entry').on('click',function() {
      focusClickedComment($(this));
    });
  });
