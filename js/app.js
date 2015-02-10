var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

  this.nicknames = ko.observableArray(['tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']);

  this.level = ko.computed(function() {
    if (this.clickCount() < 10) return 'Newborn';
    if (this.clickCount() < 50) return 'Infant';
    if (this.clickCount() < 100) return 'Child';
    if (this.clickCount() < 200) return 'Teen';
    if (this.clickCount() < 500) return 'Adult';
    return 'Ninja';
  }, this);
}

var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());