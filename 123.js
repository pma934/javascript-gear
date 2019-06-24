function Scope() {
  this.$$watchersCount = 0;
  this.$$watchList = [];
}

Scope.prototype.$watch = function (name, getNewValue, listener) {
  var watch = {
      name: name,
      getNewValue: getNewValue,
      listener: listener
  };
  this.$$watchList.push(watch);
}

Scope.prototype.$$digestOnce = function () {
  var dirty;
  var list = this.$$watchList;
  for (var i = 0, l = list.length; i < l; i++) {
      var watch = list[i];
      var newValue = watch.getNewValue(this.name);
      var oldValue = watch.last;
      if (newValue !== oldValue) {
          watch.listener(newValue, oldValue);
          // 因为listener操作，已经检查过的数据可能变脏
          dirty = true;
      }
      watch.last = newValue;
  }
  return dirty;
};
Scope.prototype.$digest = function () {
  var dirty = true;
  var checkTimes = 0;
  while (checkTimes<10 && dirty) {
      checkTimes++
      dirty = this.$$digestOnce();
  }
};

var scope = new Scope();
scope.first = 1;
scope.second = 10;
scope.$watch('first', function () {
    return scope[''+this.name]
}, function (newValue, oldValue) {
    scope.second++;
    console.log('first:newValue:' + newValue + '~~~~' + 'oldValue:' + oldValue);
})
scope.$watch('second', function () {
    return scope[''+this.name]
}, function (newValue, oldValue) {
    scope.first++;
    console.log('second:newValue:' + newValue + '~~~~' + 'oldValue:' + oldValue);
})
scope.$digest();