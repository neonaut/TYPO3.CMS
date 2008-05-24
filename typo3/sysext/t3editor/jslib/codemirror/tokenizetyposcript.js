/* Tokenizer for TypoScript code
 *
 * based on tokenizejavascript.js by Marijn Haverbeke
 */

// List of "reserved" word in typoscript and a css-class
var typoscriptWords = {
	'_CSS_DEFAULT_STYLE': 'keyword',
	'_DEFAULT_PI_VARS': 'keyword',
	'_GIFBUILDER': 'keyword',
	'_LOCAL_LANG': 'keyword',
	'CARRAY': 'keyword',
	'CASE': 'keyword',
	'CLEARGIF': 'keyword',
	'COA': 'keyword',
	'COA_INT': 'keyword',
	'COBJ_ARRAY': 'keyword',
	'COLUMNS': 'keyword',
	'CONFIG': 'keyword',
	'CONSTANTS': 'keyword',
	'CONTENT': 'keyword',
	'CTABLE': 'keyword',
	'CType': 'keyword',
	'DB': 'keyword',
	'DOCUMENT_BODY': 'keyword',
	'EDITPANEL': 'keyword',
	'EFFECT': 'keyword',
	'FE_DATA': 'keyword',
	'FE_TABLE': 'keyword',
	'FEData': 'keyword',
	'FILE': 'keyword',
	'FORM': 'keyword',
	'FRAME': 'keyword',
	'FRAMESET': 'keyword',
	'GIFBUILDER': 'keyword',
	'global': 'keyword',
	'globalString': 'keyword',
	'globalVar': 'keyword',
	'GMENU': 'keyword',
	'GMENU_FOLDOUT': 'keyword',
	'GMENU_LAYERS': 'keyword',
	'GP': 'keyword',
	'HMENU': 'keyword',
	'HRULER': 'keyword',
	'HTML': 'keyword',
	'IENV': 'keyword',
	'IMAGE': 'keyword',
	'IMG_RESOURCE': 'keyword',
	'IMGMENU': 'keyword',
	'IMGMENUITEM': 'keyword',
	'IMGTEXT': 'keyword',
	'INCLUDE_TYPOSCRIPT': 'keyword',
	'includeLibs': 'keyword',
	'JSMENU': 'keyword',
	'JSMENUITEM': 'keyword',
	'LIT': 'keyword',
	'LOAD_REGISTER': 'keyword',
	'META': 'keyword',
	'MULTIMEDIA': 'keyword',
	'OTABLE': 'keyword',
	'PAGE': 'keyword',
	'PAGE_TARGET': 'keyword',
	'PAGE_TSCONFIG_ID': 'keyword',
	'PAGE_TSCONFIG_IDLIST': 'keyword',
	'PAGE_TSCONFIG_STR': 'keyword',
	'PHP_SCRIPT': 'keyword',
	'PHP_SCRIPT_EXT': 'keyword',
	'PHP_SCRIPT_INT': 'keyword',
	'RECORDS': 'keyword',
	'REMOTE_ADDR': 'keyword',
	'RESTORE_REGISTER': 'keyword',
	'RTE': 'keyword',
	'SEARCHRESULT': 'keyword',
	'SHARED': 'keyword',
	'TCAdefaults': 'keyword',
	'TCEFORM': 'keyword',
	'TCEMAIN': 'keyword',
	'TEMPLATE': 'keyword',
	'TEXT': 'keyword',
	'TMENU': 'keyword',
	'TMENU_LAYERS': 'keyword',
	'TMENUITEM': 'keyword',
	'TSFE': 'keyword',
	'USER': 'keyword',
	'USER_INT': 'keyword',
	
	'userFunc': 'keyword',

	'_offset': 'reserved',
	'absRefPrefix': 'reserved',
	'accessibility': 'reserved',
	'accessKey': 'reserved',
	'addAttributes': 'reserved',
	'addExtUrlsAndShortCuts': 'reserved',
	'addItems': 'reserved',
	'additionalHeaders': 'reserved',
	'additionalParams': 'reserved',
	'addParams': 'reserved',
	'addQueryString': 'reserved',
	'adjustItemsH': 'reserved',
	'adjustSubItemsH': 'reserved',
	'adminPanelStyles': 'reserved',
	'after': 'reserved',
	'afterImg': 'reserved',
	'afterImgLink': 'reserved',
	'afterImgTagParams': 'reserved',
	'afterROImg': 'reserved',
	'afterWrap': 'reserved',
	'age': 'reserved',
	'alertPopups': 'reserved',
	'align': 'reserved',
	'allow': 'reserved',
	'allowCaching': 'reserved',
	'allowedAttribs': 'reserved',
	'allowedClasses': 'reserved',
	'allowedCols': 'reserved',
	'allowEdit': 'reserved',
	'allowedNewTables': 'reserved',
	'allowNew': 'reserved',
	'allowTags': 'reserved',
	'allowTVlisting': 'reserved',
	'allSaveFunctions': 'reserved',
	'allStdWrap': 'reserved',
	'allWrap': 'reserved',
	'alternateBgColors': 'reserved',
	'alternativeSortingField': 'reserved',
	'alternativeTempPath': 'reserved',
	'altImgResource': 'reserved',
	'altLabels': 'reserved',
	'altTarget': 'reserved',
	'altText': 'reserved',
	'altUrl': 'reserved',
	'altUrl_noDefaultParams': 'reserved',
	'altWrap': 'reserved',
	'always': 'reserved',
	'alwaysActivePIDlist': 'reserved',
	'alwaysLink': 'reserved',
	'alwaysShowClickMenuInTopFrame': 'reserved',
	'andWhere': 'reserved',
	'angle': 'reserved',
	'antiAlias': 'reserved',
	'append': 'reserved',
	'applyTotalH': 'reserved',
	'applyTotalW': 'reserved',
	'archive': 'reserved',
	'archiveTypoLink': 'reserved',
	'arrayReturnMode': 'reserved',
	'arrowACT': 'reserved',
	'arrowImgParams': 'reserved',
	'arrowNO': 'reserved',
	'ATagAfterWrap': 'reserved',
	'ATagBeforeWrap': 'reserved',
	'ATagParams': 'reserved',
	'ATagTitle': 'reserved',
	'attribute': 'reserved',
	'autoInsertPID': 'reserved',
	'autoLevels': 'reserved',
	'autonumber': 'reserved',
	'backColor': 'reserved',
	'background': 'reserved',
	'badMess': 'reserved',
	'baseURL': 'reserved',
	'before': 'reserved',
	'beforeImg': 'reserved',
	'beforeImgLink': 'reserved',
	'beforeImgTagParams': 'reserved',
	'beforeROImg': 'reserved',
	'beforeWrap': 'reserved',
	'begin': 'reserved',
	'beLoginLinkIPList': 'reserved',
	'beLoginLinkIPList_login': 'reserved',
	'beLoginLinkIPList_logout': 'reserved',
	'bgCol': 'reserved',
	'bgImg': 'reserved',
	'blankStrEqFalse': 'reserved',
	'blur': 'reserved',
	'bm': 'reserved',
	'bodyTag': 'reserved',
	'bodyTagAdd': 'reserved',
	'bodyTagCObject': 'reserved',
	'bodyTagMargins': 'reserved',
	'bodytext': 'reserved',
	'border': 'reserved',
	'borderCol': 'reserved',
	'bordersWithin': 'reserved',
	'borderThick': 'reserved',
	'bottomBackColor': 'reserved',
	'bottomContent': 'reserved',
	'bottomHeight': 'reserved',
	'bottomImg': 'reserved',
	'bottomImg_mask': 'reserved',
	'br': 'reserved',
	'brTag': 'reserved',
	'bullet': 'reserved',
	'bulletlist': 'reserved',
	'bytes': 'reserved',
	'cache_clearAtMidnight': 'reserved',
	'cache_period': 'reserved',
	'caption': 'reserved',
	'caption_stdWrap': 'reserved',
	'captionAlign': 'reserved',
	'captionHeader': 'reserved',
	'captionSplit': 'reserved',
	'case': 'reserved',
	'casesensitiveComp': 'reserved',
	'cellpadding': 'reserved',
	'cellspacing': 'reserved',
	'centerImgACT': 'reserved',
	'centerImgCUR': 'reserved',
	'centerImgNO': 'reserved',
	'centerLeftImgACT': 'reserved',
	'centerLeftImgCUR': 'reserved',
	'centerLeftImgNO': 'reserved',
	'centerRightImgACT': 'reserved',
	'centerRightImgCUR': 'reserved',
	'centerRightImgNO': 'reserved',
	'char': 'reserved',
	'charcoal': 'reserved',
	'charMapConfig': 'reserved',
	'check': 'reserved',
	'class': 'reserved',
	'classesAnchor': 'reserved',
	'classesCharacter': 'reserved',
	'classesImage': 'reserved',
	'classesParagraph': 'reserved',
	'classicPageEditMode': 'reserved',
	'clear': 'reserved',
	'clearCache': 'reserved',
	'clearCache_disable': 'reserved',
	'clearCache_pageGrandParent': 'reserved',
	'clearCache_pageSiblingChildren': 'reserved',
	'clearCacheCmd': 'reserved',
	'clearCacheLevels': 'reserved',
	'clearCacheOfPages': 'reserved',
	'clickMenuTimeOut': 'reserved',
	'clickTitleMode': 'reserved',
	'clipboardNumberPads': 'reserved',
	'cMargins': 'reserved',
	'cObjNum': 'reserved',
	'collapse': 'reserved',
	'color': 'reserved',
	'color1': 'reserved',
	'color2': 'reserved',
	'color3': 'reserved',
	'color4': 'reserved',
	'colors': 'reserved',
	'colour': 'reserved',
	'colPos_list': 'reserved',
	'colRelations': 'reserved',
	'cols': 'reserved',
	'colSpace': 'reserved',
	'comment_auto': 'reserved',
	'commentWrap': 'reserved',
	'compensateFieldWidth': 'reserved',
	'compX': 'reserved',
	'compY': 'reserved',
	'condensedMode': 'reserved',
	'conf': 'reserved',
	'constants': 'reserved',
	'content_from_pid_allowOutsideDomain': 'reserved',
	'contextMenu': 'reserved',
	'copyLevels': 'reserved',
	'count_HMENU_MENUOBJ': 'reserved',
	'count_menuItems': 'reserved',
	'count_MENUOBJ': 'reserved',
	'create': 'reserved',
	'createFoldersInEB': 'reserved',
	'crop': 'reserved',
	'csConv': 'reserved',
	'CSS_inlineStyle': 'reserved',
	'current': 'reserved',
	'curUid': 'reserved',
	'cWidth': 'reserved',
	'data': 'reserved',
	'dataWrap': 'reserved',
	'date': 'reserved',
	'date_stdWrap': 'reserved',
	'datePrefix': 'reserved',
	'debug': 'reserved',
	'debugData': 'reserved',
	'debugFunc': 'reserved',
	'debugItemConf': 'reserved',
	'debugRenumberedObject': 'reserved',
	'default': 'reserved',
	'defaultAlign': 'reserved',
	'defaultCmd': 'reserved',
	'defaultFileUploads': 'reserved',
	'defaultHeaderType': 'reserved',
	'defaultOutput': 'reserved',
	'defaults': 'reserved',
	'defaultType': 'reserved',
	'delete': 'reserved',
	'denyTags': 'reserved',
	'depth': 'reserved',
	'DESC': 'reserved',
	'dimensions': 'reserved',
	'directionLeft': 'reserved',
	'directionUp': 'reserved',
	'disableAdvanced': 'reserved',
	'disableAllHeaderCode': 'reserved',
	'disableAltText': 'reserved',
	'disableBigButtons': 'reserved',
	'disableCacheSelector': 'reserved',
	'disableCharsetHeader': 'reserved',
	'disableCMlayers': 'reserved',
	'disabled': 'reserved',
	'disableDelete': 'reserved',
	'disableDocModuleInAB': 'reserved',
	'disableDocSelector': 'reserved',
	'disableHideAtCopy': 'reserved',
	'disableIconLinkToContextmenu': 'reserved',
	'disableItems': 'reserved',
	'disableNewContentElementWizard': 'reserved',
	'disableNoMatchingValueElement': 'reserved',
	'disablePageExternalUrl': 'reserved',
	'disablePrefixComment': 'reserved',
	'disablePrependAtCopy': 'reserved',
	'disableSearchBox': 'reserved',
	'disableSingleTableView': 'reserved',
	'disableTabInTextarea': 'reserved',
	'displayActiveOnLoad': 'reserved',
	'displayContent': 'reserved',
	'displayFieldIcons': 'reserved',
	'displayIcons': 'reserved',
	'displayMessages': 'reserved',
	'displayQueries': 'reserved',
	'displayRecord': 'reserved',
	'displayTimes': 'reserved',
	'distributeX': 'reserved',
	'distributeY': 'reserved',
	'DIV': 'reserved',
	'doctype': 'reserved',
	'doctypeSwitch': 'reserved',
	'doktype': 'reserved',
	'doNotLinkIt': 'reserved',
	'doNotShowLink': 'reserved',
	'doNotStripHTML': 'reserved',
	'dontCheckPid': 'reserved',
	'dontFollowMouse': 'reserved',
	'dontHideOnMouseUp': 'reserved',
	'dontLinkIfSubmenu': 'reserved',
	'dontShowPalettesOnFocusInAB': 'reserved',
	'dontWrapInTable': 'reserved',
	'doubleBrTag': 'reserved',
	'doublePostCheck': 'reserved',
	'dWorkArea': 'reserved',
	'edge': 'reserved',
	'edit_docModuleUplaod': 'reserved',
	'edit_docModuleUpload': 'reserved',
	'edit_RTE': 'reserved',
	'edit_showFieldHelp': 'reserved',
	'edit_wideDocument': 'reserved',
	'editFieldsAtATime': 'reserved',
	'editFormsOnPage': 'reserved',
	'editIcons': 'reserved',
	'editNoPopup': 'reserved',
	'editPanel': 'reserved',
	'elements': 'reserved',
	'emailMeAtLogin': 'reserved',
	'emailMess': 'reserved',
	'emboss': 'reserved',
	'enable': 'reserved',
	'encapsLines': 'reserved',
	'encapsLinesStdWrap': 'reserved',
	'encapsTagList': 'reserved',
	'entryLevel': 'reserved',
	'equalH': 'reserved',
	'everybody': 'reserved',
	'excludeDoktypes': 'reserved',
	'excludeUidList': 'reserved',
	'expAll': 'reserved',
	'expand': 'reserved',
	'explode': 'reserved',
	'ext': 'reserved',
	'externalBlocks': 'reserved',
	'extTarget': 'reserved',
	'face': 'reserved',
	'fe_adminLib': 'reserved',
	'field': 'reserved',
	'fieldOrder': 'reserved',
	'fieldRequired': 'reserved',
	'fields': 'reserved',
	'fieldWrap': 'reserved',
	'file': 'reserved',
	'file1': 'reserved',
	'file2': 'reserved',
	'file3': 'reserved',
	'file4': 'reserved',
	'file5': 'reserved',
	'filelink': 'reserved',
	'filelist': 'reserved',
	'firstLabel': 'reserved',
	'firstLabelGeneral': 'reserved',
	'fixAttrib': 'reserved',
	'flip': 'reserved',
	'flop': 'reserved',
	'foldSpeed': 'reserved',
	'foldTimer': 'reserved',
	'fontColor': 'reserved',
	'fontFile': 'reserved',
	'fontOffset': 'reserved',
	'fontSize': 'reserved',
	'fontSizeMultiplicator': 'reserved',
	'fontTag': 'reserved',
	'forceDisplayFieldIcons': 'reserved',
	'forceDisplayIcons': 'reserved',
	'forceNoPopup': 'reserved',
	'forceTemplateParsing': 'reserved',
	'forceTypeValue': 'reserved',
	'format': 'reserved',
	'frame': 'reserved',
	'frameReloadIfNotInFrameset': 'reserved',
	'frameSet': 'reserved',
	'freezeMouseover': 'reserved',
	'ftu': 'reserved',
	'function': 'reserved',
	'gamma': 'reserved',
	'gapBgCol': 'reserved',
	'gapLineCol': 'reserved',
	'gapLineThickness': 'reserved',
	'gapWidth': 'reserved',
	'get': 'reserved',
	'getBorder': 'reserved',
	'getLeft': 'reserved',
	'getRight': 'reserved',
	'globalNesting': 'reserved',
	'goodMess': 'reserved',
	'gray': 'reserved',
	'group': 'reserved',
	'groupBy': 'reserved',
	'groupid': 'reserved',
	'header': 'reserved',
	'header_layout': 'reserved',
	'headerComment': 'reserved',
	'headerData': 'reserved',
	'headerSpace': 'reserved',
	'headTag': 'reserved',
	'height': 'reserved',
	'helpText': 'reserved',
	'hidden': 'reserved',
	'hiddenFields': 'reserved',
	'hide': 'reserved',
	'hideButCreateMap': 'reserved',
	'hideMenuTimer': 'reserved',
	'hideMenuWhenNotOver': 'reserved',
	'hidePStyleItems': 'reserved',
	'hideRecords': 'reserved',
	'hideSubmoduleIcons': 'reserved',
	'highColor': 'reserved',
	'history': 'reserved',
	'hover': 'reserved',
	'hoverStyle': 'reserved',
	'HTMLparser': 'reserved',
	'HTMLparser_tags': 'reserved',
	'htmlSpecialChars': 'reserved',
	'htmlTag_dir': 'reserved',
	'htmlTag_langKey': 'reserved',
	'htmlTag_setParams': 'reserved',
	'http': 'reserved',
	'icon': 'reserved',
	'icon_image_ext_list': 'reserved',
	'icon_link': 'reserved',
	'iconCObject': 'reserved',
	'ifEmpty': 'reserved',
	'image': 'reserved',
	'image_compression': 'reserved',
	'image_effects': 'reserved',
	'image_frames': 'reserved',
	'imageLinkWrap': 'reserved',
	'imagePath': 'reserved',
	'images': 'reserved',
	'imageWrapIfAny': 'reserved',
	'imgList': 'reserved',
	'imgMap': 'reserved',
	'imgMapExtras': 'reserved',
	'imgMax': 'reserved',
	'imgNameNotRandom': 'reserved',
	'imgNamePrefix': 'reserved',
	'imgObjNum': 'reserved',
	'imgParams': 'reserved',
	'imgPath': 'reserved',
	'imgStart': 'reserved',
	'import': 'reserved',
	'inc': 'reserved',
	'includeCSS': 'reserved',
	'includeLibrary': 'reserved',
	'includeNotInMenu': 'reserved',
	'incT3Lib_htmlmail': 'reserved',
	'index': 'reserved',
	'index_descrLgd': 'reserved',
	'index_enable': 'reserved',
	'index_externals': 'reserved',
	'inlineStyle2TempFile': 'reserved',
	'innerStdWrap': 'reserved',
	'innerStdWrap_all': 'reserved',
	'innerWrap': 'reserved',
	'innerWrap2': 'reserved',
	'input': 'reserved',
	'inputLevels': 'reserved',
	'insertClassesFromRTE': 'reserved',
	'insertData': 'reserved',
	'insertDmailerBoundaries': 'reserved',
	'intensity': 'reserved',
	'intTarget': 'reserved',
	'intval': 'reserved',
	'invert': 'reserved',
	'IProcFunc': 'reserved',
	'itemArrayProcFunc': 'reserved',
	'itemH': 'reserved',
	'items': 'reserved',
	'itemsProcFunc': 'reserved',
	'iterations': 'reserved',
	'join': 'reserved',
	'JSWindow': 'reserved',
	'JSwindow_params': 'reserved',
	'jumpurl': 'reserved',
	'jumpUrl': 'reserved',
	'jumpurl_enable': 'reserved',
	'jumpurl_mailto_disable': 'reserved',
	'jumpUrl_transferSession': 'reserved',
	'keep': 'reserved',
	'keepEntries': 'reserved',
	'keepNonMatchedTags': 'reserved',
	'key': 'reserved',
	'label': 'reserved',
	'labelStdWrap': 'reserved',
	'labelWrap': 'reserved',
	'lang': 'reserved',
	'language': 'reserved',
	'language_alt': 'reserved',
	'languageField': 'reserved',
	'layer_menu_id': 'reserved',
	'layerStyle': 'reserved',
	'left': 'reserved',
	'leftIcons': 'reserved',
	'leftImgACT': 'reserved',
	'leftImgCUR': 'reserved',
	'leftImgNO': 'reserved',
	'leftjoin': 'reserved',
	'leftOffset': 'reserved',
	'levels': 'reserved',
	'leveluid': 'reserved',
	'limit': 'reserved',
	'line': 'reserved',
	'lineColor': 'reserved',
	'lineThickness': 'reserved',
	'linkPrefix': 'reserved',
	'linkTitleToSelf': 'reserved',
	'linkVars': 'reserved',
	'linkWrap': 'reserved',
	'listNum': 'reserved',
	'listOnlyInSingleTableView': 'reserved',
	'lm': 'reserved',
	'locale_all': 'reserved',
	'localNesting': 'reserved',
	'locationData': 'reserved',
	'lockFilePath': 'reserved',
	'lockPosition': 'reserved',
	'lockPosition_addSelf': 'reserved',
	'lockPosition_adjust': 'reserved',
	'lockToIP': 'reserved',
	'longdescURL': 'reserved',
	'lowColor': 'reserved',
	'lower': 'reserved',
	'LR': 'reserved',
	'mailto': 'reserved',
	'main': 'reserved',
	'mainScript': 'reserved',
	'makelinks': 'reserved',
	'markerWrap': 'reserved',
	'mask': 'reserved',
	'max': 'reserved',
	'maxAge': 'reserved',
	'maxAgeDays': 'reserved',
	'maxChars': 'reserved',
	'maxH': 'reserved',
	'maxHeight': 'reserved',
	'maxItems': 'reserved',
	'maxW': 'reserved',
	'maxWidth': 'reserved',
	'maxWInText': 'reserved',
	'mayNotCreateEditShortcuts': 'reserved',
	'menu_type': 'reserved',
	'menuBackColor': 'reserved',
	'menuHeight': 'reserved',
	'menuName': 'reserved',
	'menuOffset': 'reserved',
	'menuWidth': 'reserved',
	'message_page_is_being_generated': 'reserved',
	'message_preview': 'reserved',
	'meta': 'reserved',
	'metaCharset': 'reserved',
	'method': 'reserved',
	'min': 'reserved',
	'minH': 'reserved',
	'minItems': 'reserved',
	'minW': 'reserved',
	'mode': 'reserved',
	'moduleMenuCollapsable': 'reserved',
	'MP_defaults': 'reserved',
	'MP_disableTypolinkClosestMPvalue': 'reserved',
	'MP_mapRootPoints': 'reserved',
	'name': 'reserved',
	'navFrameResizable': 'reserved',
	'navFrameWidth': 'reserved',
	'nesting': 'reserved',
	'netprintApplicationLink': 'reserved',
	'neverHideAtCopy': 'reserved',
	'newPageWiz': 'reserved',
	'newRecordFromTable': 'reserved',
	'newWindow': 'reserved',
	'newWizards': 'reserved',
	'next': 'reserved',
	'niceText': 'reserved',
	'nicetext': 'reserved',
	'no_cache': 'reserved',
	'no_search': 'reserved',
	'noAttrib': 'reserved',
	'noBlur': 'reserved',
	'noCache': 'reserved',
	'noCols': 'reserved',
	'noCreateRecordsLink': 'reserved',
	'noLink': 'reserved',
	'noLinkUnderline': 'reserved',
	'noMatchingValue_label': 'reserved',
	'noMenuMode': 'reserved',
	'nonCachedSubst': 'reserved',
	'nonTypoTagStdWrap': 'reserved',
	'nonTypoTagUserFunc': 'reserved',
	'nonWrappedTag': 'reserved',
	'noOrderBy': 'reserved',
	'noPageTitle': 'reserved',
	'noRows': 'reserved',
	'noScaleUp': 'reserved',
	'noStretchAndMarginCells': 'reserved',
	'noThumbsInEB': 'reserved',
	'noThumbsInRTEimageSelect': 'reserved',
	'notification_email_charset': 'reserved',
	'notification_email_encoding': 'reserved',
	'notification_email_urlmode': 'reserved',
	'noTrimWrap': 'reserved',
	'noValueInsert': 'reserved',
	'obj': 'reserved',
	'offset': 'reserved',
	'offsetWrap': 'reserved',
	'onlineWorkspaceInfo': 'reserved',
	'onlyCurrentPid': 'reserved',
	'opacity': 'reserved',
	'orderBy': 'reserved',
	'outerWrap': 'reserved',
	'outline': 'reserved',
	'outputLevels': 'reserved',
	'override': 'reserved',
	'overrideAttribs': 'reserved',
	'overrideEdit': 'reserved',
	'overrideId': 'reserved',
	'overridePageModule': 'reserved',
	'overrideWithExtension': 'reserved',
	'pageFrameObj': 'reserved',
	'pageGenScript': 'reserved',
	'pageTitleFirst': 'reserved',
	'parameter': 'reserved',
	'params': 'reserved',
	'parseFunc': 'reserved',
	'parser': 'reserved',
	'password': 'reserved',
	'path': 'reserved',
	'permissions': 'reserved',
	'pid_list': 'reserved',
	'pidInList': 'reserved',
	'pixelSpaceFontSizeRef': 'reserved',
	'plaintextLib': 'reserved',
	'plainTextStdWrap': 'reserved',
	'postCObject': 'reserved',
	'postLineBlanks': 'reserved',
	'postLineChar': 'reserved',
	'postLineLen': 'reserved',
	'postUserFunc': 'reserved',
	'postUserFuncInt': 'reserved',
	'preBlanks': 'reserved',
	'preCObject': 'reserved',
	'prefix': 'reserved',
	'prefixComment': 'reserved',
	'prefixLocalAnchors': 'reserved',
	'prefixRelPathWith': 'reserved',
	'preIfEmptyListNum': 'reserved',
	'preLineBlanks': 'reserved',
	'preLineChar': 'reserved',
	'preLineLen': 'reserved',
	'prepend': 'reserved',
	'preserveEntities': 'reserved',
	'preUserFunc': 'reserved',
	'prev': 'reserved',
	'previewBorder': 'reserved',
	'prevnextToSection': 'reserved',
	'printheader': 'reserved',
	'prioriCalc': 'reserved',
	'proc': 'reserved',
	'processScript': 'reserved',
	'properties': 'reserved',
	'protect': 'reserved',
	'protectLvar': 'reserved',
	'publish_levels': 'reserved',
	'QEisDefault': 'reserved',
	'quality': 'reserved',
	'radio': 'reserved',
	'radioWrap': 'reserved',
	'range': 'reserved',
	'rawUrlEncode': 'reserved',
	'recipient': 'reserved',
	'recursive': 'reserved',
	'recursiveDelete': 'reserved',
	'redirect': 'reserved',
	'redirectToURL': 'reserved',
	'reduceColors': 'reserved',
	'register': 'reserved',
	'relativeToParentLayer': 'reserved',
	'relativeToTriggerItem': 'reserved',
	'relPathPrefix': 'reserved',
	'remap': 'reserved',
	'remapTag': 'reserved',
	'removeBadHTML': 'reserved',
	'removeDefaultJS': 'reserved',
	'removeIfEquals': 'reserved',
	'removeIfFalse': 'reserved',
	'removeItems': 'reserved',
	'removeObjectsOfDummy': 'reserved',
	'removePrependedNumbers': 'reserved',
	'removeTags': 'reserved',
	'removeWrapping': 'reserved',
	'renderCharset': 'reserved',
	'renderWrap': 'reserved',
	'reset': 'reserved',
	'resources': 'reserved',
	'resultObj': 'reserved',
	'returnLast': 'reserved',
	'returnUrl': 'reserved',
	'rightImgACT': 'reserved',
	'rightImgCUR': 'reserved',
	'rightImgNO': 'reserved',
	'rightjoin': 'reserved',
	'rm': 'reserved',
	'rmTagIfNoAttrib': 'reserved',
	'RO_chBgColor': 'reserved',
	'rotate': 'reserved',
	'rows': 'reserved',
	'rowSpace': 'reserved',
	'RTEfullScreenWidth': 'reserved',
	'rules': 'reserved',
	'sample': 'reserved',
	'saveClipboard': 'reserved',
	'saveDocNew': 'reserved',
	'secondRow': 'reserved',
	'section': 'reserved',
	'sectionIndex': 'reserved',
	'select': 'reserved',
	'select_key': 'reserved',
	'selectFields': 'reserved',
	'separator': 'reserved',
	'set': 'reserved',
	'setContentToCurrent': 'reserved',
	'setCurrent': 'reserved',
	'setfixed': 'reserved',
	'setFixedHeight': 'reserved',
	'setFixedWidth': 'reserved',
	'setJS_mouseOver': 'reserved',
	'setJS_openPic': 'reserved',
	'setOnly': 'reserved',
	'shadow': 'reserved',
	'sharpen': 'reserved',
	'shear': 'reserved',
	'short': 'reserved',
	'shortcut': 'reserved',
	'shortcut_onEditId_dontSetPageTree': 'reserved',
	'shortcut_onEditId_keepExistingExpanded': 'reserved',
	'shortcutFrame': 'reserved',
	'shortcutGroups': 'reserved',
	'shortcutIcon': 'reserved',
	'show': 'reserved',
	'showAccessRestrictedPages': 'reserved',
	'showActive': 'reserved',
	'showClipControlPanelsDespiteOfCMlayers': 'reserved',
	'showFirst': 'reserved',
	'showHiddenPages': 'reserved',
	'showHiddenRecords': 'reserved',
	'showHistory': 'reserved',
	'showPageIdWithTitle': 'reserved',
	'showTagFreeClasses': 'reserved',
	'simulateDate': 'reserved',
	'simulateStaticDocuments': 'reserved',
	'simulateStaticDocuments_addTitle': 'reserved',
	'simulateStaticDocuments_dontRedirectPathInfoError': 'reserved',
	'simulateStaticDocuments_noTypeIfNoTitle': 'reserved',
	'simulateStaticDocuments_pEnc': 'reserved',
	'simulateStaticDocuments_pEnc_onlyP': 'reserved',
	'simulateUserGroup': 'reserved',
	'singlePid': 'reserved',
	'site_author': 'reserved',
	'site_reserved': 'reserved',
	'sitetitle': 'reserved',
	'siteUrl': 'reserved',
	'size': 'reserved',
	'smallFormFields': 'reserved',
	'solarize': 'reserved',
	'sorting': 'reserved',
	'source': 'reserved',
	'space': 'reserved',
	'spaceAfter': 'reserved',
	'spaceBefore': 'reserved',
	'spaceBelowAbove': 'reserved',
	'spaceLeft': 'reserved',
	'spaceRight': 'reserved',
	'spacing': 'reserved',
	'spamProtectEmailAddresses': 'reserved',
	'spamProtectEmailAddresses_atSubst': 'reserved',
	'spamProtectEmailAddresses_lastDotSubst': 'reserved',
	'special': 'reserved',
	'splitChar': 'reserved',
	'splitRendering': 'reserved',
	'src': 'reserved',
	'startInTaskCenter': 'reserved',
	'stayFolded': 'reserved',
	'stdheader': 'reserved',
	'stdWrap': 'reserved',
	'stdWrap2': 'reserved',
	'strftime': 'reserved',
	'stripHtml': 'reserved',
	'styles': 'reserved',
	'stylesheet': 'reserved',
	'submenuObjSuffixes': 'reserved',
	'subMenuOffset': 'reserved',
	'submit': 'reserved',
	'subst_elementUid': 'reserved',
	'substMarksSeparately': 'reserved',
	'substring': 'reserved',
	'swirl': 'reserved',
	'sword': 'reserved',
	'sword_noMixedCase': 'reserved',
	'SWORD_PARAMS': 'reserved',
	'sword_standAlone': 'reserved',
	'sys_language_mode': 'reserved',
	'sys_language_overlay': 'reserved',
	'sys_language_softMergeIfNotBlank': 'reserved',
	'sys_language_uid': 'reserved',
	'table': 'reserved',
	'tableCellColor': 'reserved',
	'tableParams': 'reserved',
	'tables': 'reserved',
	'tableStdWrap': 'reserved',
	'tableStyle': 'reserved',
	'tableWidth': 'reserved',
	'tags': 'reserved',
	'target': 'reserved',
	'TDparams': 'reserved',
	'templateContent': 'reserved',
	'templateFile': 'reserved',
	'text': 'reserved',
	'textarea': 'reserved',
	'textMargin': 'reserved',
	'textMargin_outOfText': 'reserved',
	'textMaxLength': 'reserved',
	'textObjNum': 'reserved',
	'textPos': 'reserved',
	'textStyle': 'reserved',
	'thickness': 'reserved',
	'thumbnailsByDefault': 'reserved',
	'tile': 'reserved',
	'time_stdWrap': 'reserved',
	'tipafriendLib': 'reserved',
	'title': 'reserved',
	'titleLen': 'reserved',
	'titleTagFunction': 'reserved',
	'titleText': 'reserved',
	'tm': 'reserved',
	'token': 'reserved',
	'topOffset': 'reserved',
	'totalWidth': 'reserved',
	'transparentBackground': 'reserved',
	'transparentColor': 'reserved',
	'trim': 'reserved',
	'tsdebug_tree': 'reserved',
	'type': 'reserved',
	'typeNum': 'reserved',
	'types': 'reserved',
	'typolinkCheckRootline': 'reserved',
	'uidInList': 'reserved',
	'unset': 'reserved',
	'uploadFieldsInTopOfEB': 'reserved',
	'uploads': 'reserved',
	'upper': 'reserved',
	'useCacheHash': 'reserved',
	'useLargestItemX': 'reserved',
	'useLargestItemY': 'reserved',
	'user': 'reserved',
	'userdefined': 'reserved',
	'userfunction': 'reserved',
	'userid': 'reserved',
	'userIdColumn': 'reserved',
	'USERNAME_substToken': 'reserved',
	'userProc': 'reserved',
	'value': 'reserved',
	'valueArray': 'reserved',
	'wave': 'reserved',
	'where': 'reserved',
	'width': 'reserved',
	'wiz': 'reserved',
	'wordSpacing': 'reserved',
	'workArea': 'reserved',
	'wrap': 'reserved',
	'wrap1': 'reserved',
	'wrap2': 'reserved',
	'wrap3': 'reserved',
	'wrapAfterTags': 'reserved',
	'wrapAlign': 'reserved',
	'wrapFieldName': 'reserved',
	'wrapItemAndSub': 'reserved',
	'wrapNonWrappedLines': 'reserved',
	'wraps': 'reserved',
	'xhtml_cleaning': 'reserved',
	'xmlprologue': 'reserved',
	'xPosOffset': 'reserved',
	'yPosOffset': 'reserved',

	'admPanel': 'keyword2',
	'alt_print': 'keyword2',
	'auth': 'keyword2',
	'browser': 'keyword2',
	'cache': 'keyword2',
	'CHECK': 'keyword2',
	'cObj': 'keyword2',
	'cObject': 'keyword2',
	'COMMENT': 'keyword2',
	'config': 'keyword2',
	'content': 'keyword2',
	'copy': 'keyword2',
	'CSS_inlineStyle': 'keyword2',
	'cut': 'keyword2',
	'dataArray': 'keyword2',
	'dayofmonth': 'keyword2',
	'dayofweek': 'keyword2',
	'db_list': 'keyword2',
	'device': 'keyword2',
	'dynCSS': 'keyword2',
	'edit': 'keyword2',
	'edit_access': 'keyword2',
	'edit_pageheader': 'keyword2',
	'folder': 'keyword2',
	'folderTree': 'keyword2',
	'foldoutMenu': 'keyword2',
	'Functions': 'keyword2',
	'gmenu_foldout': 'keyword2',
	'gmenu_layers': 'keyword2',
	'hostname': 'keyword2',
	'hour': 'keyword2',
	'imgList': 'keyword2',
	'imgResource': 'keyword2',
	'imgText': 'keyword2',
	'info': 'keyword2',
	'IP': 'keyword2',
	'jsmenu': 'keyword2',
	'JSwindow': 'keyword2',
	'LABEL': 'keyword2',
	'layout': 'keyword2',
	'lib': 'keyword2',
	'loginUser': 'keyword2',
	'marks': 'keyword2',
	'minute': 'keyword2',
	'mod': 'keyword2',
	'module': 'keyword2',
	'month': 'keyword2',
	'move_wizard': 'keyword2',
	'new': 'keyword2',
	'new_wizard': 'keyword2',
	'noResultObj': 'keyword2',
	'numRows': 'keyword2',
	'options': 'keyword2',
	'page': 'keyword2',
	'pageTree': 'keyword2',
	'paste': 'keyword2',
	'perms': 'keyword2',
	'PIDinRootline': 'keyword2',
	'PIDupinRootline': 'keyword2',
	'plugin': 'keyword2',
	'postform': 'keyword2',
	'postform_newThread': 'keyword2',
	'preview': 'keyword2',
	'publish': 'keyword2',
	'RADIO': 'keyword2',
	'renderObj': 'keyword2',
	'REQ': 'keyword2',
	'RTE': 'keyword2',
	'RTE_compliant': 'keyword2',
	'select': 'keyword2',
	'setup': 'keyword2',
	'split': 'keyword2',
	'stat': 'keyword2',
	'stat_apache': 'keyword2',
	'stat_apache_logfile': 'keyword2',
	'stat_apache_noHost': 'keyword2',
	'stat_apache_notExtended': 'keyword2',
	'stat_apache_pagenames': 'keyword2',
	'stat_excludeBEuserHits': 'keyword2',
	'stat_excludeIPList': 'keyword2',
	'stat_mysql': 'keyword2',
	'stat_titleLen': 'keyword2',
	'stat_typeNumList': 'keyword2',
	'stdWrap': 'keyword2',
	'subparts': 'keyword2',
	'system': 'keyword2',
	'temp': 'keyword2',
	'template': 'keyword2',
	'treeLevel': 'keyword2',
	'tsdebug': 'keyword2',
	'typolink': 'keyword2',
	'url': 'keyword2',
	'useragent': 'keyword2',
	'userFunc': 'keyword2',
	'version': 'keyword2',
	'view': 'keyword2',
	'workOnSubpart': 'keyword2',

	'ACT': 'keyword3',
	'ACTIFSUB': 'keyword3',
	'ACTIFSUBRO': 'keyword',
	'ACTRO': 'keyword3',
	'all': 'keyword3',
	'arrowACT': 'keyword3',
	'arrowNO': 'keyword3',
	'ascii': 'keyword3',
	'atLeast': 'keyword3',
	'atMost': 'keyword3',
	'BE': 'keyword3',
	'be_groups': 'keyword3',
	'be_users': 'keyword3',
	'BOX': 'keyword3',
	'browse': 'keyword3',
	'bullets': 'keyword3',
	'CUR': 'keyword3',
	'CURIFSUB': 'keyword3',
	'CURIFSUBRO': 'keyword3',
	'CURRO': 'keyword3',
	'default': 'keyword3',
	'description': 'keyword3',
	'directory': 'keyword3',
	'directReturn': 'keyword3',
	'div': 'keyword3',
	'else': 'keyword3',
	'email': 'keyword3',
	'end': 'keyword3',
	'equals': 'keyword3',
	'external': 'keyword3',
	'false': 'keyword3',
	'FE': 'keyword3',
	'fe_groups': 'keyword3',
	'fe_users': 'keyword3',
	'feadmin': 'keyword3',
	'header': 'keyword3',
	'html': 'keyword3',
	'id': 'keyword3',
	'if': 'keyword3',
	'ifEmpty': 'keyword3',
	'IFSUB': 'keyword3',
	'IFSUBRO': 'keyword3',
	'image': 'keyword3',
	'inBranch': 'keyword3',
	'isFalse': 'keyword3',
	'isGreaterThan': 'keyword3',
	'isInList': 'keyword3',
	'isLessThan': 'keyword3',
	'isPositive': 'keyword3',
	'isTrue': 'keyword3',
	'keyword3': 'keyword3',
	'language': 'keyword3',
	'leveltitle': 'keyword3',
	'list': 'keyword3',
	'login': 'keyword3',
	'mailform': 'keyword3',
	'media': 'keyword3',
	'menu': 'keyword3',
	'mod': 'keyword3',
	'multimedia': 'keyword3',
	'negate': 'keyword3',
	'NEW': 'keyword3',
	'NO': 'keyword3',
	'none': 'keyword3',
	'pages': 'keyword3',
	'pages_language_overlay': 'keyword3',
	'parseFunc_RTE': 'keyword3',
	'pid': 'keyword3',
	'required': 'keyword3',
	'RO': 'keyword3',
	'rootline': 'keyword3',
	'script': 'keyword3',
	'search': 'keyword3',
	'shortcut': 'keyword3',
	'sitemap': 'keyword3',
	'SPC': 'keyword3',
	'splash': 'keyword3',
	'sys_dmail': 'keyword3',
	'sys_domain': 'keyword3',
	'sys_filemounts': 'keyword3',
	'sys_note': 'keyword3',
	'sys_template': 'keyword3',
	'tabel': 'keyword3',
	'text': 'keyword3',
	'textpic': 'keyword3',
	'this': 'keyword3',
	'top': 'keyword3',
	'true': 'keyword3',
	'twice': 'keyword3',
	'uid': 'keyword3',
	'uniqueGlobal': 'keyword3',
	'uniqueLocal': 'keyword3',
	'unsetEmpty': 'keyword3',
	'updated': 'keyword3',
	'uploads': 'keyword3',
	'us': 'keyword3',
	'user_task': 'keyword3',
	'USERDEF1': 'keyword3',
	'USERDEF1RO': 'keyword3',
	'USERDEF2': 'keyword3',
	'USERDEF2RO': 'keyword3',
	'usergroup': 'keyword3',
	'USR': 'keyword3',
	'USRRO': 'keyword3',
	'web_func': 'keyword3',
	'web_info': 'keyword3',
	'web_layout': 'keyword3',
	'web_list': 'keyword3',
	'web_ts': 'keyword',
	'xhtml_strict': 'keyword3',
	'xhtml_trans': 'keyword3',
	'XY': 'keyword3',
	'ypMenu': 'keyword3'
}

