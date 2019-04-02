// var state = {
//     title: "",
//     url: ""
// };
// window.history.pushState(state, "", "");
window.addEventListener('unload',function () {
})
window.onpageshow = function(event) {
   if (event.persisted) {
      window.location.reload()
   }
};
window.addEventListener("popstate", function (e) {
    document.location.href = document.referrer;
}, false);