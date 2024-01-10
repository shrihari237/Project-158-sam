AFRAME.registerComponent("cursor-event", {
  schema: { selectedItemId: { default: "", type: "string" } },

  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = [
        "cp-aero",
        "out-spa",
        "spider",
        "super",
      ];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#placesContainer");
      placeContainer.setAttribute("cursor-event", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },

  update:function(){
    const fadeEl = document.querySelector('#fadeBackground')
    fadeEl.setAttribute('info-banner',{})
    
    c = fadeEl.children;
    if(c.length > 0){
      for(var i=0;i<=c.length;i++){
        fadeEl.removeChild(c[i]);
      }
    }
    else{
      this.handleClickEvents();
    }
  },

  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", (e) => {
      this.el.setAttribute("material", {
        color: "#ffffff",
      });
    });
  },

  handleClickEvents: function () {
    this.el.addEventListener("click", (e) => {
      const placeContainer = document.querySelector("#placesContainer");
      const {state} = placeContainer.getAttribute("comic");

      if (state == "places-list") {
        console.log("Hello")
        const id = this.el.getAttribute("id");
        const placesId = [
          "cp-aero",
          "out-spa",
          "spider",
          "super",
        ];
        console.log(id)
        if (placesId.includes(id)) {
          console.log(id)
          placeContainer.setAttribute("tour", {
            state:"view",
            selectedCard: id,
          });
        }
      }
    });
  },
});