var tokenizeTypoScript = function() {

	// Some helper regexp matchers.
	var isOperatorChar = matcher(/[\+\-\*\&\%\/=<>!\?]/);
	var isDigit = matcher(/[0-9]/);
	var isHexDigit = matcher(/[0-9A-Fa-f]/);
	var isWordChar = matcher(/[\w\$_]/);

	function isWhiteSpace(ch) {
		// Unfortunately, IE's regexp matcher thinks non-breaking spaces
		// aren't whitespace. Also, in our scheme newlines are no
		// whitespace (they are another special case).
		return ch != "\n" && (ch == nbsp || /\s/.test(ch));
	}

	// This function produces a MochiKit-style iterator that tokenizes
	// the output of the given stringstream (see stringstream.js).
	// Tokens are objects with a type, style, and value property. The
	// value contains the textual content of the token. Because this may
	// include trailing whitespace (for efficiency reasons), some
	// tokens, such a variable names, also have a name property
	// containing their actual textual value.
	return function(source) {
		// Produce a value to return. Automatically skips and includes any
		// whitespace. The base argument is prepended to the value
		// property and assigned to the name property -- this is used when
		// the caller has already extracted the text from the stream
		// himself.
		function result(type, style, base) {
			// nextWhile(isWhiteSpace); - comment thats line because needed for autocomplete
			var value = {
				type: type,
				style: style,
				value: (base ? base + source.get() : source.get())
			};
			if (base) {
				value.name = base;
			}
			return value;
		}

		// Advance the text stream over characters for which test returns
		// true. (The characters that are 'consumed' like this can later
		// be retrieved by calling source.get()).
		function nextWhile(test) {
			var next;
			while ((next = source.peek()) && test(next)) {
				source.next();
			}
		}

		// Advance the stream until the given character (not preceded by a
		// backslash) is encountered (or a newline is found).
		function nextUntilUnescaped(end) {
			var escaped = false;
			var next;
			while ((next = source.peek()) && next != "\n") {
				source.next();
				if (next == end && !escaped) {
					break;
				}
				escaped = next == "\\";
			}
		}

		function readHexNumber() {
			source.next();
			// skip the 'x'
			nextWhile(isHexDigit);
			return result("number", "atom");
		}

		function readNumber() {
			nextWhile(isDigit);
			return result("number", "atom");
		}

		// Read a word, look it up in keywords. If not found, it is a
		// variable, otherwise it is a keyword of the type found.
		function readWord() {
			nextWhile(isWordChar);
			var word = source.get();
			var known = typoscriptWords.hasOwnProperty(word) && {
				type: 'keyword',
				style: typoscriptWords[word]
			};
			return known ?
				result(known.type, known.style, word) :
				result("variable", "other", word);
		}

		function readRegexp() {
			nextUntilUnescaped("/");
			nextWhile(matcher(/[gi]/));
			return result("regexp", "string");
		}

		// Mutli-line comments are tricky. We want to return the newlines
		// embedded in them as regular newline tokens, and then continue
		// returning a comment token for every line of the comment. So
		// some state has to be saved (inComment) to indicate whether we
		// are inside a /* */ sequence.
		function readMultilineComment(start) {
			this.inComment = true;
			var maybeEnd = (start == "*");
			while (true) {
				var next = source.peek();
				if (next == "\n") {
					break;
				}
				source.next();
				if (next == "/" && maybeEnd) {
					this.inComment = false;
					break;
				}
				maybeEnd = (next == "*");
			}

			return result("comment", "ts-comment");
		}

		// Fetch the next token. Dispatches on first character in the
		// stream, or first two characters when the first is a slash. The
		// || things are a silly trick to keep simple cases on a single
		// line.
		function next() {
			var token = null;
			var ch = source.next();
			if (ch == "\n") {
				token = {
					type: "newline",
					style: "whitespace",
					value: source.get()
				};

			} else if (this.inComment) {
				token = readMultilineComment.call(this, ch);

			} else if (this.inValue) {
				token = nextUntilUnescaped(null) || {
					type: "value",
					style: "ts-value",
					value: source.get()
				};
				this.inValue = false;

			} else if (isWhiteSpace(ch)) {
				token = nextWhile(isWhiteSpace) || result("whitespace", "whitespace");

			} else if (ch == "\"" || ch == "'") {
				token = nextUntilUnescaped(ch) || result("string", "string");

			} else if (ch == "<"
			  || ch == ">"
			  || ch == "=") {
				this.inValue = true;
				token = result(ch, "ts-operator");

			} else if (ch == "[") {
				token = nextUntilUnescaped("]") || result("condition", "ts-condition");

			// with punctuation, the type of the token is the symbol itself
			} else if (/[\[\]\(\),;\:\.\<\>\=]/.test(ch)) {
				token = result(ch, "ts-operator");

			} else if (ch == "{") {
				token = result(ch, "ts-operator curly-bracket-open");

			} else if (ch == "}") {
				token = result(ch, "ts-operator curly-bracket-close");

			} else if (ch == "0" && (source.peek() == "x" || source.peek() == "X")) {
				token = readHexNumber();

			} else if (isDigit(ch)) {
				token = readNumber();

			} else if (ch == "/") {
				next = source.peek();

				if (next == "*") {
					token = readMultilineComment.call(this, ch);

				} else if (next == "/") {
					token = nextUntilUnescaped(null) || result("comment", "ts-comment");

				} else if (this.regexp) {
					token = readRegexp();

				} else {
					token = nextWhile(isOperatorChar) || result("operator", "ts-operator");
				}

			} else if (ch == "#") {
				token = nextUntilUnescaped(null) || result("comment", "ts-comment");

			} else if (isOperatorChar(ch)) {
				token = nextWhile(isOperatorChar) || result("operator", "ts-operator");

			} else {
				token = readWord();
			}

			// JavaScript's syntax rules for when a slash might be the start
			// of a regexp and when it is just a division operator are kind
			// of non-obvious. This decides, based on the current token,
			// whether the next token could be a regular expression.
			if (token.style != "whitespace" && token != "comment") {
				this.regexp = token.type == "operator" || token.type == "keyword c" || token.type.match(/[\[{}\(,;:]/);
			}
			return token;
		}

		// Wrap it in an iterator. The state (regexp and inComment) is
		// exposed because a parser will need to save it when making a
		// copy of its state.
		return {
			next: next,
			regexp: true,
			inComment: false,
			inValue: false
		};
	}
} ();