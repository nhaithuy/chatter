(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,s){s("bUC5"),t.exports=s("pyCd")},"9Wh1":function(t,e,s){"use strict";s.r(e);var n=s("XuX8"),o=s.n(n),a=s("7O5W"),i=s("rT2p"),r=s("wHSu");window._=s("LvDl");try{window.Popper=s("8L3F").default,window.$=window.jQuery=s("EVdn"),s("SYky")}catch(t){}window.axios=s("vDqi"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",a.c.add(r.a),o.a.component("font-awesome-icon",i.a),o.a.config.productionTip=!1},IBi8:function(t,e,s){"use strict";var n={data:function(){return{}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("app-header")],1)]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("post-list")],1),this._v(" "),e("div",{staticClass:"col-md-8"},[e("post-display")],1)])])}),[],!1,null,null,null);e.a=a.exports},JmMY:function(t,e,s){"use strict";var n={data:function(){return{course_name:this.$store.getters.course_summary.name}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-between"},[s("div",[t._v(t._s(t.course_name))]),t._v(" "),s("div",[t._v("Search: [______] (Search)")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-cog"}),t._v(" "),s("font-awesome-icon",{attrs:{icon:"cog"}}),t._v(" Settings")],1)])}),[],!1,null,null,null);e.a=a.exports},VfKh:function(t,e,s){"use strict";var n={props:{comment:{type:Object,default:function(){return{}}}},data:function(){return{this_comment:this.comment}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{"font-style":"italic","font-size":"80%"}},[t._v("\n        "+t._s(t.this_comment.author_user_name)+"\n        "+t._s(t.this_comment.created_at)+"\n    ")]),t._v(" "),s("div",[t._v(t._s(t.this_comment.body))]),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},t._l(t.this_comment.child_comments,(function(t){return s("div",[s("comment-display",{attrs:{comment:t}})],1)})),0)])}),[],!1,null,null,null);e.a=a.exports},bUC5:function(t,e,s){"use strict";s.r(e);var n=s("XuX8"),o=s.n(n),a=s("IBi8"),i=s("JmMY"),r=s("ca5r"),c=s("vC38"),_=s("sq0+"),d=s("VfKh");s("9Wh1"),o.a.component("app-framework",a.a),o.a.component("app-header",i.a),o.a.component("post-list",r.a),o.a.component("post-display",c.a),o.a.component("comment-create",_.a),o.a.component("comment-display",d.a),new o.a({el:"#app"})},ca5r:function(t,e,s){"use strict";var n={data:function(){return{posts:this.$store.getters.course_summary.posts,post_order:"default"}},methods:{ordered_posts:function(){if("default"===this.post_order)return this.posts},set_post_sort_order:function(t){this.post_order=t}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-content-between"},[s("div",[t._v("Posts")]),t._v(" "),s("div",[s("a",{attrs:{href:"#"},on:{click:function(e){return t.set_post_sort_order("newest")}}},[t._v("Sort by newest")]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(e){return t.set_post_sort_order("pinned")}}},[t._v("Sort by pinned")])]),t._v(" "),t._m(0)]),t._v(" "),s("hr"),t._v(" "),t._l(t.posts,(function(e){return s("div",[s("div",{staticStyle:{"margin-bottom":"10px"}},[s("div",{staticStyle:{"font-size":"80%"}},[s("span",[t._v(t._s(e.creator_user_name))]),t._v(" "),s("i",[t._v(t._s(e.created_at))]),t._v(" "),s("span",{staticClass:"badge badge-danger",attrs:{title:e.num_unread_comments+" unread comments"}},[t._v(t._s(e.num_unread_comments))]),t._v(" "),s("span",{staticClass:"badge badge-secondary",attrs:{title:e.num_comments+" total comments"}},[t._v(t._s(e.num_comments))])]),t._v(" "),s("div",[s("b",[t._v(t._s(e.title))])]),t._v(" "),s("div",[t._v(t._s(e.body))])])])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"btn btn-secondary"},[this._v("Add Post")])])}],!1,null,null,null);e.a=a.exports},pyCd:function(t,e){},"sq0+":function(t,e,s){"use strict";var n={data:function(){return{}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    Form to create a post - text with wysisyg editor, plus 'post anonymously' toggle\n")])}),[],!1,null,null,null);e.a=a.exports},vC38:function(t,e,s){"use strict";var n={data:function(){return{post:this.$store.getters.currently_viewed_post}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticStyle:{"font-weight":"bold","font-size":"120%"}},[t._v(t._s(t.post.title))]),t._v(" "),s("div",{staticStyle:{"font-style":"italic","font-size":"80%"}},[t._v(t._s(t.post.author_user_name)+", "+t._s(t.post.created_at))]),t._v(" "),s("div",[t._v(t._s(t.post.body))])]),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[t._l(t.post.comments,(function(t){return s("div",[s("comment-display",{attrs:{comment:t}})],1)})),t._v(" "),s("comment-create")],2)])}),[],!1,null,null,null);e.a=a.exports}},[[0,0,1]]]);
//# sourceMappingURL=app.js.map