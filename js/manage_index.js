function initTagsGAButtons() {

  // TAGS
  function getEventTarget(e) {
    // gets the targeted li
    e = e || window.event;
    return e.target || e.srcElement;
  };

  // events on the ul
  $('#tags-ul').on("click", function(event) {
    // timeout to avoid a glitch when clicked to a different tag
    //window.setTimeout(function() { hideShowDivsForTags(lastTagClicked); }, 100);
    var target = getEventTarget(event);
    hideShowDivsForTags(target.innerHTML);
    if (lastTagClicked) {
        lastTagClicked.style.backgroundColor = "#e6e6e6"; // bluegreen style
    }
    lastTagClicked = target;
    target.style.backgroundColor = "#c1d2e1"; // bluegreen style
  }).on("focusout", function(event) {
    if (event.relatedTarget) {
        // going into a post, do nothing
    } else {
        if (lastTagClicked != null) {
            lastTagClicked.style.backgroundColor = "#e6e6e6"; // bluegreen style
            lastTagClicked = null;
        }
        // timeout to avoid a glitch when clicked to a different tag
        window.setTimeout(function() { hideShowDivsForTags(lastTagClicked); }, 200);
    }
  });

  $(document).click(function(event) {
    target = getEventTarget(event);
    if (lastTagClicked != null && target != null &&
      target != lastTagClicked) {
      if ($(target).is('a, a *')) {
          // clicked something => in particular "older" and "newer"
      } else {
          lastTagClicked.style.backgroundColor = "#e6e6e6"; // bluegreen style
          lastTagClicked = null;
          hideShowDivsForTags(lastTagClicked);
      }
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
    eventLabel: 'NeuralNet',
    eventValue: 13 });
  }, false);
  tnt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'NeuralNet',
    eventValue: 14 });
  }, false);
  clc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'ClusterDTW',
    eventValue: 15 });
  }, false);
  clt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'ClusterDTW',
    eventValue: 16 });
  }, false);
  fcc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'ForChal',
    eventValue: 17 });
  }, false);
  fct.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'ForChal',
    eventValue: 18 });
  }, false);
  unrc.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'ReadMore',
    eventAction: 'Click',
    eventLabel: 'UpNRandom',
    eventValue: 19 });
  }, false);
  unrt.addEventListener('click', function() {
    ga('send', { hitType: 'event',
    eventCategory: 'Title',
    eventAction: 'Click',
    eventLabel: 'UpNRandom',
    eventValue: 20 });
  }, false);

};

function initOlderNewerListeners() {

  // manage "newer" and "older" buttons
  var older = document.getElementById('older');
  var newer = document.getElementById('newer');
  older.addEventListener('click', function() {
    if (typeof $('#tags-ul').innerHTML == "undefined") {
      if (gauserid.style.display == 'none' &&
          wearupstream.style.display == '') {
        // second time older has been pressed
        uplift.style.display = '';
        arules.style.display = '';
        gauserid.style.display = '';
        wearupstream.style.display = 'none';
        wearrobust.style.display = 'none';
        wearphysical.style.display = 'none';
        timeseriesnn.style.display = 'none';
        clusteringdtw.style.display = 'none';
        forchallenge.style.display = 'none';
        upliftnotrandom.style.display = 'none';
        dlpulsiintro.style.display = 'none';
        document.getElementById('older').classList.add("disabled");
      } else {
        // first time
        uplift.style.display = 'none';
        arules.style.display = 'none';
        gauserid.style.display = 'none';
        wearupstream.style.display = '';
        wearrobust.style.display = '';
        wearphysical.style.display = '';
        timeseriesnn.style.display = '';
        clusteringdtw.style.display = 'none';
        forchallenge.style.display = 'none';
        upliftnotrandom.style.display = 'none';
        dlpulsiintro.style.display = 'none';
      }
      document.getElementById('newer').classList.remove("disabled");
    }
  }, false);
  newer.addEventListener('click', function() {
    if (typeof $('#tags-ul').innerHTML == "undefined") {
      if (wearupstream.style.display == 'none' &&
          uplift.style.display == '') {
        // looking at last page
        uplift.style.display = 'none';
        arules.style.display = 'none';
        gauserid.style.display = 'none';
        wearupstream.style.display = '';
        wearrobust.style.display = '';
        wearphysical.style.display = '';
        timeseriesnn.style.display = '';
        clusteringdtw.style.display = 'none';
        forchallenge.style.display = 'none';
        upliftnotrandom.style.display = 'none';
        dlpulsiintro.style.display = 'none';
      } else {
        uplift.style.display = 'none';
        arules.style.display = 'none';
        gauserid.style.display = 'none';
        wearupstream.style.display = 'none';
        wearrobust.style.display = 'none';
        wearphysical.style.display = 'none';
        timeseriesnn.style.display = 'none';
        clusteringdtw.style.display = '';
        forchallenge.style.display = '';
        upliftnotrandom.style.display = '';
        dlpulsiintro.style.display = '';
        document.getElementById('newer').classList.add("disabled");
      }
      document.getElementById('older').classList.remove("disabled");
    }
  }, false);

};

