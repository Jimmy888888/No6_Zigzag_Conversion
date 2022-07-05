/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//numRows 2numRows-2
 var convert = function(s, numRows) {
    /*
    //////////////
    a       d
    a     d d
    a   c   d
    a b     d
    a       d
    //////////////
    2

    4
    2 2
    4

    6
    4 2
    2 4
    6

    8 
    6 2
    4 4
    2 6
    8
    ///////////////
    n = 4
    0 + 2*(n - 1) 2*(n - (n-0))
    1 + 2*(n - 2) 2*(n - (n-1))
    2 + 2*(n - 3) 2*(n - (n-2))
    n + 2*(n - n) 2*(n - (n-n))
    (m - 1) + (2n - 2*(m))  m = 1....n
    */
    /*
    n = numRows-1
    for(let i = 0; i < numRows; i++ )
    {
        index_jump = i;
        jump1 = 2*(n - i);
        jump2 = 2*(i);
        for( index_jump < s.length )
        {
            ans.push(s[index_jump]);
            index_jump += ( switch == 1 ) ? jump1 : jump2;
            switch *= -1;
        }
    }
    */
    if( numRows == 1)
    {
        return s;
    }

    let ans_str = [];
    let n = numRows-1; //2*3
    let mode = 1;
    let index_jump = 0;
    for(let i = 0; i < numRows; i++ )
    {
        index_jump = i;
        mode = 1;
        jump1 = 2*(n - i);
        jump2 = 2*(i);
        jump1 = ( jump1 == 0 ) ? jump2 : jump1;
        jump2 = ( jump2 == 0 ) ? jump1 : jump2;
        while( index_jump < s.length )
        {
            ans_str += s[index_jump];
            index_jump += ( mode == 1 ) ? jump1 : jump2;
            mode *= -1;
        }
    }
    return ans_str;
};
let s = "PAYPALISHIRING";
console.log(convert(s, 4));
/*
"PAYPALISHIRING"
3

p   a   h   n
a p l s i i g
y   i   r


"PAYPALISHIRING"
4

P     I     N
A   L S   I G
Y A   H R
P     I
*/