var review_ref = new Firebase('https://giantbutts.firebaseio.com/sessions')
review_ref.on('value', makeDivs);
var sessions
function makeDivs(ds) {
  var sessiondata
  sessions = ds.exportVal();
  sessionsdiv = $('#sessions')
  sessionsdiv.append('<div id="' + ds.key() + '"></div>')
  sessionsdiv.empty();
  for (var s in sessions ) {
    sessiondata = sessions[s];
    sessionsdiv.append('</br>Session:<div class="url">'
                  +sessiondata.name
                  +'</div></br>'
                  +'Phone: </br><div class="url">'
                  +sessiondata.phone
                  +'</div></br>'
                  +'Status: </br><div class="url">'
                  +sessiondata.status
                  +'</div></br>'
                  );
  }
}
