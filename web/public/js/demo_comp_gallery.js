(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/demo_comp_gallery"],{

/***/ "./resources/js/demo_component_gallery.js":
/*!************************************************!*\
  !*** ./resources/js/demo_component_gallery.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.common.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppFramework_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AppFramework.vue */ \"./resources/js/components/AppFramework.vue\");\n/* harmony import */ var _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppHeader.vue */ \"./resources/js/components/AppHeader.vue\");\n/* harmony import */ var _components_PostList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PostList.vue */ \"./resources/js/components/PostList.vue\");\n/* harmony import */ var _components_PostDisplay_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PostDisplay.vue */ \"./resources/js/components/PostDisplay.vue\");\n/* harmony import */ var _components_CommentCreate_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CommentCreate.vue */ \"./resources/js/components/CommentCreate.vue\");\n/* harmony import */ var _components_CommentDisplay_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CommentDisplay.vue */ \"./resources/js/components/CommentDisplay.vue\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ \"./resources/js/store.js\");\n__webpack_require__(/*! ./bootstrap */ \"./resources/js/bootstrap.js\");\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('app-framework', _components_AppFramework_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('app-header', _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('post-list', _components_PostList_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('post-display', _components_PostDisplay_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('comment-create', _components_CommentCreate_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('comment-display', _components_CommentDisplay_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n // Fill in some dummy data, since we don't want you to have to have a database or the real API running\n\n_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.user = {\n  \"name\": \"Tammy Teacher\",\n  \"email\": \"teacher@example.com\",\n  \"role\": \"teacher\" // 'teacher' or 'student'\n\n};\n_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.course_summary = {\n  \"id\": 1,\n  \"name\": \"test course\",\n  \"posts\": [{\n    \"id\": 1,\n    \"creator_user_name\": \"Theodore Teacher\",\n    \"title\": \"post #1\",\n    \"body\": \"test body\",\n    \"pinned\": false,\n    \"locked\": false,\n    \"created_at\": \"2020-12-21T09:17:11.000000Z\",\n    \"num_comments\": 17,\n    \"num_unread_comments\": 2\n  }, {\n    \"id\": 2,\n    \"creator_user_name\": \"Tammy Teacher\",\n    \"title\": \"post #2\",\n    \"body\": \"test body\",\n    \"pinned\": true,\n    \"locked\": false,\n    \"created_at\": \"2020-12-21T09:17:11.000000Z\",\n    \"num_comments\": 18,\n    \"num_unread_comments\": 2\n  }, {\n    \"id\": 3,\n    \"creator_user_name\": \"Tammy Teacher\",\n    \"title\": \"post #3\",\n    \"body\": \"test body\",\n    \"pinned\": true,\n    \"locked\": false,\n    \"created_at\": \"2020-12-21T09:17:11.000000Z\",\n    \"num_comments\": 18,\n    \"num_unread_comments\": 2\n  }],\n  'filtered_posts': [],\n  'search_results_available': false\n};\n_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.currently_viewed_post = {\n  'id': 1,\n  'author_user_name': 'Tammy Teacher',\n  'author_user_role': 'teacher',\n  'title': 'post #1',\n  'body': 'test body',\n  'pinned': false,\n  'locked': false,\n  'created_at': \"2020-12-21T09:17:11.000000Z\",\n  comments: [{\n    'id': 1,\n    'author_user_name': 'Tammy Teacher',\n    'author_user_role': 'teacher',\n    'poster_anonymous': false,\n    'muted_by_user_id': null,\n    'body': \"This is <b>Test Comment #1</b>\",\n    \"created_at\": \"2020-12-21T09:17:11.000000Z\",\n    'endorsed': true,\n    'child_comments': []\n  }, {\n    'id': 2,\n    'author_user_name': 'Tammy Teacher',\n    'author_user_role': 'teacher',\n    'poster_anonymous': false,\n    'muted_by_user_id': null,\n    'body': \"This is <b>Test Comment #2</b>\",\n    \"created_at\": \"2020-12-21T09:17:11.000000Z\",\n    'endorsed': false,\n    'child_comments': [{\n      'id': 3,\n      'author_user_name': 'Sally Student',\n      'author_user_role': 'student',\n      'poster_anonymous': false,\n      'muted_by_user_id': null,\n      'body': \"This is <b>Child Comment #3</b>\",\n      \"created_at\": \"2020-12-21T09:18:11.000000Z\",\n      'endorsed': false,\n      \"child_comments\": [{\n        'id': 5,\n        'author_user_name': 'Sally Student',\n        'author_user_role': 'student',\n        'poster_anonymous': false,\n        'muted_by_user_id': null,\n        'body': \"This is <b>Grandchild Comment #5</b>\",\n        \"created_at\": \"2020-12-21T09:18:11.000000Z\",\n        'endorsed': false,\n        \"child_comments\": []\n      }]\n    }, {\n      'id': 4,\n      'author_user_name': 'Sara Student',\n      'author_user_role': 'student',\n      'poster_anonymous': false,\n      'muted_by_user_id': null,\n      'body': \"This is <b>Child Comment #4</b>\",\n      \"created_at\": \"2020-12-21T09:19:11.000000Z\",\n      'endorsed': false,\n      \"child_comments\": []\n    }]\n  }]\n};\n_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].actions = {\n  createPost: function createPost(_ref, post) {\n    var commit = _ref.commit;\n    commit('createPost', post);\n  },\n  editPost: function editPost(_ref2, post_id, body) {\n    var commit = _ref2.commit;\n    commit('editPost', post_id, body);\n  },\n  pinPost: function pinPost(_ref3, post_id, pinned) {\n    var commit = _ref3.commit;\n    commit('pinPost', post_id, pinned);\n  },\n  lockPost: function lockPost(_ref4, post_id, locked) {\n    var commit = _ref4.commit;\n    commit('lockPost', post_id, locked);\n  },\n  deletePost: function deletePost(_ref5, post_id) {\n    var commit = _ref5.commit;\n    commit('deletePost', post_id);\n  },\n  endorseComment: function endorseComment(_ref6, comment_id) {\n    var commit = _ref6.commit;\n    commit('endorseComment', comment_id);\n  },\n  muteComment: function muteComment(_ref7, comment_id) {\n    var commit = _ref7.commit;\n    commit('muteComment', comment_id);\n  },\n  addComment: function addComment(_ref8, post_id, comment) {\n    var commit = _ref8.commit;\n    commit('addComment', post_id, comment);\n  }\n};\nnew vue__WEBPACK_IMPORTED_MODULE_0___default.a({\n  el: '#app',\n  store: _store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  methods: {\n    get_sample_comment: function get_sample_comment() {\n      return this.$store.getters.currently_viewed_post.comments[0];\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVtb19jb21wb25lbnRfZ2FsbGVyeS5qcz83Mzc1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJWdWUiLCJjb21wb25lbnQiLCJBcHBGcmFtZXdvcmsiLCJBcHBIZWFkZXIiLCJQb3N0TGlzdCIsIlBvc3REaXNwbGF5IiwiQ29tbWVudENyZWF0ZSIsIkNvbW1lbnREaXNwbGF5Iiwic3RvcmUiLCJzdGF0ZSIsInVzZXIiLCJjb3Vyc2Vfc3VtbWFyeSIsImN1cnJlbnRseV92aWV3ZWRfcG9zdCIsImNvbW1lbnRzIiwiYWN0aW9ucyIsImNyZWF0ZVBvc3QiLCJwb3N0IiwiY29tbWl0IiwiZWRpdFBvc3QiLCJwb3N0X2lkIiwiYm9keSIsInBpblBvc3QiLCJwaW5uZWQiLCJsb2NrUG9zdCIsImxvY2tlZCIsImRlbGV0ZVBvc3QiLCJlbmRvcnNlQ29tbWVudCIsImNvbW1lbnRfaWQiLCJtdXRlQ29tbWVudCIsImFkZENvbW1lbnQiLCJjb21tZW50IiwiZWwiLCJtZXRob2RzIiwiZ2V0X3NhbXBsZV9jb21tZW50IiwiJHN0b3JlIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6IkFBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLG1CQUFPLENBQUMsZ0RBQUQsQ0FBUDs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQywwQ0FBRyxDQUFDQyxTQUFKLENBQWMsZUFBZCxFQUErQkMsb0VBQS9CO0FBQ0FGLDBDQUFHLENBQUNDLFNBQUosQ0FBYyxZQUFkLEVBQTRCRSxpRUFBNUI7QUFDQUgsMENBQUcsQ0FBQ0MsU0FBSixDQUFjLFdBQWQsRUFBMkJHLGdFQUEzQjtBQUNBSiwwQ0FBRyxDQUFDQyxTQUFKLENBQWMsY0FBZCxFQUE4QkksbUVBQTlCO0FBQ0FMLDBDQUFHLENBQUNDLFNBQUosQ0FBYyxnQkFBZCxFQUFnQ0sscUVBQWhDO0FBQ0FO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RUFzQnlCO0FBQUEsUUFBM0JiLE1BQTJCLFNBQTNCQSxNQUEyQjtBQUNyQ0EsVUFBTSxDQUFDLFlBQUQsRUFBZUUsT0FBZixFQUF3QlcsT0FBeEIsQ0FBTjtBQUNEO0FBeEJhLENBQWhCO0FBMkJBLElBQUk5QiwwQ0FBSixDQUFRO0FBQ0orQixJQUFFLEVBQUUsTUFEQTtBQUVKdkIsT0FBSyxFQUFFQSw4Q0FGSDtBQUdKd0IsU0FBTyxFQUFFO0FBQ0xDLHNCQUFrQixFQUFFLDhCQUFXO0FBQzNCLGFBQU8sS0FBS0MsTUFBTCxDQUFZQyxPQUFaLENBQW9CdkIscUJBQXBCLENBQTBDQyxRQUExQyxDQUFtRCxDQUFuRCxDQUFQO0FBQ0g7QUFISTtBQUhMLENBQVIiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVtb19jb21wb25lbnRfZ2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IEFwcEZyYW1ld29yayBmcm9tICcuL2NvbXBvbmVudHMvQXBwRnJhbWV3b3JrLnZ1ZSc7XG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9BcHBIZWFkZXIudnVlJztcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUG9zdExpc3QudnVlJztcbmltcG9ydCBQb3N0RGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvUG9zdERpc3BsYXkudnVlJztcbmltcG9ydCBDb21tZW50Q3JlYXRlIGZyb20gJy4vY29tcG9uZW50cy9Db21tZW50Q3JlYXRlLnZ1ZSc7XG5pbXBvcnQgQ29tbWVudERpc3BsYXkgZnJvbSAnLi9jb21wb25lbnRzL0NvbW1lbnREaXNwbGF5LnZ1ZSdcblxuVnVlLmNvbXBvbmVudCgnYXBwLWZyYW1ld29yaycsIEFwcEZyYW1ld29yayk7XG5WdWUuY29tcG9uZW50KCdhcHAtaGVhZGVyJywgQXBwSGVhZGVyKTtcblZ1ZS5jb21wb25lbnQoJ3Bvc3QtbGlzdCcsIFBvc3RMaXN0KTtcblZ1ZS5jb21wb25lbnQoJ3Bvc3QtZGlzcGxheScsIFBvc3REaXNwbGF5KTtcblZ1ZS5jb21wb25lbnQoJ2NvbW1lbnQtY3JlYXRlJywgQ29tbWVudENyZWF0ZSk7XG5WdWUuY29tcG9uZW50KCdjb21tZW50LWRpc3BsYXknLCBDb21tZW50RGlzcGxheSlcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vLyBGaWxsIGluIHNvbWUgZHVtbXkgZGF0YSwgc2luY2Ugd2UgZG9uJ3Qgd2FudCB5b3UgdG8gaGF2ZSB0byBoYXZlIGEgZGF0YWJhc2Ugb3IgdGhlIHJlYWwgQVBJIHJ1bm5pbmdcbnN0b3JlLnN0YXRlLnVzZXIgPSB7XG4gICAgXCJuYW1lXCI6IFwiVGFtbXkgVGVhY2hlclwiLFxuICAgIFwiZW1haWxcIjogXCJ0ZWFjaGVyQGV4YW1wbGUuY29tXCIsXG4gICAgXCJyb2xlXCI6IFwidGVhY2hlclwiLCAvLyAndGVhY2hlcicgb3IgJ3N0dWRlbnQnXG59O1xuc3RvcmUuc3RhdGUuY291cnNlX3N1bW1hcnkgPSB7XG4gICAgXCJpZFwiOjEsXG4gICAgXCJuYW1lXCI6XCJ0ZXN0IGNvdXJzZVwiLFxuICAgIFwicG9zdHNcIjpbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjoxLFxuICAgICAgICAgICAgXCJjcmVhdG9yX3VzZXJfbmFtZVwiOlwiVGhlb2RvcmUgVGVhY2hlclwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwicG9zdCAjMVwiLFxuICAgICAgICAgICAgXCJib2R5XCI6XCJ0ZXN0IGJvZHlcIixcbiAgICAgICAgICAgIFwicGlubmVkXCI6ZmFsc2UsXG4gICAgICAgICAgICBcImxvY2tlZFwiOmZhbHNlLFxuICAgICAgICAgICAgXCJjcmVhdGVkX2F0XCI6XCIyMDIwLTEyLTIxVDA5OjE3OjExLjAwMDAwMFpcIixcbiAgICAgICAgICAgIFwibnVtX2NvbW1lbnRzXCI6MTcsXG4gICAgICAgICAgICBcIm51bV91bnJlYWRfY29tbWVudHNcIjoyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjoyLFxuICAgICAgICAgICAgXCJjcmVhdG9yX3VzZXJfbmFtZVwiOlwiVGFtbXkgVGVhY2hlclwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwicG9zdCAjMlwiLFxuICAgICAgICAgICAgXCJib2R5XCI6XCJ0ZXN0IGJvZHlcIixcbiAgICAgICAgICAgIFwicGlubmVkXCI6dHJ1ZSxcbiAgICAgICAgICAgIFwibG9ja2VkXCI6ZmFsc2UsXG4gICAgICAgICAgICBcImNyZWF0ZWRfYXRcIjpcIjIwMjAtMTItMjFUMDk6MTc6MTEuMDAwMDAwWlwiLFxuICAgICAgICAgICAgXCJudW1fY29tbWVudHNcIjoxOCxcbiAgICAgICAgICAgIFwibnVtX3VucmVhZF9jb21tZW50c1wiOjJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOjMsXG4gICAgICAgICAgICBcImNyZWF0b3JfdXNlcl9uYW1lXCI6XCJUYW1teSBUZWFjaGVyXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6XCJwb3N0ICMzXCIsXG4gICAgICAgICAgICBcImJvZHlcIjpcInRlc3QgYm9keVwiLFxuICAgICAgICAgICAgXCJwaW5uZWRcIjp0cnVlLFxuICAgICAgICAgICAgXCJsb2NrZWRcIjpmYWxzZSxcbiAgICAgICAgICAgIFwiY3JlYXRlZF9hdFwiOlwiMjAyMC0xMi0yMVQwOToxNzoxMS4wMDAwMDBaXCIsXG4gICAgICAgICAgICBcIm51bV9jb21tZW50c1wiOjE4LFxuICAgICAgICAgICAgXCJudW1fdW5yZWFkX2NvbW1lbnRzXCI6MlxuICAgICAgICB9XG4gICAgXSwgXG4gICAgJ2ZpbHRlcmVkX3Bvc3RzJzogW10sXG4gICAgJ3NlYXJjaF9yZXN1bHRzX2F2YWlsYWJsZSc6IGZhbHNlLFxufTtcbnN0b3JlLnN0YXRlLmN1cnJlbnRseV92aWV3ZWRfcG9zdCA9XG4gICAge1xuICAgICAgICAnaWQnOiAxLFxuICAgICAgICAnYXV0aG9yX3VzZXJfbmFtZSc6ICdUYW1teSBUZWFjaGVyJyxcbiAgICAgICAgJ2F1dGhvcl91c2VyX3JvbGUnOiAndGVhY2hlcicsXG4gICAgICAgICd0aXRsZSc6J3Bvc3QgIzEnLFxuICAgICAgICAnYm9keSc6J3Rlc3QgYm9keScsXG4gICAgICAgICdwaW5uZWQnOmZhbHNlLFxuICAgICAgICAnbG9ja2VkJzpmYWxzZSxcbiAgICAgICAgJ2NyZWF0ZWRfYXQnOlwiMjAyMC0xMi0yMVQwOToxNzoxMS4wMDAwMDBaXCIsXG4gICAgICAgIGNvbW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2lkJzogMSxcbiAgICAgICAgICAgICAgICAnYXV0aG9yX3VzZXJfbmFtZSc6ICdUYW1teSBUZWFjaGVyJyxcbiAgICAgICAgICAgICAgICAnYXV0aG9yX3VzZXJfcm9sZSc6ICd0ZWFjaGVyJyxcbiAgICAgICAgICAgICAgICAncG9zdGVyX2Fub255bW91cyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdtdXRlZF9ieV91c2VyX2lkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAnYm9keSc6IFwiVGhpcyBpcyA8Yj5UZXN0IENvbW1lbnQgIzE8L2I+XCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkX2F0XCI6IFwiMjAyMC0xMi0yMVQwOToxNzoxMS4wMDAwMDBaXCIsXG4gICAgICAgICAgICAgICAgJ2VuZG9yc2VkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnY2hpbGRfY29tbWVudHMnOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2lkJzogMixcbiAgICAgICAgICAgICAgICAnYXV0aG9yX3VzZXJfbmFtZSc6ICdUYW1teSBUZWFjaGVyJyxcbiAgICAgICAgICAgICAgICAnYXV0aG9yX3VzZXJfcm9sZSc6ICd0ZWFjaGVyJyxcbiAgICAgICAgICAgICAgICAncG9zdGVyX2Fub255bW91cyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdtdXRlZF9ieV91c2VyX2lkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAnYm9keSc6IFwiVGhpcyBpcyA8Yj5UZXN0IENvbW1lbnQgIzI8L2I+XCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkX2F0XCI6IFwiMjAyMC0xMi0yMVQwOToxNzoxMS4wMDAwMDBaXCIsXG4gICAgICAgICAgICAgICAgJ2VuZG9yc2VkJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ2NoaWxkX2NvbW1lbnRzJzogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcl91c2VyX25hbWUnOiAnU2FsbHkgU3R1ZGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXV0aG9yX3VzZXJfcm9sZSc6ICdzdHVkZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3N0ZXJfYW5vbnltb3VzJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbXV0ZWRfYnlfdXNlcl9pZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYm9keSc6IFwiVGhpcyBpcyA8Yj5DaGlsZCBDb21tZW50ICMzPC9iPlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkX2F0XCI6IFwiMjAyMC0xMi0yMVQwOToxODoxMS4wMDAwMDBaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW5kb3JzZWQnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRfY29tbWVudHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcl91c2VyX25hbWUnOiAnU2FsbHkgU3R1ZGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRob3JfdXNlcl9yb2xlJzogJ3N0dWRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9zdGVyX2Fub255bW91cyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbXV0ZWRfYnlfdXNlcl9pZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib2R5JzogXCJUaGlzIGlzIDxiPkdyYW5kY2hpbGQgQ29tbWVudCAjNTwvYj5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkX2F0XCI6IFwiMjAyMC0xMi0yMVQwOToxODoxMS4wMDAwMDBaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbmRvcnNlZCc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkX2NvbW1lbnRzXCI6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXV0aG9yX3VzZXJfbmFtZSc6ICdTYXJhIFN0dWRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcl91c2VyX3JvbGUnOiAnc3R1ZGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdGVyX2Fub255bW91cyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ211dGVkX2J5X3VzZXJfaWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvZHknOiBcIlRoaXMgaXMgPGI+Q2hpbGQgQ29tbWVudCAjNDwvYj5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZF9hdFwiOiBcIjIwMjAtMTItMjFUMDk6MTk6MTEuMDAwMDAwWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VuZG9yc2VkJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkX2NvbW1lbnRzXCI6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxufTtcblxuc3RvcmUuYWN0aW9ucyA9IHtcbiAgY3JlYXRlUG9zdCh7Y29tbWl0fSwgcG9zdCkge1xuICAgIGNvbW1pdCgnY3JlYXRlUG9zdCcsIHBvc3QpO1xuICB9LFxuICBlZGl0UG9zdCh7Y29tbWl0fSwgcG9zdF9pZCwgYm9keSkge1xuICAgIGNvbW1pdCgnZWRpdFBvc3QnLCBwb3N0X2lkLCBib2R5KTtcbiAgfSxcbiAgcGluUG9zdCh7Y29tbWl0fSwgcG9zdF9pZCwgcGlubmVkKSB7XG4gICAgY29tbWl0KCdwaW5Qb3N0JywgcG9zdF9pZCwgcGlubmVkKTtcbiAgfSxcbiAgbG9ja1Bvc3Qoe2NvbW1pdH0sIHBvc3RfaWQsIGxvY2tlZCkge1xuICAgIGNvbW1pdCgnbG9ja1Bvc3QnLCBwb3N0X2lkLCBsb2NrZWQpO1xuICB9LFxuICBkZWxldGVQb3N0KHtjb21taXR9LCBwb3N0X2lkKSB7XG4gICAgY29tbWl0KCdkZWxldGVQb3N0JywgcG9zdF9pZCk7XG4gIH0sXG4gIGVuZG9yc2VDb21tZW50KHtjb21taXR9LCBjb21tZW50X2lkKSB7XG4gICAgY29tbWl0KCdlbmRvcnNlQ29tbWVudCcsIGNvbW1lbnRfaWQpO1xuICB9LFxuICBtdXRlQ29tbWVudCh7Y29tbWl0fSwgY29tbWVudF9pZCkge1xuICAgIGNvbW1pdCgnbXV0ZUNvbW1lbnQnLCBjb21tZW50X2lkKTtcbiAgfSxcbiAgYWRkQ29tbWVudCh7Y29tbWl0fSwgcG9zdF9pZCwgY29tbWVudCkge1xuICAgIGNvbW1pdCgnYWRkQ29tbWVudCcsIHBvc3RfaWQsIGNvbW1lbnQpO1xuICB9LFxufVxuXG5uZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIHN0b3JlOiBzdG9yZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldF9zYW1wbGVfY29tbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5jdXJyZW50bHlfdmlld2VkX3Bvc3QuY29tbWVudHNbMF07XG4gICAgICAgIH1cbiAgICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/demo_component_gallery.js\n");

/***/ }),

/***/ 1:
/*!******************************************************!*\
  !*** multi ./resources/js/demo_component_gallery.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nhaithuy/UT Austin/STA/chatter_repo/chatter/web/resources/js/demo_component_gallery.js */"./resources/js/demo_component_gallery.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);