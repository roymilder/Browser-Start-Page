(function() {
  'use strict';

  const tiles = [
    // Personal
    [
      { name: 'gmail', title: 'GMail', href: 'https://mail.google.com/mail/u/0' },
      { name: 'google-calendar', title: 'Google Calendar', href: 'https://calendar.google.com/b/0' },
      { name: 'google-contacts', title: 'Google Contacts', href: 'https://contacts.google.com/' },
      { name: 'google-keep', title: 'Google Keep', href: 'https://keep.google.com' },
      { name: 'google-drive', title: 'Google Drive', href: 'https://drive.google.com/u/0' },
      { name: 'google-maps', title: 'Google Maps', href: 'https://maps.google.com' },

      { name: 'android-messenger', title: 'Android Messenger', href: 'https://messages.android.com/' },
      { name: 'facebook', title: 'Facebook', href: 'https://www.facebook.com/messages/t/rkrauskopf' },
      { name: 'twitter', title: 'Twitter', href: 'https://twitter.com/James_Messinger' },
      { name: 'newsblur', title: 'Newsblur', href: 'https://www.newsblur.com/' },
      { name: 'yelp', title: 'Yelp', href: 'http://www.yelp.com' },
      { name: 'amazon', title: 'Amazon', href: 'https://smile.amazon.com' },

      { name: 'npm', title: 'NPM', href: 'https://www.npmjs.com/~jamesmessinger' },
      { name: 'github', title: 'GitHub', href: 'https://github.com/' },
      { name: 'myrepos', title: 'All My GitHub Repos', href: 'https://myrepos.io/#u=ShipEngine,APIDevTools,JS-DevTools,JamesMessinger' },
      { name: 'travis-ci', title: 'Travis CI', href: 'https://travis-ci.com/JamesMessinger' },
      { name: '', title: '', href: '' },
      { name: 'aws', title: 'AWS', href: 'https://JamesMessinger.signin.aws.amazon.com/console' },

      { name: 'hulu', title: 'Hulu', href: 'https://hulu.com' },
      { name: 'amazon-prime-video', title: 'Amazon Prime Video', href: 'https://smile.amazon.com/Amazon-Video/b/ref=topnav_storetab_atv?node=2858778011&ie=UTF8' },
      { name: 'hbo-now', title: 'HBO Now', href: 'http://www.hbonow.com' },
      { name: 'netflix', title: 'Netflix', href: 'http://www.netflix.com/' },
      { name: '', title: '', href: '' },
      { name: '', title: '', href: '' },

      { name: 'usaa', title: 'USAA', href: 'https://www.usaa.com/inet/ent_logon/Logon?redirectjsp=true' },
      { name: 'vanguard', title: 'Vanguard', href: 'https://investor.vanguard.com/my-account/log-on' },
      { name: 'td-ameritrade', title: 'TD Ameritrade', href: 'https://www.tdameritrade.com/home.page' },
      { name: 'coinbase', title: 'Coinbase', href: 'https://www.coinbase.com/signin' },
      { name: 'personal-capital', title: 'Personal Capital', href: 'https://personalcapital.com' },
      { name: 'credit-karma', title: 'USAA', href: 'https://www.creditkarma.com' },
    ],

    // ShipEngine
    [
      { name: 'gmail', title: 'GMail', href: 'https://mail.google.com/mail/u/1' },
      { name: 'google-calendar', title: 'Google Calendar', href: 'https://calendar.google.com/b/1' },
      { name: 'google-drive', title: 'Google Drive', href: 'https://drive.google.com/u/1' },
      { name: 'jira', title: 'JIRA', href: 'https://shipstation.atlassian.net/secure/RapidBoard.jspa?rapidView=87&projectKey=ENGINE' },
      { name: 'confluence', title: 'Confluence', href: 'https://shipstation.atlassian.net/wiki/spaces/DEV/overview' },
      { name: 'twitter', title: 'Twitter', href: 'https://twitter.com/shipengineapi' },

      { name: 'shipengine', title: 'ShipEngine Docs', href: 'https://docs.shipengine.com/docs' },
      { name: 'readme', title: 'ReadMe.io', href: 'https://dash.readme.io/project/shipengine-docs/v1/dashboard' },
      { name: 'fullstory', title: 'FullStory', href: 'https://app.fullstory.com/ui/60D9T/segments/chris.ivester@shipstation.com:5741031244955648/people/0' },
      { name: 'statuspage', title: 'Status Page', href: 'https://shipengine.statuspage.io/' },
      { name: 'looker', title: 'Looker', href: 'https://shipstation.looker.com/browse' },
      { name: 'kibana', title: 'Kibana', href: `https://elk.shipengine.com/app/kibana#/dashboard/8f796f95-a9e7-4834-9a03-c9f10fd8ce1a?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-24h,mode:quick,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(darkTheme:!t,useMargins:!f),panels:!((gridData:(h:2,i:'1',w:2,x:0,y:6),id:'8cfdd4c9-edb4-465d-ac75-5185dc007d76',panelIndex:'1',type:visualization,version:'6.1.0'),(gridData:(h:2,i:'3',w:2,x:2,y:6),id:'3a903cca-ccd1-4d49-9a5f-35cfa66a3d67',panelIndex:'3',type:visualization,version:'6.1.0'),(gridData:(h:2,i:'4',w:2,x:2,y:4),id:'4a8e87b3-819f-4eec-b4b3-d4d8cb59453b',panelIndex:'4',type:visualization,version:'6.1.0'),(gridData:(h:4,i:'5',w:6,x:0,y:0),id:'0ee13443-fb9c-4c67-9b5a-e28d1c9114a1',panelIndex:'5',type:visualization,version:'6.1.0'),(gridData:(h:4,i:'6',w:6,x:0,y:8),id:'4953aa89-6d1c-410e-a26b-7ff50890f862',panelIndex:'6',type:visualization,version:'6.1.0'),(gridData:(h:3,i:'7',w:2,x:6,y:8),id:c93771ad-63cd-4318-8d36-b8e37e851b54,panelIndex:'7',type:visualization,version:'6.1.0'),(gridData:(h:2,i:'8',w:2,x:0,y:4),id:d5408111-2880-43e3-bd1c-0929a84033af,panelIndex:'8',type:visualization,version:'6.1.0'),(gridData:(h:2,i:'10',w:2,x:4,y:4),id:a2355206-f9d8-4074-adfe-22c0591d2d41,panelIndex:'10',type:visualization,version:'6.1.0'),(gridData:(h:4,i:'11',w:6,x:6,y:0),id:bbf171e3-db6a-4925-b412-a335a29e553f,panelIndex:'11',type:visualization,version:'6.1.0'),(gridData:(h:4,i:'12',w:6,x:6,y:4),id:'975547ed-23a9-4380-9c96-73d004a762ba',panelIndex:'12',type:visualization,version:'6.1.0'),(gridData:(h:4,i:'13',w:3,x:6,y:11),id:'2281c5ac-1be1-4de8-b8be-891b9bec3ea6',panelIndex:'13',type:visualization,version:'6.1.0'),(gridData:(h:3,i:'14',w:2,x:8,y:8),id:f71b9393-8263-4f14-ad5a-2c86479fa825,panelIndex:'14',type:visualization,version:'6.1.0'),(gridData:(h:3,i:'15',w:2,x:10,y:8),id:'30b86267-af45-4749-a474-c198d7e3702a',panelIndex:'15',type:visualization,version:'6.1.0'),(gridData:(h:2,i:'16',w:2,x:4,y:6),id:'12eed178-a1a3-44eb-8f3b-e0a096c662ca',panelIndex:'16',type:visualization,version:'6.1.0'),(gridData:(h:3,i:'17',w:6,x:0,y:12),id:AWANzPmdXTX2-7OItHd-,panelIndex:'17',type:visualization,version:'6.1.0')),query:(language:lucene,query:''),timeRestore:!f,title:'ShipEngine%20Production%20Analytics',uiState:(P-1:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-10:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-11:(spy:(mode:(fill:!f,name:!n)),vis:(legendOpen:!t)),P-14:(vis:(params:(sort:(columnIndex:!n,direction:!n)))),P-15:(vis:(params:(sort:(columnIndex:!n,direction:!n)))),P-16:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-3:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-4:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-7:(vis:(params:(sort:(columnIndex:!n,direction:!n)))),P-8:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)')))),viewMode:view)` },

      { name: 'github', title: 'GitHub', href: 'https://github.com/orgs/ShipEngine/dashboard' },
      { name: 'npm', title: 'NPM', href: 'https://www.npmjs.com/org/shipengine' },
      { name: 'adp', title: 'Pay Stubs', href: 'https://online.adp.com/ipay/login.html' },
      { name: 'vanguard', title: '401k', href: 'https://my.vanguardplan.com/' },
      { name: 'charles-schwab', title: 'Employee Stock Purchace Plan', href: 'https://eac.schwab.com/' },
      { name: 'concur', title: 'Expese Reimbursement', href: 'https://www.concursolutions.com/' },
    ],

    // APIDevTools
    [
      { name: 'twitter', title: 'Twitter', href: 'https://twitter.com/APIDevTools' },
      { name: 'npm', title: 'NPM', href: 'https://www.npmjs.com/~apidevtools' },
      { name: 'github', title: 'GitHub', href: 'https://github.com/orgs/APIDevTools/dashboard' },
      { name: 'myrepos', title: 'All My GitHub Repos', href: 'https://myrepos.io/#u=ShipEngine,APIDevTools,JS-DevTools,JamesMessinger' },
      { name: 'travis-ci', title: 'Travis CI', href: 'https://travis-ci.com/APIDevTools' },
      { name: 'coveralls', title: 'Coveralls', href: 'https://coveralls.io/github/APIDevTools' },
      { name: 'google', title: 'Google Search Console', href: 'https://search.google.com/search-console?resource_id=https%3A%2F%2Fapidevtools.org%2F' },

      { name: 'google-analytics', title: 'Google Analytics', href: 'https://analytics.google.com/analytics/web/#/report-home/a68102273w185957515p183035844' },
    ],

    // JS-DevTools
    [
      { name: 'twitter', title: 'Twitter', href: 'https://twitter.com/JS_DevTools' },
      { name: 'npm', title: 'NPM', href: 'https://www.npmjs.com/~jsdevtools' },
      { name: 'github', title: 'GitHub', href: 'https://github.com/orgs/JS-DevTools/dashboard' },
      { name: 'myrepos', title: 'All My GitHub Repos', href: 'https://myrepos.io/#u=ShipEngine,APIDevTools,JS-DevTools,JamesMessinger' },
      { name: 'travis-ci', title: 'Travis CI', href: 'https://travis-ci.com/JS-DevTools' },
      { name: 'coveralls', title: 'Coveralls', href: 'https://coveralls.io/github/JS-DevTools' },
      { name: 'google', title: 'Google Search Console', href: 'https://search.google.com/search-console?resource_id=https%3A%2F%2Fjsdevtools.org%2F' },

      { name: 'google-analytics', title: 'Google Analytics', href: 'https://analytics.google.com/analytics/web/#/report-home/a68102273w186217806p183251220' },
    ],
  ];

  // Some really cool animations are:
  // flip, swing, jackInTheBox, rotateIn, tada, zoomIn, bounceInUp, flipInX,  flipInY, pulse
  const animation = 'pulse';

  // HTML elements on the page
  const elements = {
    tabs: document.getElementById('tabs'),
    tileList: document.getElementById('tileList'),
    tiles: document.querySelectorAll('li.tile'),
  };


  /**
   * One-time code that runs when the page first loads
   */
  function onLoad() {
    // If a specific tab has been specified, then select it; otherwise, default to the first tab
    let tab = getHashTab() || 0;
    selectTab(tab);

    // Allow tabs to be selected by clicking the icon or pressing the corresponding number key
    elements.tabs.addEventListener('click', selectTabOnClick);
    window.addEventListener('keypress', selectTabOnKeyPress);
    window.addEventListener('hashchange', selectTabOnHashChange);

    // Remove animation classes when the animation finishes
    for (let tileElement of elements.tiles) {
      tileElement.addEventListener('animationend', animationFinished);
    }
  }


  /**
   * Toggles HTML attributes to the corresponding tab.  For example, if tab === 1,
   * then attributes like data-href-1 and data-src-1 will be activated.  If tab === 2,
   * then attributes like data-href-2 and data-src-2 will be activated.
   */
  function selectTab(tab) {
    if (tiles.length - 1 < tab) {
      return;
    }

    elements.tabs.className = `tabs tab-${tab}`;
    location.hash = `#tab-${tab}`;

    for (let [index, tileElement] of Object.entries(elements.tiles)) {
      let tile = tiles[tab][index] || {};

      tileElement.className = `tile ${tile.name}`;
      tileElement.classList.add('animated', animation);

      let anchorElement = tileElement.children[0];
      anchorElement.href = tile.href;
      anchorElement.title = tile.title;

      let imageElement = anchorElement.children[0];
      if (tile.name) {
        imageElement.classList.remove('hidden');
        imageElement.src = `img/tiles/${tile.name}.png`;
      }
      else {
        imageElement.classList.add('hidden');
      }
    }
  }


  function animationFinished(event) {
    event.target.classList.remove('animated', animation);
  }


  /**
   * Whenever a tab icon is clicked, selects the corresponding tab
   */
  function selectTabOnClick(event) {
    if (event.target) {
      let tab = event.target.getAttribute('data-tab');
      if (tab) {
        selectTab(parseInt(tab));
      }
    }
  }


  /**
   * Whenever a number key is pressed, selects the corresponding tab
   */
  function selectTabOnKeyPress(event) {
    if (/\d/.test(event.key)) {
      // It's a number key, so select the corresponding tab
      selectTab(parseInt(event.key) - 1);
    }
  }


  /**
   * Whenever the URL hash changes, select the corresponding tab
   */
  function selectTabOnHashChange() {
    let tab = getHashTab();
    if (tab !== undefined) {
      selectTab(tab);
    }
  }

  /**
   * Returns the tab number from the URL hash
   */
  function getHashTab() {
    let match = /tab-(\d)/.exec(location.hash);
    if (match) {
      return parseInt(match[1]);
    }
  }


  window.onload = onLoad;
}())
