$(document).ready(function(){setActiveNavMenuItem(),$("#menu-open").on("click",function(){$("#menu-pane").toggleClass("hidden"),$("html").addClass("overflow-hidden")}),$("#menu-close").on("click",function(){$("#menu-pane").toggleClass("hidden"),$("html").removeClass("overflow-hidden")})});function setActiveNavMenuItem(){var current=location.pathname;$(".nav li a").each(function(){var $this=$(this);$this.attr("href")===current&&$this.parent().addClass("active")})}
//# sourceMappingURL=/cdn/shop/t/12/assets/sitewide-custom.js.map?v=90987848902489245371733005336
