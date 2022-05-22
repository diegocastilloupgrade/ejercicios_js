const testMeElements$$ = document.querySelectorAll('[data-function="testMe"]')

console.log(testMeElements$$);

for (let i = 0; i < testMeElements$$.length; i++) {
    console.log(testMeElements$$[i].innerHTML);
}