// handle which elements hide and show depending on the tag that has been clicked
function hideShowDivsForTags(tag_value) {
  var older = document.getElementById('older');
  var newer = document.getElementById('newer');
  // TODO another global variable with number of posts that are visible
  if (tag_value == "Uplift modeling" || tag_value == "Business evaluation") {
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = '';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    clusteringdtw.style.display = 'none';
    forchallenge.style.display = 'none';
    upliftnotrandom.style.display = '';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else if (tag_value == "Association Rules" || tag_value == "Google Analytics") {
    arules.style.display = '';
    gauserid.style.display = '';
    uplift.style.display = 'none';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    clusteringdtw.style.display = 'none';
    forchallenge.style.display = 'none';
    upliftnotrandom.style.display = 'none';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else if (tag_value == "R") {
    arules.style.display = '';
    gauserid.style.display = '';
    uplift.style.display = '';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = '';
    timeseriesnn.style.display = '';
    clusteringdtw.style.display = '';
    forchallenge.style.display = '';
    upliftnotrandom.style.display = '';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else if (tag_value == "Wearables") {
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = '';
    wearrobust.style.display = '';
    wearphysical.style.display = '';
    timeseriesnn.style.display = '';
    clusteringdtw.style.display = 'none';
    forchallenge.style.display = 'none';
    upliftnotrandom.style.display = 'none';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else if (tag_value == "Android app") {
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = '';
    wearrobust.style.display = '';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    clusteringdtw.style.display = 'none';
    forchallenge.style.display = 'none';
    upliftnotrandom.style.display = 'none';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else if (tag_value == "Neural network") {
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = '';
    clusteringdtw.style.display = 'none';
    forchallenge.style.display = 'none';
    upliftnotrandom.style.display = 'none';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else if (tag_value == "Clustering") {
    arules.style.display = '';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    clusteringdtw.style.display = '';
    forchallenge.style.display = 'none';
    upliftnotrandom.style.display = 'none';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else if (tag_value == "BSTS") {
    arules.style.display = 'none';
    gauserid.style.display = 'none';
    uplift.style.display = 'none';
    wearupstream.style.display = 'none';
    wearrobust.style.display = 'none';
    wearphysical.style.display = 'none';
    timeseriesnn.style.display = 'none';
    clusteringdtw.style.display = 'none';
    forchallenge.style.display = '';
    upliftnotrandom.style.display = 'none';
    dlpulsiintro.style.display = 'none';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  } else {
    // i.e. no tag has been clicked
    arules.style.display = '';
    gauserid.style.display = '';
    uplift.style.display = '';
    wearupstream.style.display = '';
    wearrobust.style.display = '';
    wearphysical.style.display = '';
    timeseriesnn.style.display = '';
    clusteringdtw.style.display = '';
    forchallenge.style.display = '';
    upliftnotrandom.style.display = '';
    dlpulsiintro.style.display = '';
    document.getElementById('newer').classList.add("disabled");
    document.getElementById('older').classList.add("disabled");
  }
};

// divs
var arules = document.getElementById('arules-div');
var gauserid = document.getElementById('gauserid-div');
var uplift = document.getElementById('uplift-div');
var wearupstream = document.getElementById('wearupstream-div');
var wearrobust = document.getElementById('wearrobust-div');
var wearphysical = document.getElementById('wearphysical-div');
var timeseriesnn = document.getElementById('timeseriesnn-div');
var clusteringdtw = document.getElementById('clusteringdtw-div');
var forchallenge = document.getElementById('forecasting-challenge-div');
var upliftnotrandom = document.getElementById('uplift-notrandom-div');
var dlpulsiintro = document.getElementById('dlpulsiintro-div');
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
var clc = document.getElementById('clusteringdtw-click');
var clt = document.getElementById('clusteringdtw-title');
var fcc = document.getElementById('forecasting-challenge-click');
var fct = document.getElementById('forecasting-challenge-title');
var unrc = document.getElementById('uplift-notrandom-click');
var unrt = document.getElementById('uplift-notrandom-title');
// selected tag
var lastTagClicked = null;

// initial state
uplift.style.display = 'none';
arules.style.display = 'none';
gauserid.style.display = 'none';
wearupstream.style.display = 'none';
wearrobust.style.display = 'none';
wearphysical.style.display = 'none';
timeseriesnn.style.display = 'none';
clusteringdtw.style.display = '';
forchallenge.style.display = '';
upliftnotrandom.style.display = '';
dlpulsiintro.style.display = '';
document.getElementById('newer').classList.add("disabled");
document.getElementById('older').classList.remove("disabled");

initTagsGAButtons();
initOlderNewerListeners();
