function e(){var e=new Date,t="",n="",o="";(o=e.getFullYear()+"-").length<=2&&(o="0"+o),t+=o,(o=e.getMonth()+1+"-").length<=2&&(o="0"+o),t+=o,(o=e.getDate().toString()).length<=1&&(o="0"+o),t+=o,(o=e.getHours()+":").length<=2&&(o="0"+o),n+=o,(o=e.getMinutes()+":").length<=2&&(o="0"+o),n+=o,1==(o=e.getSeconds().toString()).length&&(o="0"+o),n+=o,document.getElementById("cal").innerText=t,document.getElementById("clock").innerText=n}function t(e){try{return new URL(e),!0}catch(e){return!1}}e(),setInterval(e,1e3),window.clickPress=function(e){if("Enter"==e.key){var n=document.getElementById("searchTerm").value;if("/"==n[0]||0==n.search("file:///")){alert("searching filesystem not supported!");return}if(0==n.search(/\w+\.\w+/)){if(t(n)){document.location.href=n;return}if(t("https://"+n)){document.location.href="https://"+n;return}}var o=encodeURIComponent(n);"Google"==document.getElementById("search-engine").value?document.location.href="https://google.com/search?q="+o:"ChatGPT"==document.getElementById("search-engine").value?document.location.href="https://chatgpt.com/search?q="+o:document.location.href="https://duckduckgo.com/?q="+o+"&origin=funnel_help"}};
//# sourceMappingURL=index.366709e5.js.map
