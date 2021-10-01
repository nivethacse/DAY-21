console.log('Hi')

const counter = document.querySelector('.counter');
const greet = document.querySelector('.greeting');


const greeting = (timer) => {

    setTimeout(() => {
        counter.innerHTML = timer;
        setTimeout(() => {
            timer = timer - 1;
            counter.innerHTML = timer;
            setTimeout(() => {
                timer = timer - 1;
                counter.innerHTML = timer;
                setTimeout(() => {
                    timer = timer - 1;
                    counter.innerHTML = timer;
                    setTimeout(() => {
                        timer = timer - 1;
                        counter.innerHTML = timer;
                        setTimeout(() => {
                            timer = timer - 1;
                            counter.innerHTML = timer;
                            setTimeout(() => {
                                timer = timer - 1;
                                counter.innerHTML = timer;
                                setTimeout(() => {
                                    timer = timer - 1;
                                    counter.innerHTML = timer;
                                    setTimeout(() => {
                                        timer = timer - 1;
                                        counter.innerHTML = timer;
                                        setTimeout(() => {
                                            timer = timer - 1;
                                            counter.innerHTML = timer;
                                            setTimeout(() => {
                                                timer = timer - 1;
                                                counter.innerHTML = '';
                                                greet.innerHTML = 'Happy Independence day..!!';
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

greeting(10);
