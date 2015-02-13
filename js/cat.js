var Cat = function(data) {
  this.name = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    if (this.clickCount() < 10) return 'Newborn';
    if (this.clickCount() < 50) return 'Infant';
    if (this.clickCount() < 100) return 'Child';
    if (this.clickCount() < 200) return 'Teen';
    if (this.clickCount() < 500) return 'Adult';
    return 'Ninja';
  }, this);
};
