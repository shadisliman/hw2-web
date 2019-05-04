function encode(input) {
    // check that input is valid string (lowercase a-z, 
    // digits, dot, comma size limit = 6 to 20)
    if (/^[a-z\.\,\d]{6,20}$/.test(input)) {
        let ret_value = input.split("");
        let dont_switch = [];
        let chr_ascii_const = 'a'.charCodeAt(0);
        let letter_range = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        for (let i = 0; i < input.length; i++) {
            let chr = ret_value[i];
            // convert letters to +3 letter ie. [a->d], [b->e], [x->a], [y->b], [z->c]
            if (/[a-z]+/.test(chr)) {
                let new_chr = String.fromCharCode((chr.charCodeAt(0) - chr_ascii_const + 3) % letter_range + chr_ascii_const);
                ret_value[i] = new_chr;
            }
            // convert digits to |10-digit|
            else if (/\d/.test(Number(chr)) && !/0/.test(Number(chr))) {
                ret_value[i] = Math.abs(chr - 10);
            }
            // convert dots and commas, from index position k to position string_length - k - 1 
            // ie. [ab. -> .ed]. does not switch dots and commas twice [.a, -> ,d.]
            else {
                let to_idx = input.length - i - 1;
                if (!(dont_switch.includes(i) || dont_switch.includes(to_idx))) {
                    swap(ret_value, i, to_idx);
                    dont_switch.push(i);
                    dont_switch.push(to_idx);
                }
            }
        }
        return ret_value.join("");
    }
    return null;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}