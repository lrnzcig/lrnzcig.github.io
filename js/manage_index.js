function initTagsGAButtons() {

  // TAGS
  function getEventTarget(e) {
    // gets the targeted li
    e = e || window.event;
    return e.target || e.srcElement;
  };

  // events on the ul
  var lastClicked;
  $('#tags-ul').on("click", function(event) {
    // timeout to avoid a glitch when clicked to a different tag
    //window.setTimeout(function() { hideShowDivsForTags(lastClicked); }, 100);
    var target = getEventTarget(event);
    hideShowDivsForTags(target.innerHTML);
    lastClicked = target.innerHTML;
  }).on("focusout", function() {
    lastClicked = '';
    // timeout to avoid a glitch when clicked to a different tag
    window.setTimeout(function() { hideShowDivsForTags(lastClicked); }, 100);
  });

  $(document).click(function(event) {
    if (lastClicked == '') {
      // timeout to avoid a glitch when clicked to a different tag
      //window.setTimeout(function() { hideShowDivsForTags(lastClicked); }, 100);
    }
  });

  // event listeners for google analytics
  uc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'Uplift',
    eventValue: 1 });
  }, false);
  ut.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'Uplift',
    eventValue: 2 });
  }, false);
  ac.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'Arules',
    eventValue: 3 });
  }, false);
  at.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'Arules',
    eventValue: 4 });
  }, false);
  gc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'GASessionId',
    eventValue: 5 });
  }, false);
  gt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'GASessionId',
    eventValue: 6 });
  }, false);
  wc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'WearUpstream',
    eventValue: 7 });
  }, false);
  wt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'WearUpstream',
    eventValue: 8 });
  }, false);
  wrc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'WearUpsRobust',
    eventValue: 9 });
  }, false);
  wrt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'WearUpsRobust',
    eventValue: 10 });
  }, false);
  wpc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'WearPhysical',
    eventValue: 11 });
  }, false);
  wpt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'WearPhysical',
    eventValue: 12 });
  }, false);
  tnc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'WearPhysical',
    eventValue: 11 });
  }, false);
  tnt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'WearPhysical',
    eventValue: 12 });
  }, false);

};

function initOlderNewerListeners() {

  // manage "newer" and "older" buttons
  var older = document.getElementById('older');
  var newer = document.getElementById('newer');
  older.addEventListener('click', function() {
    if (typeof $('#tags-ul').innerHTML == "undefined") {
      if (row1.style.display == 'none') {
        // second time older has been pressed
        row2.style.display = 'none';
        row4.style.display = '';
        older.style.visibility = 'hidden';
      }
      row1.style.display = 'none';
      row3.style.display = '';
      newer.style.visibility = 'visible';
    }
  }, false);
  newer.addEventListener('click', function() {
    if (typeof $('#tags-ul').innerHTML == "undefined") {
      if (row2.style.display == 'none') {
        // older has been pressed 2 times
        row2.style.display = '';
        row4.style.display = 'none';
      } else {
        row1.style.display = '';
        row3.style.display = 'none';
        newer.style.visibility = 'hidden';
      }
      older.style.visibility = 'visible';
    }
  }, false);

};

