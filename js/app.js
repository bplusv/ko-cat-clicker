var ViewModel = function() {
  var self = this;
  self.catList = ko.observableArray([]);
  self.currentCat = ko.observable({});

  self.init = function() {
    return $.getJSON('cats.json').then(function(initialCats) {
      initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
      });
      self.currentCat(self.catList()[0])
    });
  };

  self.changeCurrentCat = function(currentCat) {
    self.currentCat(currentCat);
  };

  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

vm = new ViewModel();
vm.init().then(function() {
  ko.applyBindings(vm);
});
