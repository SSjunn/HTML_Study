function func1() {
    console.log('fucn1');
}
function func2() {
    console.log('func2');
}
function func3() {
    console.log('func3');
}
// default 는 하나만 된다.
export default function(){ 
    console.log('default');
};
export {func1, func2};