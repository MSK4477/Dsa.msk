var longestNiceSubstring = function(s) {
    let a = 'a'.charCodeAt(0), A = 'A'.charCodeAt(0);
    var maxset, has, ones, twos;
    var i, l, c;
    let maxlen = 0, maxstr="";
    
    for( l=0; l<s.length; l++ ) { // shiftable left pointer

        has = new Array(26).fill(0);
        ones = twos = 0;
        maxset = false;
        for( i=l; i<s.length; i++ ) { // find longest working trace in this sector
            c = s.charCodeAt(i);

            if( c >= a ) { // found lowercase
                if( has[c-a] == 0 ) {
                    has[c-a] = 1;
                    ones++;
                } else if( has[c-a] == 2 ) {
                    has[c-a] = 3;
                    twos--;
                }
            } else {
                if( has[c-A] == 0 ) {
                    has[c-A] = 2;
                    twos++;
                } else if( has[c-A] == 1 ) {
                    has[c-A] = 3;
                    ones--;
                }
            }

            if( ones == 0 && twos == 0 ) {
                if( i+1-l > maxlen ) {
                    maxlen = i+1-l;
                    maxset = true;
                }
            }
        }
        
        if( maxset )
            maxstr = s.substr(l,maxlen);
    }
    
    return maxstr;
};