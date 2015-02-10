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

var initialCats = [
  {
    name: 'Tabby',
    clickCount: 0,
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
  },
  {
    name: 'Tiger',
    clickCount: 0,
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    nicknames: ['Tigger']
  },
  {
    name: 'Scaredy',
    clickCount: 0,
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    nicknames: ['Casper']
  },
  {
    name: 'Shadow',
    clickCount: 0,
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    nicknames: ['Shooby']
  },
  {
    name: 'Sleepy',
    clickCount: 0,
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    nicknames: ['Zzzzz']
  }
];

var ViewModel = function() {
  var self = this;
  
  self.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  self.currentCat = ko.observable(self.catList()[0]);

  self.changeCurrentCat = function(currentCat) {
    self.currentCat(currentCat);
  };

  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());