var firstComment = $('.commentarea .sitetable .thing .entry .tagline .expand').first();
var focusedComment = firstComment.focus();

$('body').on('keypress', function(key) {
    switch(key.which) {
        case 106: // j = 106
            console.log('j');
            break;
        case 107: // k = 107
            console.log('k');
            break;
        case 111: // o = 111
            console.log('o');
            focusedComment.click();
            break;
    }
});
