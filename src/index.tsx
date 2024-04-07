(function () {
  function hello() {
    return 'hello';
  }
  function world() {
    return 'world';
  }
  //@ts-ignore
  global.s = hello() + ' ' + world();
  //@ts-ignore
  console.log(s);
})();
