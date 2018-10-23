var vm = new Vue({
   el:"#app",
   data: {
      company: "台灣鐵路局",
      ticket: {
         date:"2018.10.22-2018.10.23",
         from: "台中",
         to: "新竹",
         direction: "north",
         other: "<b>限當日當次車有效</b>",
         price: 250,
         discount: 0.5,
         link: "http://twtraffic.tra.gov.tw/twrail/TW_Quicksearch.aspx"
      }
   }
})