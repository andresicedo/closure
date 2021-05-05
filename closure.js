function outerFunction(outerVariable) {
    const outer2 = 'Hello';
    return function innerFunction(innerVariable) {
        console.log(outerVariable);//outside
        console.log(innerVariable);//inside
        console.log(outer2);//Hello
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');