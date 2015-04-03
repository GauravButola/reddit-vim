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
        case 111: // o = 111
            console.log('o');
            focusedComment.click();
            break;
    }
});

var focusNextComment = function(element) {
  element = element || focusedComment;
  // Go up the DOM and find the closest `.thing` (comment container)
  var commentContainer = element.closest('.thing');
  // Find the next sibling comment; focus and return it.
  return commentContainer.nextAll('.thing:first').find('.entry .tagline .expand').first().focus();
};

var focusPreviousComment = function(element) {
  element = element || focusedComment;
  // Go up the DOM and find the closest `.thing` (comment container)
  var commentContainer = element.closest('.thing');
  // Find the previous sibling comment; focus and return it.
  return commentContainer.prevAll('.thing:first').find('.entry .tagline .expand').first().focus();
};