// handle which elements hide and show depending on the tag that has been clicked
function hideShowDivsForTags(tag_value) {
  var older = document.getElementById('older');
  var newer = document.getElementById('newer');
  if (tag_value == "Uplift modeling" || tag_value == "Business evaluation") {
    row1.style.display = 'none';
    row2.style.display = 'none';
    row3.style.display = 'none';
    row4.style.display = '';
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = '';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    $("#uplift-div").detach().appendTo("#row-4");
    older.style.visibility = 'hidden';
    newer.style.visibility = 'hidden';
  } else if (tag_value == "Association Rules" || tag_value == "Google Analytics") {
    row1.style.display = '';
    row2.style.display = '';
    row3.style.display = 'none';
    row4.style.display = 'none';
    arules.style.display = '';
    gauserid.style.display = '';
    uplift.style.display = 'none';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    $("#gauserid-div").detach().appendTo("#row-2");
    $("#arules-div").detach().appendTo("#row-2");
    older.style.visibility = 'hidden';
    newer.style.visibility = 'hidden';
  } else if (tag_value == "R") {
    row1.style.display = '';
    row2.style.display = '';
    row3.style.display = 'none';
    row4.style.display = 'none';
    arules.style.display = '';
    gauserid.style.display = '';
    uplift.style.display = '';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = '';
    timeseriesnn.style.display = '';
    $("#timeseriesnn-div").detach().appendTo("#row-1");
    $("#wearphysical-div").detach().appendTo("#row-1");
    $("#gauserid-div").detach().appendTo("#row-2");
    $("#arules-div").detach().appendTo("#row-2");
    $("#uplift-div").detach().appendTo("#row-3");
    older.style.visibility = 'hidden';
    newer.style.visibility = 'hidden';
  } else if (tag_value == "Wearables") {
    row1.style.display = '';
    row2.style.display = '';
    row3.style.display = 'none';
    row4.style.display = 'none';
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = '';
    wearrobust.style.display = '';
    wearphysical.style.display = '';
    timeseriesnn.style.display = '';
    $("#timeseriesnn-div").detach().appendTo("#row-1");
    $("#wearphysical-div").detach().appendTo("#row-1");
    $("#wearups-robust-div").detach().appendTo("#row-2");
    $("#wearupstream-div").detach().appendTo("#row-2");
    older.style.visibility = 'hidden';
    newer.style.visibility = 'hidden';
  } else if (tag_value == "Android app") {
    row1.style.display = '';
    row2.style.display = '';
    row3.style.display = 'none';
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = '';
    wearrobust.style.display = '';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    $("#wearups-robust-div").detach().appendTo("#row-1");
    $("#wearupstream-div").detach().appendTo("#row-1");
    older.style.visibility = 'hidden';
    newer.style.visibility = 'hidden';
  } else if (tag_value == "Neural network") {
    row1.style.display = '';
    row2.style.display = '';
    row3.style.display = 'none';
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = '';
    $("#timeseriesnn-robust-div").detach().appendTo("#row-1");
    older.style.visibility = 'hidden';
    newer.style.visibility = 'hidden';
  } else {
    // i.e. no tag has been clicked
    row1.style.display = '';
    row2.style.display = '';
    row3.style.display = 'none';
    row4.style.display = 'none';
    arules.style.display = '';
    gauserid.style.display = '';
    uplift.style.display = '';
    wearupstream.style.display = '';
    wearrobust.style.display = '';
    wearphysical.style.display = '';
    timeseriesnn.style.display = '';
    $("#timeseriesnn-div").detach().appendTo("#row-1");
    $("#wearphysical-div").detach().appendTo("#row-1");
    $("#wearups-robust-div").detach().appendTo("#row-2");
    $("#wearupstream-div").detach().appendTo("#row-2");
    $("#gauserid-div").detach().appendTo("#row-3");
    $("#arules-div").detach().appendTo("#row-3");
    $("#uplift-div").detach().appendTo("#row-4");
    older.style.visibility = 'visible';
    newer.style.visibility = 'hidden';
  }
};

// rows
var row1 = document.getElementById('row-1');
var row2 = document.getElementById('row-2');
var row3 = document.getElementById('row-3');
var row4 = document.getElementById('row-4');
// divs
var arules = document.getElementById('arules-div');
var gauserid = document.getElementById('gauserid-div');
var uplift = document.getElementById('uplift-div');
var wearupstream = document.getElementById('wearupstream-div');
var wearrobust = document.getElementById('wearups-robust-div');
var wearphysical = document.getElementById('wearphysical-div');
var timeseriesnn = document.getElementById('timeseriesnn-div');
// GA events
var uc = document.getElementById('uplift-click');
var ut = document.getElementById('uplift-title');
var ac = document.getElementById('arules-click');
var at = document.getElementById('arules-title');
var gc = document.getElementById('gauserid-click');
var gt = document.getElementById('gauserid-title');
var wc = document.getElementById('wearupstream-click');
var wt = document.getElementById('wearupstream-title');
var wrc = document.getElementById('wearrobust-click');
var wrt = document.getElementById('wearrobust-title');
var wpc = document.getElementById('wearphysical-click');
var wpt = document.getElementById('wearphysical-title');
var tnc = document.getElementById('timeseriesnn-click');
var tnt = document.getElementById('timeseriesnn-title');

// initial state
row3.style.display = 'none';
row4.style.display = 'none';
document.getElementById('newer').style.visibility = 'hidden';

initTagsGAButtons();
initOlderNewerListeners();
