if (self.CavalryLogger) { CavalryLogger.start_js(["IEeUS"]); }

__d("TimelineAppSectionConstants",[],(function(a,b,c,d,e,f){e.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",likes_recent:null,info_all:"about",music_my_music:"music",music_favs:"music",music_playlists:"music",books_read:"books",books_favorite:"books",books_want:"books",recent_places:null,fitness_overview:"fitness",places_want:null,info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",music_radio:"music",info_history:null,recent_games:"games",products_want:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",video_movies_watch:"movies",video_tv_shows_watch:"tv",music_saved:"music",video_movies_want:"movies",video_tv_shows_want:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",friends_suggested:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",likes_sports:null,fitness_report:null,groups_member:"groups",music_heavy_rotation:"music",photos_album:"photos",likes_restaurants:"likes",likes_clothing:null,info_insights:null,apps_used:"games",games_play:"games",games_apps_saved:null,video_movies_suggestions:null,video_tv_shows_suggestions:null,books_suggestions:null,saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",places_saved:"map",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",sports_activities:null,saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",place_visits_by_place_tag:null,places_cities:"map",place_visits_by_city:null,topic_visit_counts:"map",place_visits_by_topic:null,place_visit_stories:null,places_map:"map",likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",places_cities_desktop:"map",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",photos_all_expanded:"photos",videos_by_user:"videos",videos_user_tagged:"videos",friends_map:"friends",videos_user_all:"videos",saved_posts:"saved",saved_photo_posts:"saved",saved_products:"saved",at_work_hr_info:null,friends_with_unseen_posts:"friends",groups_mutual:"groups",saved_profiles:"saved",work_followers:"friends",work_following:"friends",saved_messages:"saved",saved_lists:"saved",saved_fundraisers:"saved",video_playlists:"videos",saved_jobs:"saved",lists:"lists",list_contents:"lists",saved_group_posts:"saved",saved_offers:"saved",tasks_created:"tasks",tasks_assigned:"tasks",fun_fact_answers:"did_you_know",saved_asset3ds:"saved",instant_games_spotlight:null,saved_marketplace_nearbuy_deals:"saved",friends_other_country:"friends",friends_other_language:"friends",friends_this_year:"friends",friends_this_month:"friends",stories_archive:"archive",unknown_do_not_use_this:null,followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",apps:"games",videos_by:"videos",videos_of:"videos"}}}),null);
__d("Optimus",["Event","Parent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};function h(a,c){__p&&__p();var d=c.getTarget();if(!d)return;var e=g[a];for(var f in e){var h=b("Parent").byAttribute(d,f);if(h)do{var i=e[f][h.getAttribute(f)];if(i&&i.handleOptimus(a,h,c)===!1)break}while(h=h.parentNode&&b("Parent").byAttribute(h.parentNode,f))}}function i(c,d,f,a){g[c]||(g[c]={},b("Event").listen(document.documentElement,c,h.bind(null,c))),g[c][d]||(g[c][d]={}),g[c][d][f]||(g[c][d][f]=a)}e.exports={addRelClick:function(b,a){i("click","rel",b,a)},addEventListener:i}}),null);
__d("ProfileActionBarLogger",["FBJSON","MarauderLogger","Optimus"],(function(a,b,c,d,e,f){function a(){b("Optimus").addEventListener("mouseup","data-loggable","ProfileHighQualityLogger",{handleOptimus:function(a,c,d){b("MarauderLogger").log("profile_high_quality_action",null,b("FBJSON").parse(c.getAttribute("data-store")));return!1}})}f.init=a}),null);
__d("TimelineURI",["BizSiteIdentifier.brands","BusinessURI.brands","ProfileTabConst","TimelineAppSectionConstants","URI","goURI"],(function(a,b,c,d,e,f){__p&&__p();var g={parseURI:function(a){__p&&__p();a=new(b("URI"))(a);var c=a.getQueryData();a=a.getPath();var d=a.split("/").slice(1);(d[0]=="people"||d[0]=="pages")&&(d=d.slice(2));var e=c.sk||d[1]||b("ProfileTabConst").TIMELINE;e==b("ProfileTabConst").WALL&&(e=b("ProfileTabConst").TIMELINE);var f=null,g=null;e==b("ProfileTabConst").TIMELINE&&(g=parseInt(d[2],10)||null,f=parseInt(d[3],10)||null);return{path:a,id:c.id||d[0],key:e,viewas:c.viewas?c.viewas:"0",filter:c.filter?c.filter:null,year:g,month:f,friendship:!!c.and}},goToProfileID:function(a){b("BizSiteIdentifier.brands").isBizSite()?b("goURI")(b("BusinessURI.brands")("/profile.php").addQueryData("id",a),!0):b("goURI")(new(b("URI"))("/"+a),!0)},getTabKeyFromURI:function(a){a=g.getSectionKeyFromURI(a);return b("TimelineAppSectionConstants").collectionTabKeyToAppTabKey[a]||a},getSectionKeyFromURI:function(a){return a.getQueryData().sk||a.getPath().split("/")[2]||b("ProfileTabConst").TIMELINE},getVanityFromURI:function(a){var b=a.getQueryData().id;return b||a.getPath().split("/")[1]},isVideoPermalink:function(a){return g.getTabKeyFromURI(a)===b("ProfileTabConst").VIDEOS&&a.getPath().split("/").filter(function(a){return!!a}).length>2}};e.exports=g}),null);
__d("ProfileNavigation",["Arbiter","CSS","DOMScroll","PageTransitions","ProfileDOMID","ProfileScriptPath","ProfileTabConst","ProfileTabUtils","ScriptPath","TimelineController","TimelineURI","UIPagelet","URI","$","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=7,h=null,i=null;function j(a){__p&&__p();var c=b("URI").getMostRecentURI(),d=b("TimelineURI").getSectionKeyFromURI(c),e=b("TimelineURI").getTabKeyFromURI(c),f=c.getQueryData();f=f.subkey;var g=b("TimelineURI").getSectionKeyFromURI(a),i=b("TimelineURI").getTabKeyFromURI(a),j=a.getQueryData(),m=j.subkey;if(r(c,a)||s(i)||s(e)||!!j.and||b("TimelineURI").isVideoPermalink(a))return!1;if(j.hc_location==="profile_browser")return!1;if(Object.prototype.hasOwnProperty.call(j,"theater")){b("Arbiter").subscribeOnce("PhotoSnowlift.CLOSE",t);return!1}if(Object.prototype.hasOwnProperty.call(j,"force-refresh"))return!1;if(b("ProfileTabUtils").normalizeTabKey(e)===b("ProfileTabUtils").normalizeTabKey(i)&&b("ProfileTabUtils").normalizeTabKey(d)===b("ProfileTabUtils").normalizeTabKey(g)&&f===m)return!1;if(!b("ProfileTabUtils").isMedleyTab(e)&&b("ProfileTabUtils").isMedleyTab(i)&&q(g)){h=g;l(g,k(i),b("ProfileTabUtils").getIDForTabKey(e),b("ProfileTabUtils").getIDForTabKey(i),j);return!0}if(!b("ProfileTabUtils").isMedleyTab(i)){b("ProfileTabUtils").isMedleyTab(e)&&(h=d);l(b("ProfileTabUtils").normalizeTabKey(i),k(i),b("ProfileTabUtils").getIDForTabKey(e),b("ProfileTabUtils").getIDForTabKey(i),j);return!0}return!1}function k(a){if(b("ProfileTabUtils").isTimelineTab(a))return"TimelineWallColumn";return b("ProfileTabUtils").isTimelineOverviewTab(a)?"TimelineOverviewColumn":"TimelineMedleyView"}function l(a,c,d,e,f){__p&&__p();var g=b("ge")("fbTimelineHeadline");g&&!b("DOMScroll").isCurrentlyVisible(g)&&window.scrollTo(0,0);b("CSS").hide(b("$")(d));b("Arbiter").inform("save_facebar_query",!0);g=b("ge")(e);g?(b("CSS").show(g),p(a)):m(c,a,f);d=b("ge")("pageFooter");d&&b("CSS").conditionShow(d,!b("ProfileTabUtils").isTimelineTab(a));e=f&&f.subkey?String(f.subkey):null;b("TimelineController").registerCurrentKey(a,e)}function m(a,c,d){n();var e=babelHelpers["extends"]({},i,{tab_key:c});d&&(e=babelHelpers["extends"]({},e,d));d=function(a){o(),a()};d={append:!0,displayCallback:d,finallyHandler:p.bind(null,c),usePipe:!0};b("UIPagelet").loadFromEndpoint(a,b("ProfileDOMID").MAIN_COLUMN_PERSONAL,e,d)}function n(){b("CSS").show(b("$")(b("ProfileDOMID").TAB_LOAD_INDICATOR))}function o(){b("CSS").hide(b("$")(b("ProfileDOMID").TAB_LOAD_INDICATOR))}function p(a){b("ScriptPath").set(u.getScriptPath(a),null,{entity_id:b("TimelineController").getProfileID(),profile_session_id:b("TimelineController").getSessionToken()}),b("PageTransitions").transitionComplete()}function q(a){return h===null||a===h}function r(a,c){var d=b("TimelineURI").getVanityFromURI(a);a=a.getQueryData().id;var e=b("TimelineURI").getVanityFromURI(c);c=c.getQueryData().id;if(d&&e)return d!==e;return a&&c?a!==c:!0}function s(a){return b("ProfileTabUtils").isActivityLogTab(a)||a===b("ProfileTabConst").MEMORIAL_CONTACT||a===b("ProfileTabConst").POSTS}function t(){b("PageTransitions").registerHandler(j,g)}var u={init:function(a){i=a.profileContextData,t()},reset:function(){i=null,h=null,b("PageTransitions").removeHandler(j)},getScriptPath:function(a){var c=b("ProfileScriptPath").path;a&&!b("ProfileTabUtils").isTimelineTab(a)&&(c+=":"+a);return c}};e.exports=u}),null);
__d("TimelineDrag",["ArbiterMixin","Event","Locale","Style","Vector","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(a,b,c){"use strict";g.constructor.call(this),c=c||{},this._listenOn=c.listenOn,this._offsetInput=b,this._defaultOffset=c.default_offset,this._killClicks=c.killClicks,this._vertical=!0,this._RTLXSwitch=!1,this.setPicture(a,c)}a.prototype.setPicture=function(a,c){"use strict";__p&&__p();if(!a)return!1;c=c||{};this._picture=a;this._defaultOffset=c.default_offset;c.offsetInput&&(this._offsetInput=c.offsetInput);c.vertical!==undefined&&(this._vertical=c.vertical);c.height&&(this._containerHeight=c.height);c.width&&(this._containerWidth=c.width);this._vertical?(this._offsetType="top",this._eventCoord="y"):(this._RTLXSwitch=b("Locale").isRTL(),this._offsetType="left",this._eventCoord="x");this._picture.complete?this._initialLoad():this._loadListener=b("Event").listen(this._picture,"load",function(){this._loadListener.remove(),this._loadListener=null,this._initialLoad()}.bind(this))};a.prototype.destroy=function(){"use strict";this._stopDrag(),this._saveOffset(),this._mousedown&&this._mousedown.remove(),this._mousedown=null,this._onclick&&this._onclick.remove(),this._onclick=null,this._loadListener&&this._loadListener.remove(),this._loadListener=null};a.prototype._initialLoad=function(){"use strict";__p&&__p();var a=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=b("Event").listen(a,"mousedown",this._onMouseDown.bind(this));this._vertical?this._maxOffset=this._containerHeight-this._picture.offsetHeight:this._maxOffset=this._containerWidth-this._picture.offsetWidth;this._defaultOffset!==undefined&&this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;this._killClicks&&(this._onclick=b("Event").listen(a,"click",this._onClick.bind(this)));this._saveOffset()};a.prototype._onClick=function(event){"use strict";event.kill()};a.prototype._onMouseDown=function(event){"use strict";var a=parseInt(b("Style").get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=a-b("Vector").getEventPosition(event)[this._eventCoord];this._startDrag();event.kill()};a.prototype._startDrag=function(){"use strict";this._dragStarted||(this.inform("startdrag",this),this._dragTokens=[b("Event").listen(document.documentElement,"mouseup",this._onMouseUp.bind(this)),b("Event").listen(document.documentElement,"mousemove",this._onMouseMove.bind(this))],this._dragStarted=!0)};a.prototype._saveOffset=function(){"use strict";var a=parseInt(b("Style").get(this._picture,this._offsetType),10);this._RTLXSwitch?this._offsetInput.value=a+this._containerWidth-this._picture.offsetWidth:this._offsetInput.value=a};a.prototype._stopDrag=function(){"use strict";this._dragStarted&&(this.inform("stopdrag",this),this._dragStarted=!1,this._dragTokens.forEach(function(a){a.remove()}),this._saveOffset())};a.prototype._onMouseUp=function(event){"use strict";this._stopDrag(),event.kill()};a.prototype._setOffset=function(a){"use strict";this._RTLXSwitch?a=Math.max(0,Math.min(a,-this._maxOffset)):a=Math.min(0,Math.max(a,this._maxOffset)),b("Style").set(this._picture,this._offsetType,a+"px")};a.prototype._onMouseMove=function(event){"use strict";this._setOffset(this._pictureStartDragOffset+b("Vector").getEventPosition(event)[this._eventCoord]),event.kill()};e.exports=a}),null);
__d("TimelineCover",["cx","fbt","Arbiter","Button","CSS","Dialog","DOM","DOMScroll","FileInputUploader","Focus","HTML","PageTransitions","Parent","ReloadPage","Run","Style","TimelineDrag","$","ge","setImmediate","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();function i(a,c,d){"use strict";this.root=b("$")("fbProfileCover"),typeof c==="object"?(this._coverHeight=c.cover_height,this._coverWidth=c.cover_width,this.previewing=c.previewing,this._isLegacy=!1):(this._isLegacy=!0,this._coverHeight=c,this.previewing=d),this._parentSection=b("Parent").byClass(this.root,"fbTimelineSection"),this.cover=b("DOM").find(this.root,".cover"),i.instance=this,this.editing=!1,b("Run").onBeforeUnload(this.onBeforeUnload.bind(this)),this._parentSection||(this._parentSection=b("Parent").byClass(this.root,"fbEventHeader")),this.previewing&&b("setImmediate")(function(){this.editMode(),this.updateCoverImage(this.previewing)}.bind(this))}i.prototype.showLoadingIndicator=function(){"use strict";var a=b("ge")("fbCoverImageContainer");a&&b("CSS").addClass(a,"opaquedLoading")};i.prototype.hideLoadingIndicator=function(){"use strict";var a=b("ge")("fbCoverImageContainer");a&&b("CSS").removeClass(a,"opaquedLoading")};i.prototype.onBeforeUnload=function(){"use strict";if(this.isInEditMode())return h._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.")};i.prototype.isCoverImageVerticalFlow=function(a){"use strict";return a===null||a===undefined?!0:!a.style.height};i.prototype.editMode=function(){"use strict";__p&&__p();var a=b("DOM").find(this.root,"button.saveButton");b("Button").setEnabled(b("DOM").find(this.root,"button.cancelButton"),!0);b("Button").setEnabled(a,!0);this.hideLoadingIndicator();this._coverImage=b("DOM").scry(this.root,".coverImage")[0];if(this._coverImage){var c=b("DOM").scry(this._coverImage,".coverWrap")[0];if(c){c=b("DOM").scry(c,".coverPhotoImg")[0];this._originalIsVertical=this.isCoverImageVerticalFlow(c);this._originalOffset=b("Style").get(c,this._originalIsVertical?"top":"left")}}b("CSS").addClass(this._parentSection,"fbEditCover");b("DOMScroll").scrollTo(this.root);this.previewing&&(b("DOM").remove(this._coverImage),b("CSS").show(this._coverImage));if(this._coverImage){c=b("DOM").scry(this._coverImage,".coverPhotoImg")[0];c&&this._createDragger()}this.editing=!0;b("Focus").set(a);b("Arbiter").inform("CoverPhotoEdit",{sender:this,state:"open"})};i.prototype._exitEditMode=function(){"use strict";this._timelineDrag&&(this._timelineDrag.destroy(),this._timelineDrag=null),b("DOM").find(this.root,"input.hiddenPhotoID").value=null,b("Button").setEnabled(b("DOM").find(this.root,"button.cancelButton"),!1),b("Button").setEnabled(b("DOM").find(this.root,"button.saveButton"),!1),b("CSS").removeClass(this._parentSection,"fbEditCover"),this.hideLoadingIndicator(),this.previewing=!1,b("Arbiter").inform("CoverPhotoEdit",{sender:this,state:"closed"}),this.editing=!1};i.prototype._createDragger=function(a){"use strict";var c,d;this._isLegacy?(c=b("DOM").find(this.root,"input.photoOffsetInput"),this._originalIsVertical=!0):(d=a===undefined?this._originalIsVertical:a,c=d?b("DOM").find(this.root,"input.photoOffsetYInput"):b("DOM").find(this.root,"input.photoOffsetXInput"));this._timelineDrag=new(b("TimelineDrag"))(b("DOM").scry(this.root,".coverImage .coverPhotoImg")[0],c,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:d,killClicks:!0})};i.prototype.updateCoverImage=function(a,c){"use strict";__p&&__p();c&&this.editMode();b("DOM").find(this.root,"input.hiddenPhotoID").value=a;b("Button").setEnabled(b("DOM").find(this.root,"button.saveButton"),!0);c&&b("DOM").replace(b("DOM").scry(this.root,".coverImage")[0],typeof c==="string"?b("HTML")(c):c);a=b("DOM").scry(b("DOM").find(this.root,".coverImage"),".coverPhotoImg")[0];c=this.isCoverImageVerticalFlow(a);var d;this._isLegacy?d=b("DOM").find(this.root,"input.photoOffsetInput"):d=c?b("DOM").find(this.root,"input.photoOffsetYInput"):b("DOM").find(this.root,"input.photoOffsetXInput");this._timelineDrag?this._timelineDrag.setPicture(a,{offsetInput:d,vertical:c}):this._createDragger(c);this._updateHeader()};i.prototype.cancelUpdate=function(){"use strict";this._reloadAfterNextUpdate=!1,b("DOM").remove(b("DOM").scry(this.root,".coverImage")[0]),b("DOM").prependContent(this.cover,this._coverImage),this._originalOffset!==undefined&&b("Style").set(b("DOM").scry(this._coverImage,".coverPhotoImg")[0],this._originalIsVertical?"top":"left",this._originalOffset),this._exitEditMode(),this._updateHeader()};i.staticSaveComplete=function(){"use strict";i.getInstance().saveComplete()};i.prototype.saveComplete=function(){"use strict";this._reloadAfterNextUpdate&&b("ReloadPage").now();this._coverImage=b("DOM").scry(this.root,".coverImage")[0];var a=b("DOM").scry(this.root,"._3x7_")[0];a&&b("CSS").removeClass(a,"_3x7_");this._exitEditMode();this._updateHeader();b("PageTransitions").rewriteCurrentURI(b("PageTransitions").getCurrentURI().getUnqualifiedURI(),b("PageTransitions").getCurrentURI().removeQueryData("preview_cover"))};i.prototype.isInEditMode=function(){"use strict";return this.editing};i.prototype._updateHeader=function(){"use strict";var a=b("DOM").scry(this.root,".coverImage")[0];if(!a)return;a=b("CSS").hasClass(a,"coverNoImage");var c=b("CSS").hasClass(this._parentSection,"noCoverImage");a!==c&&b("CSS").conditionClass(this._parentSection,"noCoverImage",a)};i.getInstance=function(){"use strict";return i.instance};i.staticUpdateCoverImage=function(a){"use strict";i.getInstance().updateCoverImage(null,a)};i.prototype.setupFileUpload=function(a,c,d){"use strict";__p&&__p();a.subscribe("change",function(){__p&&__p();var e=new(b("FileInputUploader"))(a.getInput()).setURI(c).setAllowCrossOrigin(!0);e.subscribe("failure",function(){i.showErrorDialog(h._("Cover Upload Failed"),h._("Uploading the new cover picture failed. Please try again."))});e.subscribe(["success","failure"],function(){this.hideLoadingIndicator(),a.clear(),b("CSS").removeClass(a.getControl(),d),a.getInput().disabled=!1}.bind(this));this.showLoadingIndicator();this._reloadAfterNextUpdate=!0;e.send();b("CSS").addClass(a.getControl(),d);a.getInput().disabled=!0}.bind(this))};i.setupFileUpload=function(a,b,c){"use strict";this.getInstance().setupFileUpload(a,b,c)};i.imageUploadDone=function(a,b){"use strict";this.getInstance().updateCoverImage(a,b)};i.showErrorDialog=function(a,c){"use strict";new(b("Dialog"))().setTitle(a).setButtons(b("Dialog").OK).setBody(c).setSemiModal(!0).show(),this.getInstance()&&this.getInstance().hideLoadingIndicator()};i.initFileUploadMenu=function(a){"use strict";i.showLoadingAfterFileUpload(a.getForm())};i.showLoadingAfterFileUpload=function(a){"use strict";b("tidyEvent")(a.subscribe("submit",function(){i.getInstance().showLoadingIndicator()}))};i.instance=null;e.exports=i}),null);
__d("legacy:TimelineCover",["TimelineCover"],(function(a,b,c,d,e,f){a.TimelineCover=b("TimelineCover")}),3);
__d("TimelineNavLight",["csx","cx","invariant","Arbiter","CSS","DataStore","DOM","DOMQuery","Event","Parent","ProfileEngagementTypedLogger","ProfileOverviewDOMID","ProfileOverviewSection","ProfileTabUtils","ProfileTimelineUILogger","TimelineAppSectionConstants","TimelineComponentKeys","TimelineController","destroyOnUnload","queryThenMutateDOM","requireWeak"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j="_6-7",k="_6-6",l="_529n",m="_5215",n="_9rw",o="_70k",p="._6-7",q="._6-6";function r(a){"use strict";__p&&__p();r.$5&&i(0);this.$1=a;this.$2=b("DOMQuery").scry(a,p)[0];this.$3=b("DOMQuery").scry(a,q);this.$6();b("ProfileOverviewSection").subscribe("Medley/transitionToSection",function(a,c){this.$7(c.slice(b("ProfileOverviewDOMID").PREFIX_MEDLEY.length))}.bind(this));b("TimelineController").register(b("TimelineComponentKeys").COVER_NAV,this);var c=b("Event").listen(this.$1,"click",this.$8.bind(this));r.$5=this;b("destroyOnUnload")(function(){this.$1=null,this.$2=null,this.$3=null,c.remove(),this.$4&&this.$4.remove(),r.$5=null}.bind(this))}r.prototype.handleTabChange=function(a){"use strict";this.$7(a)};r.prototype.setMoreMenuInstance=function(a){"use strict";this.$4=b("Event").listen(a.getRoot(),"click",this.$9.bind(this))};r.setMoreMenuInstance=function(a){"use strict";!r.$5&&i(0),r.$5.setMoreMenuInstance(a)};r.prototype.$7=function(a){"use strict";__p&&__p();this.$2&&b("CSS").removeClass(this.$2,j);var c=this.$3;c&&c.some(function(c){var d=b("TimelineAppSectionConstants").collectionTabKeyToAppTabKey[a]||a;if(b("DataStore").get(c,"tab-key")===d){b("CSS").addClass(c,j);this.$2=c;return!0}return!1}.bind(this));(b("ProfileTabUtils").isTimelineTab(a)||b("ProfileTabUtils").isTimelineOverviewTab(a))&&b("requireWeak")("ScrollColumn.react",function(a){b("Arbiter").inform(a.EVENT_SHOULD_ADJUST)})};r.prototype.$6=function(){"use strict";__p&&__p();var a=this.$3,c,d;a&&(c=a.length-1,d=a[c]);var e,f,g,h=0;b("queryThenMutateDOM")(function(){__p&&__p();var i=this.$1;if(i){i=b("Parent").byClass(i,o);i instanceof HTMLElement&&(e=i.offsetWidth)}f=d.offsetLeft;g=d.offsetWidth;for(var i=c;i>1;i--)if(a){var j=a[i];if(j.offsetLeft+j.offsetWidth>e)h++;else break}}.bind(this),function(){var d=this.$1;f+g>e&&d&&b("CSS").addClass(d,m);if(a)for(var i=c;i>c-h;i--)b("DOM").remove(a[i]);if(d){i=b("Parent").byClass(d,l);i!==null&&b("CSS").removeClass(i,l)}}.bind(this))};r.prototype.$10=function(a,c){"use strict";a=b("Parent").byClass(a,c);return a?b("DataStore").get(a,"tab-key"):null};r.prototype.$8=function(event){"use strict";var a=this.$10(event.target,k);a&&b("ProfileTimelineUILogger").logCoverNavItemClick(a)};r.prototype.$9=function(event){"use strict";var a=this.$10(event.target,n);a&&b("ProfileTimelineUILogger").logCoverNavMoreItemClick(a)};r.setupProfileOverviewLogging=function(a){"use strict";var c=a.dropdownMenu,d=a.profileID,e=a.profileSessionID,f=a.surface;c.onTriggerClick(function(a){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_navigation_click").setItemType("dropdown_button").setProductBucket("profile_core").setProfileIDDummy(d).setProfileSessionID(e).setSurface(f).log()});c.onMenuItemClick(function(a){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_navigation_click").setItemType("dropdown_menu_item").setItemSubtype(a.getValue()).setProductBucket("profile_core").setProfileIDDummy(d).setProfileSessionID(e).setSurface(f).log()})};e.exports=r}),null);