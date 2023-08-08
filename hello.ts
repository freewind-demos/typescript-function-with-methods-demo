const hello = () => {
    console.log("### hello", hello.friend)
    hello.test();
}

hello.friend = 'MyTest';

hello.test = () => {
    console.log("### test")
}

hello();