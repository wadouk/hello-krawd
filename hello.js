const f = (fn) => {
    var delay = Math.random() * 100;
    return new Promise((resolve) => setTimeout(() => {
        console.log(fn, delay);
        resolve();
    }, delay));
};

const step = (fs) => {
    var i = 0;
    const stepNext = () => {
        if (i < fs.length - 1) {
            i++;
            fs[i](stepNext);
        }
    };
    fs[0](stepNext);
};

Promise.all([f("f1"), f("f2"), f("f3")]).then(() => console.log("done"));
