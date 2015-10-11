var populateName = function(firstName, lastName) {

  var firstList = [
    'Adams','Afton','Alamo','Ardmore','Ready','Ridge','Roan','Taft','Talbott','Turtle','Trezevant','Tiny','Whitwell','Sardis','Shiloh','Rutledge','Rives','Pleasant View','Parsons','Pelham','McDonald','Mansfield','Macon','Jasper','old','Mohawk',
  ];


  var secondList = [
   'ville','','Creek','burg','Home','Port','land','field','fort','top'
  ];

  var randomFirstName = firstList[Math.floor(Math.random() * firstList.length)];
  $(firstName).html(randomFirstName);

  var randomLastName = secondList[Math.floor(Math.random() * secondList.length)];
  $(lastName).html(randomLastName);

};

$('.populate').on('click', function() {
  populateName('.first', '.second');
});
