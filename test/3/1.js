console.log("ffff");

// function foo(a, b, ...rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }
// foo(1, 2, 3, 4, 5);

'use strict';

function area_of_circle(r, pi) {
    return r*r*pi;

}
console.log(area_of_circle(2,3.14));
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}

'use strict';

function max(a, b) {
    if (a > b) {
        return {
                a
};

    } else {
        return {
                b
};
    }

}
console.log(max(15, 20));