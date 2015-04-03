var firstComment = $('.commentarea .sitetable .thing .entry .tagline .expand').first();
var focusedComment = firstComment.focus();

$('body').on('keypress', function(key) {
    switch(key.which) {
        case 106: // j = 106
            console.log('j');
            focusedComment = focusNextComment();
            break;
        case 107: // k = 107
            console.log('k');
            focusedComment = focusPreviousComment();
            break;
        case 119: // w = 119
            console.log('w');
            focusedComment = focusNextChildComment();
            break;
        case 98: // b = 98
            console.log('b');
            focusedComment = focusPreviousChildComment();
            break;
        case 111: // o = 111
            console.log('o');
            focusedComment.click();
            break;
        default:
          console.log(key.which);
    }
});

var focusCommentToggleElement = function(commentContainer) {
   /*
    * [-] [+] thing
    */
   return commentContainer.find('.entry .tagline .expand').first().focus();
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
