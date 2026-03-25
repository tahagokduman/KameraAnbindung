(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/KameraAnbindungUI/i18n/i18n.properties":
/*!******************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/i18n/i18n.properties ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "Draft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\nAccesLogs=AccesLogs\nAccesLogs_Detail=AccesLogs Detail\nCameraEvents=CameraEvents\nCameraEvents_Detail=CameraEvents Detail\nCameras=Cameras\nCameras_Detail=Cameras Detail\nCompany=Company\nCompany_Detail=Company Detail\nReservations=Reservations\nReservations_Detail=Reservations Detail\nSession=Session\nSession_Detail=Session Detail\nTariffs=Tariffs\nTariffs_Detail=Tariffs Detail\nUsers=Users\nUsers_Detail=Users Detail\nVehicles=Vehicles\nVehicles_Detail=Vehicles Detail"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let kameraanbindungui_actions_application_appupdate_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/AppUpdate.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdate.action")
let kameraanbindungui_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateFailureMessage.action")
let kameraanbindungui_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateProgressBanner.action")
let kameraanbindungui_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateSuccessMessage.action")
let kameraanbindungui_actions_application_logout_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/Logout.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/Logout.action")
let kameraanbindungui_actions_application_navtoabout_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/NavToAbout.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/NavToAbout.action")
let kameraanbindungui_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/NavToActivityLog.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/NavToActivityLog.action")
let kameraanbindungui_actions_application_navtosupport_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/NavToSupport.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/NavToSupport.action")
let kameraanbindungui_actions_application_onwillupdate_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/OnWillUpdate.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/OnWillUpdate.action")
let kameraanbindungui_actions_application_reset_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/Reset.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/Reset.action")
let kameraanbindungui_actions_application_resetmessage_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/ResetMessage.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/ResetMessage.action")
let kameraanbindungui_actions_application_usermenupopover_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Application/UserMenuPopover.action */ "./build.definitions/KameraAnbindungUI/Actions/Application/UserMenuPopover.action")
let kameraanbindungui_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/CloseModalPage_Cancel.action */ "./build.definitions/KameraAnbindungUI/Actions/CloseModalPage_Cancel.action")
let kameraanbindungui_actions_closemodalpage_complete_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/CloseModalPage_Complete.action */ "./build.definitions/KameraAnbindungUI/Actions/CloseModalPage_Complete.action")
let kameraanbindungui_actions_closepage_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/ClosePage.action */ "./build.definitions/KameraAnbindungUI/Actions/ClosePage.action")
let kameraanbindungui_actions_genericbannermessage_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/GenericBannerMessage.action */ "./build.definitions/KameraAnbindungUI/Actions/GenericBannerMessage.action")
let kameraanbindungui_actions_genericmessagebox_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/GenericMessageBox.action */ "./build.definitions/KameraAnbindungUI/Actions/GenericMessageBox.action")
let kameraanbindungui_actions_genericnavigation_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/GenericNavigation.action */ "./build.definitions/KameraAnbindungUI/Actions/GenericNavigation.action")
let kameraanbindungui_actions_generictoastmessage_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/GenericToastMessage.action */ "./build.definitions/KameraAnbindungUI/Actions/GenericToastMessage.action")
let kameraanbindungui_actions_kameraanbindungservice_acceslogs_navtoacceslogs_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_acceslogs_navtoacceslogs_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_List.action")
let kameraanbindungui_actions_kameraanbindungservice_cameraevents_navtocameraevents_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_cameraevents_navtocameraevents_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_List.action")
let kameraanbindungui_actions_kameraanbindungservice_cameras_navtocameras_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_cameras_navtocameras_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_List.action")
let kameraanbindungui_actions_kameraanbindungservice_company_navtocompany_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_company_navtocompany_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_List.action")
let kameraanbindungui_actions_kameraanbindungservice_reservations_navtoreservations_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_reservations_navtoreservations_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_List.action")
let kameraanbindungui_actions_kameraanbindungservice_service_initializeonline_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnline.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnline.action")
let kameraanbindungui_actions_kameraanbindungservice_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnlineFailureMessage.action")
let kameraanbindungui_actions_kameraanbindungservice_session_navtosession_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_session_navtosession_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_List.action")
let kameraanbindungui_actions_kameraanbindungservice_tariffs_navtotariffs_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_tariffs_navtotariffs_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_List.action")
let kameraanbindungui_actions_kameraanbindungservice_users_navtousers_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_users_navtousers_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_List.action")
let kameraanbindungui_actions_kameraanbindungservice_vehicles_navtovehicles_detail_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_Detail.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_Detail.action")
let kameraanbindungui_actions_kameraanbindungservice_vehicles_navtovehicles_list_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_List.action */ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_List.action")
let kameraanbindungui_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Logging/LogUploadFailure.action */ "./build.definitions/KameraAnbindungUI/Actions/Logging/LogUploadFailure.action")
let kameraanbindungui_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/KameraAnbindungUI/Actions/Logging/LogUploadSuccessful.action")
let kameraanbindungui_actions_logging_uploadlog_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Logging/UploadLog.action */ "./build.definitions/KameraAnbindungUI/Actions/Logging/UploadLog.action")
let kameraanbindungui_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./KameraAnbindungUI/Actions/Logging/UploadLogProgress.action */ "./build.definitions/KameraAnbindungUI/Actions/Logging/UploadLogProgress.action")
let kameraanbindungui_globals_application_appdefinition_version_global = __webpack_require__(/*! ./KameraAnbindungUI/Globals/Application/AppDefinition_Version.global */ "./build.definitions/KameraAnbindungUI/Globals/Application/AppDefinition_Version.global")
let kameraanbindungui_globals_application_applicationname_global = __webpack_require__(/*! ./KameraAnbindungUI/Globals/Application/ApplicationName.global */ "./build.definitions/KameraAnbindungUI/Globals/Application/ApplicationName.global")
let kameraanbindungui_globals_application_supportemail_global = __webpack_require__(/*! ./KameraAnbindungUI/Globals/Application/SupportEmail.global */ "./build.definitions/KameraAnbindungUI/Globals/Application/SupportEmail.global")
let kameraanbindungui_globals_application_supportphone_global = __webpack_require__(/*! ./KameraAnbindungUI/Globals/Application/SupportPhone.global */ "./build.definitions/KameraAnbindungUI/Globals/Application/SupportPhone.global")
let kameraanbindungui_i18n_i18n_properties = __webpack_require__(/*! ./KameraAnbindungUI/i18n/i18n.properties */ "./build.definitions/KameraAnbindungUI/i18n/i18n.properties")
let kameraanbindungui_jsconfig_json = __webpack_require__(/*! ./KameraAnbindungUI/jsconfig.json */ "./build.definitions/KameraAnbindungUI/jsconfig.json")
let kameraanbindungui_pages_application_about_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/Application/About.page */ "./build.definitions/KameraAnbindungUI/Pages/Application/About.page")
let kameraanbindungui_pages_application_support_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/Application/Support.page */ "./build.definitions/KameraAnbindungUI/Pages/Application/Support.page")
let kameraanbindungui_pages_application_useractivitylog_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/Application/UserActivityLog.page */ "./build.definitions/KameraAnbindungUI/Pages/Application/UserActivityLog.page")
let kameraanbindungui_pages_kameraanbindungservice_acceslogs_acceslogs_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_acceslogs_acceslogs_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_List.page")
let kameraanbindungui_pages_kameraanbindungservice_cameraevents_cameraevents_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_cameraevents_cameraevents_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_List.page")
let kameraanbindungui_pages_kameraanbindungservice_cameras_cameras_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_cameras_cameras_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_List.page")
let kameraanbindungui_pages_kameraanbindungservice_company_company_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_company_company_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_List.page")
let kameraanbindungui_pages_kameraanbindungservice_reservations_reservations_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_reservations_reservations_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_List.page")
let kameraanbindungui_pages_kameraanbindungservice_session_session_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_session_session_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_List.page")
let kameraanbindungui_pages_kameraanbindungservice_tariffs_tariffs_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_tariffs_tariffs_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_List.page")
let kameraanbindungui_pages_kameraanbindungservice_users_users_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_users_users_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_List.page")
let kameraanbindungui_pages_kameraanbindungservice_vehicles_vehicles_detail_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_Detail.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_Detail.page")
let kameraanbindungui_pages_kameraanbindungservice_vehicles_vehicles_list_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_List.page */ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_List.page")
let kameraanbindungui_pages_main_page = __webpack_require__(/*! ./KameraAnbindungUI/Pages/Main.page */ "./build.definitions/KameraAnbindungUI/Pages/Main.page")
let kameraanbindungui_rules_application_appupdatefailure_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Application/AppUpdateFailure.js */ "./build.definitions/KameraAnbindungUI/Rules/Application/AppUpdateFailure.js")
let kameraanbindungui_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/KameraAnbindungUI/Rules/Application/AppUpdateSuccess.js")
let kameraanbindungui_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/KameraAnbindungUI/Rules/Application/ClientIsMultiUserMode.js")
let kameraanbindungui_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/KameraAnbindungUI/Rules/Application/GetClientSupportVersions.js")
let kameraanbindungui_rules_application_getclientversion_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Application/GetClientVersion.js */ "./build.definitions/KameraAnbindungUI/Rules/Application/GetClientVersion.js")
let kameraanbindungui_rules_application_onwillupdate_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Application/OnWillUpdate.js */ "./build.definitions/KameraAnbindungUI/Rules/Application/OnWillUpdate.js")
let kameraanbindungui_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/KameraAnbindungUI/Rules/Application/ResetAppSettingsAndLogout.js")
let kameraanbindungui_rules_logging_loglevels_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Logging/LogLevels.js */ "./build.definitions/KameraAnbindungUI/Rules/Logging/LogLevels.js")
let kameraanbindungui_rules_logging_settracecategories_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Logging/SetTraceCategories.js */ "./build.definitions/KameraAnbindungUI/Rules/Logging/SetTraceCategories.js")
let kameraanbindungui_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/KameraAnbindungUI/Rules/Logging/SetUserLogLevel.js")
let kameraanbindungui_rules_logging_togglelogging_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Logging/ToggleLogging.js */ "./build.definitions/KameraAnbindungUI/Rules/Logging/ToggleLogging.js")
let kameraanbindungui_rules_logging_tracecategories_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Logging/TraceCategories.js */ "./build.definitions/KameraAnbindungUI/Rules/Logging/TraceCategories.js")
let kameraanbindungui_rules_logging_userlogsetting_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Logging/UserLogSetting.js */ "./build.definitions/KameraAnbindungUI/Rules/Logging/UserLogSetting.js")
let kameraanbindungui_rules_service_initialize_js = __webpack_require__(/*! ./KameraAnbindungUI/Rules/Service/Initialize.js */ "./build.definitions/KameraAnbindungUI/Rules/Service/Initialize.js")
let kameraanbindungui_services_kameraanbindungservice_service = __webpack_require__(/*! ./KameraAnbindungUI/Services/KameraAnbindungService.service */ "./build.definitions/KameraAnbindungUI/Services/KameraAnbindungService.service")
let kameraanbindungui_styles_styles_css = __webpack_require__(/*! ./KameraAnbindungUI/Styles/Styles.css */ "./build.definitions/KameraAnbindungUI/Styles/Styles.css")
let kameraanbindungui_styles_styles_json = __webpack_require__(/*! ./KameraAnbindungUI/Styles/Styles.json */ "./build.definitions/KameraAnbindungUI/Styles/Styles.json")
let kameraanbindungui_styles_styles_less = __webpack_require__(/*! ./KameraAnbindungUI/Styles/Styles.less */ "./build.definitions/KameraAnbindungUI/Styles/Styles.less")
let kameraanbindungui_styles_styles_nss = __webpack_require__(/*! ./KameraAnbindungUI/Styles/Styles.nss */ "./build.definitions/KameraAnbindungUI/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	kameraanbindungui_actions_application_appupdate_action : kameraanbindungui_actions_application_appupdate_action,
	kameraanbindungui_actions_application_appupdatefailuremessage_action : kameraanbindungui_actions_application_appupdatefailuremessage_action,
	kameraanbindungui_actions_application_appupdateprogressbanner_action : kameraanbindungui_actions_application_appupdateprogressbanner_action,
	kameraanbindungui_actions_application_appupdatesuccessmessage_action : kameraanbindungui_actions_application_appupdatesuccessmessage_action,
	kameraanbindungui_actions_application_logout_action : kameraanbindungui_actions_application_logout_action,
	kameraanbindungui_actions_application_navtoabout_action : kameraanbindungui_actions_application_navtoabout_action,
	kameraanbindungui_actions_application_navtoactivitylog_action : kameraanbindungui_actions_application_navtoactivitylog_action,
	kameraanbindungui_actions_application_navtosupport_action : kameraanbindungui_actions_application_navtosupport_action,
	kameraanbindungui_actions_application_onwillupdate_action : kameraanbindungui_actions_application_onwillupdate_action,
	kameraanbindungui_actions_application_reset_action : kameraanbindungui_actions_application_reset_action,
	kameraanbindungui_actions_application_resetmessage_action : kameraanbindungui_actions_application_resetmessage_action,
	kameraanbindungui_actions_application_usermenupopover_action : kameraanbindungui_actions_application_usermenupopover_action,
	kameraanbindungui_actions_closemodalpage_cancel_action : kameraanbindungui_actions_closemodalpage_cancel_action,
	kameraanbindungui_actions_closemodalpage_complete_action : kameraanbindungui_actions_closemodalpage_complete_action,
	kameraanbindungui_actions_closepage_action : kameraanbindungui_actions_closepage_action,
	kameraanbindungui_actions_genericbannermessage_action : kameraanbindungui_actions_genericbannermessage_action,
	kameraanbindungui_actions_genericmessagebox_action : kameraanbindungui_actions_genericmessagebox_action,
	kameraanbindungui_actions_genericnavigation_action : kameraanbindungui_actions_genericnavigation_action,
	kameraanbindungui_actions_generictoastmessage_action : kameraanbindungui_actions_generictoastmessage_action,
	kameraanbindungui_actions_kameraanbindungservice_acceslogs_navtoacceslogs_detail_action : kameraanbindungui_actions_kameraanbindungservice_acceslogs_navtoacceslogs_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_acceslogs_navtoacceslogs_list_action : kameraanbindungui_actions_kameraanbindungservice_acceslogs_navtoacceslogs_list_action,
	kameraanbindungui_actions_kameraanbindungservice_cameraevents_navtocameraevents_detail_action : kameraanbindungui_actions_kameraanbindungservice_cameraevents_navtocameraevents_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_cameraevents_navtocameraevents_list_action : kameraanbindungui_actions_kameraanbindungservice_cameraevents_navtocameraevents_list_action,
	kameraanbindungui_actions_kameraanbindungservice_cameras_navtocameras_detail_action : kameraanbindungui_actions_kameraanbindungservice_cameras_navtocameras_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_cameras_navtocameras_list_action : kameraanbindungui_actions_kameraanbindungservice_cameras_navtocameras_list_action,
	kameraanbindungui_actions_kameraanbindungservice_company_navtocompany_detail_action : kameraanbindungui_actions_kameraanbindungservice_company_navtocompany_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_company_navtocompany_list_action : kameraanbindungui_actions_kameraanbindungservice_company_navtocompany_list_action,
	kameraanbindungui_actions_kameraanbindungservice_reservations_navtoreservations_detail_action : kameraanbindungui_actions_kameraanbindungservice_reservations_navtoreservations_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_reservations_navtoreservations_list_action : kameraanbindungui_actions_kameraanbindungservice_reservations_navtoreservations_list_action,
	kameraanbindungui_actions_kameraanbindungservice_service_initializeonline_action : kameraanbindungui_actions_kameraanbindungservice_service_initializeonline_action,
	kameraanbindungui_actions_kameraanbindungservice_service_initializeonlinefailuremessage_action : kameraanbindungui_actions_kameraanbindungservice_service_initializeonlinefailuremessage_action,
	kameraanbindungui_actions_kameraanbindungservice_session_navtosession_detail_action : kameraanbindungui_actions_kameraanbindungservice_session_navtosession_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_session_navtosession_list_action : kameraanbindungui_actions_kameraanbindungservice_session_navtosession_list_action,
	kameraanbindungui_actions_kameraanbindungservice_tariffs_navtotariffs_detail_action : kameraanbindungui_actions_kameraanbindungservice_tariffs_navtotariffs_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_tariffs_navtotariffs_list_action : kameraanbindungui_actions_kameraanbindungservice_tariffs_navtotariffs_list_action,
	kameraanbindungui_actions_kameraanbindungservice_users_navtousers_detail_action : kameraanbindungui_actions_kameraanbindungservice_users_navtousers_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_users_navtousers_list_action : kameraanbindungui_actions_kameraanbindungservice_users_navtousers_list_action,
	kameraanbindungui_actions_kameraanbindungservice_vehicles_navtovehicles_detail_action : kameraanbindungui_actions_kameraanbindungservice_vehicles_navtovehicles_detail_action,
	kameraanbindungui_actions_kameraanbindungservice_vehicles_navtovehicles_list_action : kameraanbindungui_actions_kameraanbindungservice_vehicles_navtovehicles_list_action,
	kameraanbindungui_actions_logging_loguploadfailure_action : kameraanbindungui_actions_logging_loguploadfailure_action,
	kameraanbindungui_actions_logging_loguploadsuccessful_action : kameraanbindungui_actions_logging_loguploadsuccessful_action,
	kameraanbindungui_actions_logging_uploadlog_action : kameraanbindungui_actions_logging_uploadlog_action,
	kameraanbindungui_actions_logging_uploadlogprogress_action : kameraanbindungui_actions_logging_uploadlogprogress_action,
	kameraanbindungui_globals_application_appdefinition_version_global : kameraanbindungui_globals_application_appdefinition_version_global,
	kameraanbindungui_globals_application_applicationname_global : kameraanbindungui_globals_application_applicationname_global,
	kameraanbindungui_globals_application_supportemail_global : kameraanbindungui_globals_application_supportemail_global,
	kameraanbindungui_globals_application_supportphone_global : kameraanbindungui_globals_application_supportphone_global,
	kameraanbindungui_i18n_i18n_properties : kameraanbindungui_i18n_i18n_properties,
	kameraanbindungui_jsconfig_json : kameraanbindungui_jsconfig_json,
	kameraanbindungui_pages_application_about_page : kameraanbindungui_pages_application_about_page,
	kameraanbindungui_pages_application_support_page : kameraanbindungui_pages_application_support_page,
	kameraanbindungui_pages_application_useractivitylog_page : kameraanbindungui_pages_application_useractivitylog_page,
	kameraanbindungui_pages_kameraanbindungservice_acceslogs_acceslogs_detail_page : kameraanbindungui_pages_kameraanbindungservice_acceslogs_acceslogs_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_acceslogs_acceslogs_list_page : kameraanbindungui_pages_kameraanbindungservice_acceslogs_acceslogs_list_page,
	kameraanbindungui_pages_kameraanbindungservice_cameraevents_cameraevents_detail_page : kameraanbindungui_pages_kameraanbindungservice_cameraevents_cameraevents_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_cameraevents_cameraevents_list_page : kameraanbindungui_pages_kameraanbindungservice_cameraevents_cameraevents_list_page,
	kameraanbindungui_pages_kameraanbindungservice_cameras_cameras_detail_page : kameraanbindungui_pages_kameraanbindungservice_cameras_cameras_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_cameras_cameras_list_page : kameraanbindungui_pages_kameraanbindungservice_cameras_cameras_list_page,
	kameraanbindungui_pages_kameraanbindungservice_company_company_detail_page : kameraanbindungui_pages_kameraanbindungservice_company_company_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_company_company_list_page : kameraanbindungui_pages_kameraanbindungservice_company_company_list_page,
	kameraanbindungui_pages_kameraanbindungservice_reservations_reservations_detail_page : kameraanbindungui_pages_kameraanbindungservice_reservations_reservations_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_reservations_reservations_list_page : kameraanbindungui_pages_kameraanbindungservice_reservations_reservations_list_page,
	kameraanbindungui_pages_kameraanbindungservice_session_session_detail_page : kameraanbindungui_pages_kameraanbindungservice_session_session_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_session_session_list_page : kameraanbindungui_pages_kameraanbindungservice_session_session_list_page,
	kameraanbindungui_pages_kameraanbindungservice_tariffs_tariffs_detail_page : kameraanbindungui_pages_kameraanbindungservice_tariffs_tariffs_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_tariffs_tariffs_list_page : kameraanbindungui_pages_kameraanbindungservice_tariffs_tariffs_list_page,
	kameraanbindungui_pages_kameraanbindungservice_users_users_detail_page : kameraanbindungui_pages_kameraanbindungservice_users_users_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_users_users_list_page : kameraanbindungui_pages_kameraanbindungservice_users_users_list_page,
	kameraanbindungui_pages_kameraanbindungservice_vehicles_vehicles_detail_page : kameraanbindungui_pages_kameraanbindungservice_vehicles_vehicles_detail_page,
	kameraanbindungui_pages_kameraanbindungservice_vehicles_vehicles_list_page : kameraanbindungui_pages_kameraanbindungservice_vehicles_vehicles_list_page,
	kameraanbindungui_pages_main_page : kameraanbindungui_pages_main_page,
	kameraanbindungui_rules_application_appupdatefailure_js : kameraanbindungui_rules_application_appupdatefailure_js,
	kameraanbindungui_rules_application_appupdatesuccess_js : kameraanbindungui_rules_application_appupdatesuccess_js,
	kameraanbindungui_rules_application_clientismultiusermode_js : kameraanbindungui_rules_application_clientismultiusermode_js,
	kameraanbindungui_rules_application_getclientsupportversions_js : kameraanbindungui_rules_application_getclientsupportversions_js,
	kameraanbindungui_rules_application_getclientversion_js : kameraanbindungui_rules_application_getclientversion_js,
	kameraanbindungui_rules_application_onwillupdate_js : kameraanbindungui_rules_application_onwillupdate_js,
	kameraanbindungui_rules_application_resetappsettingsandlogout_js : kameraanbindungui_rules_application_resetappsettingsandlogout_js,
	kameraanbindungui_rules_logging_loglevels_js : kameraanbindungui_rules_logging_loglevels_js,
	kameraanbindungui_rules_logging_settracecategories_js : kameraanbindungui_rules_logging_settracecategories_js,
	kameraanbindungui_rules_logging_setuserloglevel_js : kameraanbindungui_rules_logging_setuserloglevel_js,
	kameraanbindungui_rules_logging_togglelogging_js : kameraanbindungui_rules_logging_togglelogging_js,
	kameraanbindungui_rules_logging_tracecategories_js : kameraanbindungui_rules_logging_tracecategories_js,
	kameraanbindungui_rules_logging_userlogsetting_js : kameraanbindungui_rules_logging_userlogsetting_js,
	kameraanbindungui_rules_service_initialize_js : kameraanbindungui_rules_service_initialize_js,
	kameraanbindungui_services_kameraanbindungservice_service : kameraanbindungui_services_kameraanbindungservice_service,
	kameraanbindungui_styles_styles_css : kameraanbindungui_styles_styles_css,
	kameraanbindungui_styles_styles_json : kameraanbindungui_styles_styles_json,
	kameraanbindungui_styles_styles_less : kameraanbindungui_styles_styles_less,
	kameraanbindungui_styles_styles_nss : kameraanbindungui_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Application/AppUpdateFailure.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Application/AppUpdateFailure.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/KameraAnbindungUI/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Application/AppUpdateSuccess.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Application/AppUpdateSuccess.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/KameraAnbindungUI/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/KameraAnbindungUI/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Application/ClientIsMultiUserMode.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Application/ClientIsMultiUserMode.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Application/GetClientSupportVersions.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Application/GetClientSupportVersions.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Application/GetClientVersion.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Application/GetClientVersion.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Application/OnWillUpdate.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Application/OnWillUpdate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/KameraAnbindungUI/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Application/ResetAppSettingsAndLogout.js":
/*!********************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/KameraAnbindungUI/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Logging/LogLevels.js":
/*!************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Logging/LogLevels.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Logging/SetTraceCategories.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Logging/SetTraceCategories.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Logging/SetUserLogLevel.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Logging/SetUserLogLevel.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Logging/ToggleLogging.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Logging/ToggleLogging.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Logging/TraceCategories.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Logging/TraceCategories.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Logging/UserLogSetting.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Logging/UserLogSetting.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Rules/Service/Initialize.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Rules/Service/Initialize.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _KameraAnbindungService = context.executeAction('/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnline.action');

  //You can add more service initialize actions here

  return Promise.all([_KameraAnbindungService]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/KameraAnbindungUI/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Styles/Styles.css":
/*!***************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Styles/Styles.css ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/KameraAnbindungUI/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Styles/Styles.less":
/*!****************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Styles/Styles.less ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/KameraAnbindungUI/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Styles/Styles.nss":
/*!***************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Styles/Styles.nss ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/Application/About.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/Application/About.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/KameraAnbindungUI/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/KameraAnbindungUI/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/KameraAnbindungUI/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/KameraAnbindungUI/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KameraAnbindungUI/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/Application/Support.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/Application/Support.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/KameraAnbindungUI/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/KameraAnbindungUI/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/KameraAnbindungUI/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/KameraAnbindungUI/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KameraAnbindungUI/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/Application/UserActivityLog.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/Application/UserActivityLog.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/KameraAnbindungUI/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/KameraAnbindungUI/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/KameraAnbindungUI/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/KameraAnbindungUI/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/KameraAnbindungUI/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/KameraAnbindungUI/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/KameraAnbindungUI/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"},"OnLoaded":"/KameraAnbindungUI/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_Detail.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_Detail.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"AccesLogs","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,AccesLogs_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{entityName}","Subhead":"{role}","BodyText":"","Footnote":"","Description":"{action}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"role","Value":"{role}","_Type":"KeyValue.Type.Item"},{"KeyName":"action","Value":"{action}","_Type":"KeyValue.Type.Item"},{"KeyName":"entityName","Value":"{entityName}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"AccesLogs_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_List.page":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_List.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,AccesLogs)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{action}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_Detail.action","StatusImage":"","Title":"{entityName}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{role}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"AccesLogs","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"AccesLogs_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_Detail.page":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_Detail.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"CameraEvents","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,CameraEvents_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{sourceDeviceId}","Subhead":"{eventType}","BodyText":"","Footnote":"{plateNormalized}","Description":"{timestamp}","StatusText":"{confidence}","StatusImage":"","SubstatusImage":"","SubstatusText":"{payloadVersion}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"eventType","Value":"{eventType}","_Type":"KeyValue.Type.Item"},{"KeyName":"sourceDeviceId","Value":"{sourceDeviceId}","_Type":"KeyValue.Type.Item"},{"KeyName":"timestamp","Value":"{timestamp}","_Type":"KeyValue.Type.Item"},{"KeyName":"plateNormalized","Value":"{plateNormalized}","_Type":"KeyValue.Type.Item"},{"KeyName":"confidence","Value":"{confidence}","_Type":"KeyValue.Type.Item"},{"KeyName":"payloadVersion","Value":"{payloadVersion}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"CameraEvents_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_List.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_List.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,CameraEvents)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{timestamp}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_Detail.action","StatusImage":"","Title":"{sourceDeviceId}","Footnote":"{plateNormalized}","PreserveIconStackSpacing":false,"StatusText":"{confidence}","Subhead":"{eventType}","SubstatusText":"{payloadVersion}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"CameraEvents","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"CameraEvents_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_Detail.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_Detail.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"Cameras","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Cameras_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{name}","Subhead":"{ipAdress}","BodyText":"","Footnote":"","Description":"{location}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"name","Value":"{name}","_Type":"KeyValue.Type.Item"},{"KeyName":"ipAdress","Value":"{ipAdress}","_Type":"KeyValue.Type.Item"},{"KeyName":"location","Value":"{location}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Cameras_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_List.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_List.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Cameras)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{location}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_Detail.action","StatusImage":"","Title":"{name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{ipAdress}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Cameras","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Cameras_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_Detail.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_Detail.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"Company","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Company_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Name}","Subhead":"{eMail}","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Name","Value":"{Name}","_Type":"KeyValue.Type.Item"},{"KeyName":"eMail","Value":"{eMail}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Company_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_List.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_List.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Company)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{eMail}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Company","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Company_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_Detail.page":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_Detail.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"Reservations","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Reservations_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ID}","Subhead":"","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Reservations_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_List.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_List.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Reservations)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_Detail.action","StatusImage":"","Title":"{ID}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Reservations","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Reservations_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_Detail.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_Detail.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"Session","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Session_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ID}","Subhead":"{entryTime}","BodyText":"","Footnote":"{status}","Description":"{exitTime}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"entryTime","Value":"{entryTime}","_Type":"KeyValue.Type.Item"},{"KeyName":"exitTime","Value":"{exitTime}","_Type":"KeyValue.Type.Item"},{"KeyName":"status","Value":"{status}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Session_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_List.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_List.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Session)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{exitTime}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_Detail.action","StatusImage":"","Title":"{ID}","Footnote":"{status}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{entryTime}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Session","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Session_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_Detail.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_Detail.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"Tariffs","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Tariffs_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{name}","Subhead":"{price}","BodyText":"","Footnote":"","Description":"{unit}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"name","Value":"{name}","_Type":"KeyValue.Type.Item"},{"KeyName":"price","Value":"{price}","_Type":"KeyValue.Type.Item"},{"KeyName":"unit","Value":"{unit}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Tariffs_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_List.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_List.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Tariffs)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{unit}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_Detail.action","StatusImage":"","Title":"{name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{price}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Tariffs","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Tariffs_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_Detail.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_Detail.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"Users","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Users_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{lastName}","Subhead":"{firstName}","BodyText":"","Footnote":"{role}","Description":"{eMail}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"lastName","Value":"{lastName}","_Type":"KeyValue.Type.Item"},{"KeyName":"firstName","Value":"{firstName}","_Type":"KeyValue.Type.Item"},{"KeyName":"eMail","Value":"{eMail}","_Type":"KeyValue.Type.Item"},{"KeyName":"role","Value":"{role}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"vehicles","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ID}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{licencePlate}","SubstatusText":"","OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/vehicles","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"reservations","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ID}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"","SubstatusText":"","OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/reservations","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"accesLogs","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{action}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{entityName}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{role}","SubstatusText":"","OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/accesLogs","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Vehicles","Reservations","AccesLogs"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Users_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_List.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_List.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Users)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{eMail}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_Detail.action","StatusImage":"","Title":"{lastName}","Footnote":"{role}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{firstName}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Users","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Users_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_Detail.page":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_Detail.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","EntitySet":"Vehicles","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Vehicles_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ID}","Subhead":"{licencePlate}","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"licencePlate","Value":"{licencePlate}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Vehicles_Detail"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_List.page":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_List.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Vehicles)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_Detail.action","StatusImage":"","Title":"{ID}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{licencePlate}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Vehicles","Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Vehicles_List"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Pages/Main.page":
/*!*************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Pages/Main.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_KameraAnbindungService","AccessoryType":"None","UseTopPadding":true,"Caption":"KameraAnbindungService","_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_List.action","Alignment":"Center","Title":"AccesLogs","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_List.action","Alignment":"Center","Title":"CameraEvents","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_List.action","Alignment":"Center","Title":"Cameras","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_List.action","Alignment":"Center","Title":"Company","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_List.action","Alignment":"Center","Title":"Reservations","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_List.action","Alignment":"Center","Title":"Session","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_List.action","Alignment":"Center","Title":"Tariffs","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_List.action","Alignment":"Center","Title":"Users","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_List.action","Alignment":"Center","Title":"Vehicles","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"}],"_Name":"SectionButtonTable_KameraAnbindungService","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/KameraAnbindungUI/Actions/Application/UserMenuPopover.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Main","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"KameraAnbindungUI","Version":"/KameraAnbindungUI/Globals/Application/AppDefinition_Version.global","MainPage":"/KameraAnbindungUI/Pages/Main.page","OnLaunch":"/KameraAnbindungUI/Rules/Service/Initialize.js","OnWillUpdate":"/KameraAnbindungUI/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/KameraAnbindungUI/Rules/Service/Initialize.js","Styles":"/KameraAnbindungUI/Styles/Styles.less","Localization":"/KameraAnbindungUI/i18n/i18n.properties","_SchemaVersion":"26.3","StyleSheets":{"Styles":{"css":"/KameraAnbindungUI/Styles/Styles.css","ios":"/KameraAnbindungUI/Styles/Styles.nss","android":"/KameraAnbindungUI/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdate.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdate.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/KameraAnbindungUI/Rules/Application/AppUpdateFailure.js","OnSuccess":"/KameraAnbindungUI/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateFailureMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateFailureMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateProgressBanner.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateProgressBanner.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/KameraAnbindungUI/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateSuccessMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/AppUpdateSuccessMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/Logout.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/Logout.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/NavToAbout.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/NavToAbout.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/KameraAnbindungUI/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/NavToActivityLog.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/NavToActivityLog.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/KameraAnbindungUI/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/NavToSupport.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/NavToSupport.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/KameraAnbindungUI/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/OnWillUpdate.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/OnWillUpdate.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/Reset.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/Reset.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/ResetMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/ResetMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/KameraAnbindungUI/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Application/UserMenuPopover.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Application/UserMenuPopover.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/KameraAnbindungUI/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/KameraAnbindungUI/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/KameraAnbindungUI/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/KameraAnbindungUI/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/KameraAnbindungUI/Actions/Application/Logout.action","Title":"Logout","Visible":"/KameraAnbindungUI/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/CloseModalPage_Cancel.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/CloseModalPage_Cancel.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/CloseModalPage_Complete.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/CloseModalPage_Complete.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/ClosePage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/ClosePage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/GenericBannerMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/GenericBannerMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/GenericMessageBox.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/GenericMessageBox.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/GenericNavigation.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/GenericNavigation.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/KameraAnbindungUI/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/GenericToastMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/GenericToastMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_Detail.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_Detail.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_List.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/AccesLogs/NavToAccesLogs_List.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_AccesLogs/AccesLogs_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_Detail.action":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_Detail.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_List.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/CameraEvents/NavToCameraEvents_List.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_CameraEvents/CameraEvents_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_Detail.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_Detail.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_List.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Cameras/NavToCameras_List.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Cameras/Cameras_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_Detail.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_Detail.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_List.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Company/NavToCompany_List.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Company/Company_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_Detail.action":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_Detail.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_List.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Reservations/NavToReservations_List.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Reservations/Reservations_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnline.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnline.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/KameraAnbindungUI/Services/KameraAnbindungService.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnFailure":"/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnlineFailureMessage.action":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Service/InitializeOnlineFailureMessage.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_Detail.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_Detail.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_List.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Session/NavToSession_List.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Session/Session_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_Detail.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_Detail.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_List.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Tariffs/NavToTariffs_List.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Tariffs/Tariffs_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_Detail.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_Detail.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_List.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Users/NavToUsers_List.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Users/Users_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_Detail.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_Detail.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_Detail.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_List.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/KameraAnbindungService/Vehicles/NavToVehicles_List.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/KameraAnbindungUI/Pages/KameraAnbindungService_Vehicles/Vehicles_List.page"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Logging/LogUploadFailure.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Logging/LogUploadFailure.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Logging/LogUploadSuccessful.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Logging/LogUploadSuccessful.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Logging/UploadLog.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Logging/UploadLog.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/KameraAnbindungUI/Actions/Logging/LogUploadFailure.action","OnSuccess":"/KameraAnbindungUI/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Actions/Logging/UploadLogProgress.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Actions/Logging/UploadLogProgress.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/KameraAnbindungUI/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Globals/Application/AppDefinition_Version.global":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Globals/Application/AppDefinition_Version.global ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Globals/Application/ApplicationName.global":
/*!****************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Globals/Application/ApplicationName.global ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Globals/Application/SupportEmail.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Globals/Application/SupportEmail.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Globals/Application/SupportPhone.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Globals/Application/SupportPhone.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Services/KameraAnbindungService.service":
/*!*************************************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Services/KameraAnbindungService.service ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../service/KameraAnbindungService/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/Styles/Styles.json":
/*!****************************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/Styles/Styles.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/KameraAnbindungUI/jsconfig.json":
/*!***********************************************************!*\
  !*** ./build.definitions/KameraAnbindungUI/jsconfig.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map