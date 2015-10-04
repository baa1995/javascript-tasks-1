var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии
function isCorrectTime(a,b) {
    return (((a) < 0 || (a) > 23) || ((b) < 0 || (b) > 59) || ((isNaN(hours)) || (isNaN(minutes))))
}

    if (!(isCorrectTime(hours,minutes))) {
        var decades = [' ', 'X', 'XX', 'XXX', 'XL', 'L'];
        var ones = [' ', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        var romeHour1, romeHour2, romeMinut1, romeMinut2;

        if (hours == 0) {
            romeHour1 = '-';
            romeHour2 = '-';
        }
        else {
            romeHour1 = decades[Math.floor(hours / 10)];
            romeHour2 = ones[hours % 10];
        }
        var razdelitel = ':';
        if (minutes === '00') {
            romeMinut1 = '-';
            romeMinut2 = '-';
        }
        else {
            romeMinut1 = decades[Math.floor(minutes / 10)];
            romeMinut2 = ones[minutes % 10];
        }

        var v = 8;                                       //высота римской цифры в ascii графикe
        console.log(romeHour1 + romeHour2 + razdelitel + romeMinut1 + romeMinut2);
        for (var i = 0; i < v; i++) {
            console.log((romeToAscii(romeHour1)[i]) + (romeToAscii(romeHour2)[i]) + (romeToAscii(razdelitel)[i]) +
                (romeToAscii(romeMinut1)[i]) + (romeToAscii(romeMinut2)[i]));
        }
    }
    else  {
        console.log('Время указано не верно');
    }
    
 function romeToAscii (a) {
     switch(a) {
         case ':': return [
             '     ',
             '     ',
             '     ',
             ' (_) ',
             ' (_) ',
             '     ',
             ' (_) ',
             ' (_) '
         ]; break;
         case ' ': return [' ',' ',' ',' ',' ',' ',' ',' ']; break;
         case '-': return ['     ','     ','     ','-----','     ','     ','     ','     ']; break;
         case 'I': return [
             '_ _ _ ',
             ' (_)  ',
             ' (_)  ',
             ' (_)  ',
             ' (_)  ',
             ' (_)  ',
             ' (_)  ',
             '_(_)_ '
         ]; break;
         case 'II': return [
             '__ _ __ _ __',
             '  (_)  (_)  ',
             '  (_)  (_)  ',
             '  (_)  (_)  ',
             '  (_)  (_)  ',
             '  (_)  (_)  ',
             '  (_)  (_)  ',
             '__(_)__(_)__'
         ]; break;
         case 'III': return [
             '__ _ __ _ __ _ __',
             '  (_)  (_)  (_)  ',
             '  (_)  (_)  (_)  ',
             '  (_)  (_)  (_)  ',
             '  (_)  (_)  (_)  ',
             '  (_)  (_)  (_)  ',
             '  (_)  (_)  (_)  ',
             '__(_)__(_)__(_)__'
         ]; break;
         case 'IV': return [
             '_ _ _  _           _   ',
             ' (_)  (_)         (_)  ',
             ' (_)  (_)         (_)  ',
             ' (_)  (_)_       _(_)  ',
             ' (_)    (_)     (_)    ',
             ' (_)     (_)   (_)     ',
             ' (_)      (_)_(_)      ',
             '_(_)_       (_)        '
         ]; break;
         case 'V': return [
             ' _           _   ',
             '(_)         (_)  ',
             '(_)         (_)  ',
             '(_)_       _(_)  ',
             '  (_)     (_)    ',
             '   (_)   (_)     ',
             '    (_)_(_)      ',
             '      (_)        '
         ]; break;
         case 'VI': return [
             ' _           _  _ _ _ ',
             '(_)         (_)  (_)  ',
             '(_)         (_)  (_)  ',
             '(_)_       _(_)  (_)  ',
             '  (_)     (_)    (_)  ',
             '   (_)   (_)     (_)  ',
             '    (_)_(_)      (_)  ',
             '      (_)       _(_)_ '
         ]; break;
         case 'VII': return [
             ' _           _  _ _ _ _ _ _ ',
             '(_)         (_)  (_)   (_)  ',
             '(_)         (_)  (_)   (_)  ',
             '(_)_       _(_)  (_)   (_)  ',
             '  (_)     (_)    (_)   (_)  ',
             '   (_)   (_)     (_)   (_)  ',
             '    (_)_(_)      (_)   (_)  ',
             '      (_)       _(_)_ _(_)_ '
         ]; break;
         case 'VIII': return [
             ' _           _  _ _ _ _ _ _ ',
             '(_)         (_)  (_)   (_)   (_) ',
             '(_)         (_)  (_)   (_)   (_) ',
             '(_)_       _(_)  (_)   (_)   (_) ',
             '  (_)     (_)    (_)   (_)   (_) ',
             '   (_)   (_)     (_)   (_)   (_) ',
             '    (_)_(_)      (_)   (_)   (_) ',
             '      (_)       _(_)_ _(_)_ _(_)_'
         ]; break;

         case 'IX': return  [
             '_ _ _  _           _ ',
             ' (_)  (_)_       _(_)',
             ' (_)    (_)_   _(_)  ',
             ' (_)      (_)_(_)    ',
             ' (_)       _(_)_     ',
             ' (_)     _(_) (_)_   ',
             ' (_)   _(_)     (_)_ ',
             '_(_)_ (_)         (_)'
         ]; break;
         case 'X': return  [
             ' _           _ ',
             '(_)_       _(_)',
             '  (_)_   _(_)  ',
             '    (_)_(_)    ',
             '     _(_)_     ',
             '   _(_) (_)_   ',
             ' _(_)     (_)_ ',
             '(_)         (_)'
         ]; break;
         case 'XX': return  [
             ' _           _   _           _ ',
             '(_)_       _(_) (_)_       _(_)',
             '  (_)_   _(_)     (_)_   _(_)  ',
             '    (_)_(_)         (_)_(_)    ',
             '     _(_)_           _(_)_     ',
             '   _(_) (_)_       _(_) (_)_   ',
             ' _(_)     (_)_   _(_)     (_)_ ',
             '(_)         (_) (_)         (_)'
         ]; break;
         case 'XXX': return  [
             ' _           _   _           _   _           _ ',
             '(_)_       _(_) (_)_       _(_) (_)_       _(_)',
             '  (_)_   _(_)     (_)_   _(_)     (_)_   _(_)  ',
             '    (_)_(_)         (_)_(_)         (_)_(_)    ',
             '     _(_)_           _(_)_           _(_)_     ',
             '   _(_) (_)_       _(_) (_)_       _(_) (_)_   ',
             ' _(_)     (_)_   _(_)     (_)_   _(_)     (_)_ ',
             '(_)         (_) (_)         (_) (_)         (_)'
         ]; break;
         case 'XL': return  [
             ' _           _    _             ',
             '(_)_       _(_)  (_)            ',
             '  (_)_   _(_)    (_)            ',
             '    (_)_(_)      (_)            ',
             '     _(_)_       (_)            ',
             '   _(_) (_)_     (_)            ',
             ' _(_)     (_)_   (_)            ',
             '(_)         (_)  (_)(_)(_)(_)(_)'
         ]; break;
         case 'L': return  [
             '  _             ',
             ' (_)            ',
             ' (_)            ',
             ' (_)            ',
             ' (_)            ',
             ' (_)            ',
             ' (_)            ',
             ' (_)(_)(_)(_)(_)'
         ]; break;

     }
     }

