//property-type filter
window.onload = () => {
  let filters = {
    propertyType: [],
    bhkType: [],
    budgetMin: 0,
    budgetMax: 500000000,
    saleType: [],
    genderType: [],
    roomType: [],
    foodType: [],
    suitableType: [],
    locationType: [],
    furnishingType: [],
    possessionStage: [],
  };

  /* Flip chevron on dropdown open */
  //flip chevron on dropdown open
  document.querySelectorAll(".dropdown").forEach((item) => {
    item.addEventListener("shown.bs.dropdown", (event) => {
      event.target.querySelector("svg").style.transform = "rotate(180deg)";
    });
    item.addEventListener("hidden.bs.dropdown", (event) => {
      event.target.querySelector("svg").style.transform = "rotate(0deg)";
    });
  });
  //change property type on click
  // document.querySelectorAll(".property-types").forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     item.classList.toggle("active-property-type");
  //     /* handle multi-select */
  //     if (item.classList.contains("active-property-type")) {
  //       filters.propertyType.push(e.target.getAttribute("data-property-type"));
  //       item.parentElement.parentElement.parentElement
  //         .querySelector(".menu-type-1")
  //         .classList.add("menu-type-1-active");
  //     } else {
  //       filters.propertyType = filters.propertyType.filter(
  //         (type) => type !== e.target.getAttribute("data-property-type")
  //       );
  //       if (filters.propertyType.length === 0) {
  //         item.parentElement.parentElement.parentElement
  //           .querySelector(".menu-type-1")
  //           .classList.remove("menu-type-1-active");
  //       }
  //     }
  //   });
  // });

  document.querySelectorAll(".bhk-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-bhk-type");
      /* handle multi-select */
      if (item.classList.contains("active-bhk-type")) {
        filters.bhkType.push(e.target.getAttribute("data-bhk-count"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.bhkType = filters.bhkType.filter(
          (type) => type !== e.target.getAttribute("data-bhk-count")
        );
        if (filters.bhkType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Budget Slider */
  const minSlider = document.getElementById("slider-min");
  const maxSlider = document.getElementById("slider-max");

  const initialMinValue = minSlider.value;
  const initialMaxValue = maxSlider.value;

  const menuTypeButton = minSlider
    .closest(".dropdown")
    .querySelector(".menu-type-1");

  function formatLabel(value) {
    if (value < 10000000) {
      return "₹ " + value / 100000 + "L";
    } else {
      return "₹ " + value / 10000000 + "Cr";
    }
  }

  function setMinMax() {
    if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
      let tmp = minSlider.value;
      minSlider.value = maxSlider.value;
      maxSlider.value = tmp;
    }

    const budgetStartLabel = document.getElementById("budget-start-label");
    const budgetEndLabel = document.getElementById("budget-end-label");

    budgetStartLabel.textContent = formatLabel(minSlider.value);
    budgetEndLabel.textContent = formatLabel(maxSlider.value);

    if (
      minSlider.value !== initialMinValue ||
      maxSlider.value !== initialMaxValue
    ) {
      menuTypeButton.classList.add("menu-type-1-active");
    } else {
      menuTypeButton.classList.remove("menu-type-1-active");
    }
  }

  minSlider.addEventListener("input", setMinMax);
  maxSlider.addEventListener("input", setMinMax);

  setMinMax();

  /* Rent Budget Slider */
  const rentMinSlider = document.getElementById("rent-slider-min");
  const rentMaxSlider = document.getElementById("rent-slider-max");

  const rentInitialMinValue = rentMinSlider.value;
  const rentInitialMaxValue = rentMaxSlider.value;

  const rentMenuTypeButton = rentMinSlider
    .closest(".dropdown")
    .querySelector(".menu-type-1");

  function rentFormatLabel(value) {
    if (value < 50000) {
      return "₹ " + value / 1;
    } else {
      return "₹ " + value / 1;
    }
  }

  function setRentMinMax() {
    if (parseInt(rentMinSlider.value) > parseInt(rentMaxSlider.value)) {
      let tmp = rentMinSlider.value;
      rentMinSlider.value = rentMaxSlider.value;
      rentMaxSlider.value = tmp;
    }

    const rentBudgetStartLabel = document.getElementById(
      "rent-budget-start-label"
    );
    const rentBudgetEndLabel = document.getElementById("rent-budget-end-label");

    rentBudgetStartLabel.textContent = rentFormatLabel(rentMinSlider.value);
    rentBudgetEndLabel.textContent = rentFormatLabel(rentMaxSlider.value);

    if (
      rentMinSlider.value !== rentInitialMinValue ||
      rentMaxSlider.value !== rentInitialMaxValue
    ) {
      rentMenuTypeButton.classList.add("menu-type-1-active");
    } else {
      rentMenuTypeButton.classList.remove("menu-type-1-active");
    }
  }

  rentMinSlider.addEventListener("input", setRentMinMax);
  rentMaxSlider.addEventListener("input", setRentMinMax);

  setRentMinMax();

  /* Sq.Ft Slider */
  const sqftMinSlider = document.getElementById("sqft-slider-min");
  const sqftMaxSlider = document.getElementById("sqft-slider-max");

  const sqftInitialMinValue = sqftMinSlider.value;
  const sqftInitialMaxValue = sqftMaxSlider.value;

  const sqftMenuTypeButton = sqftMinSlider
    .closest(".dropdown")
    .querySelector(".menu-type-1");

  function sqftFormatLabel(value) {
    if (value < 1000) {
      return value + "Sq.Ft";
    } else {
      return value + "Sq.Ft";
    }
  }

  function setSqftMinMax() {
    if (parseInt(sqftMinSlider.value) > parseInt(sqftMaxSlider.value)) {
      let tmp = sqftMinSlider.value;
      sqftMinSlider.value = sqftMaxSlider.value;
      sqftMaxSlider.value = tmp;
    }

    const sqftStartLabel = document.getElementById("sqft-start-label");
    const sqftEndLabel = document.getElementById("sqft-end-label");

    sqftStartLabel.textContent = sqftFormatLabel(sqftMinSlider.value);
    sqftEndLabel.textContent = sqftFormatLabel(sqftMaxSlider.value);

    if (
      sqftMinSlider.value !== sqftInitialMinValue ||
      sqftMaxSlider.value !== sqftInitialMaxValue
    ) {
      sqftMenuTypeButton.classList.add("menu-type-1-active");
    } else {
      sqftMenuTypeButton.classList.remove("menu-type-1-active");
    }
  }

  sqftMinSlider.addEventListener("input", setSqftMinMax);
  sqftMaxSlider.addEventListener("input", setSqftMinMax);

  setSqftMinMax();

  // minSlider.addEventListener("input", setMinMax);
  // maxSlider.addEventListener("input", setMinMax);

  /* Furnishing Type */
  document.querySelectorAll(".furnishing-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-furnishing-type");
      /* handle multi-select */
      if (item.classList.contains("active-furnishing-type")) {
        filters.furnishingType.push(
          e.target.getAttribute("data-furnishing-type")
        );
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.furnishingType = filters.furnishingType.filter(
          (type) => type !== e.target.getAttribute("data-furnishing-type")
        );
        if (filters.furnishingType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Sale Type */
  document.querySelectorAll(".sale-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-sale-type");
      /* handle multi-select */
      if (item.classList.contains("active-sale-type")) {
        filters.saleType.push(e.target.getAttribute("data-sale-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.saleType = filters.saleType.filter(
          (type) => type !== e.target.getAttribute("data-sale-type")
        );
        if (filters.saleType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Gender Type */
  document.querySelectorAll(".gender-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-gender-type");
      /* handle multi-select */
      if (item.classList.contains("active-gender-type")) {
        filters.genderType.push(e.target.getAttribute("data-gender-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.genderType = filters.genderType.filter(
          (type) => type !== e.target.getAttribute("data-gender-type")
        );
        if (filters.genderType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Room Type */
  document.querySelectorAll(".room-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-room-type");
      /* handle multi-select */
      if (item.classList.contains("active-room-type")) {
        filters.roomType.push(e.target.getAttribute("data-room-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.roomType = filters.roomType.filter(
          (type) => type !== e.target.getAttribute("data-room-type")
        );
        if (filters.roomType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Food Type */
  document.querySelectorAll(".food-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-food-type");
      /* handle multi-select */
      if (item.classList.contains("active-food-type")) {
        filters.foodType.push(e.target.getAttribute("data-food-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.foodType = filters.foodType.filter(
          (type) => type !== e.target.getAttribute("data-food-type")
        );
        if (filters.foodType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Suitable Type */
  document.querySelectorAll(".suitable-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-suitable-type");
      /* handle multi-select */
      if (item.classList.contains("active-suitable-type")) {
        filters.suitableType.push(e.target.getAttribute("data-suitable-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.suitableType = filters.suitableType.filter(
          (type) => type !== e.target.getAttribute("data-suitable-type")
        );
        if (filters.suitableType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Location Type */
  document.querySelectorAll(".location-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-location-type");
      /* handle multi-select */
      if (item.classList.contains("active-location-type")) {
        filters.locationType.push(e.target.getAttribute("data-location-type"));
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
      } else {
        filters.locationType = filters.locationType.filter(
          (type) => type !== e.target.getAttribute("data-location-type")
        );
        if (filters.locationType.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Posession Stage */
  document.querySelectorAll(".possession-stages").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-possession-stage");
      /* handle multi-select */
      if (item.classList.contains("active-possession-stage")) {
        filters.possessionStage.push(
          e.target.getAttribute("data-possession-stage")
        );
        item.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.add("menu-type-1-active");
        console.log(filters.possessionStage);
      } else {
        filters.possessionStage = filters.possessionStage.filter(
          (type) => type !== e.target.getAttribute("data-possession-stage")
        );
        console.log("else triggered");
        if (filters.possessionStage.length === 0) {
          item.parentElement.parentElement.parentElement
            .querySelector(".menu-type-1")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });

  /* Handle Sort By Dropdown */
  const dropDownBtnTxt = document.getElementById("sortBySelection");
  const eachSortEl = document.querySelectorAll(".sort-by");
  eachSortEl.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      dropDownBtnTxt.innerHTML = item.getAttribute("data-sort-by");
    });
  });

  /* Handle More Filters Scroll */
  const allOptions = document.querySelectorAll(".more-left-btns");
  const scrollableMoreDiv = document.querySelector(".more-right-filters");
  allOptions.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      let idOfFilterToScroll = e.target.getAttribute("data-scroll-to");
      let element = document.getElementById(idOfFilterToScroll);
      scrollableMoreDiv.scrollTo({
        top: element.offsetTop - 0,
        behavior: "smooth",
      });
    });
  });

  var splide = new Splide(".splide", {
    perPage: 1.2,
    type: "slide",
    focus: "center",
    rewind: true,
    breakpoints: {
      768: {
        perPage: 1.2,
      },
    },
  });

  splide.mount();

  new rive.Rive({
    src: "rive/fire.riv",
    canvas: document.getElementById("pl-fire"),
    autoplay: true,
    layout: new rive.Layout({ fit: "contain", alignment: "center" }),
  });

  document.querySelectorAll(".more-filters").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.parentElement.parentElement.id === "pl-filter-listedby") {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          listedbySelections.pop(e.target.getAttribute("data-listed-by"));
        } else {
          item.classList.add("pl-more-active");
          listedbySelections.push(e.target.getAttribute("data-listed-by"));
        }
        console.log(listedbySelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-verified"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          verifiedSelections.pop(e.target.getAttribute("data-verified"));
        } else {
          item.classList.add("pl-more-active");
          verifiedSelections.push(e.target.getAttribute("data-verified"));
        }
        console.log(verifiedSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-amenities"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          amenitiesSelections.pop(e.target.getAttribute("data-amenities"));
        } else {
          item.classList.add("pl-more-active");
          amenitiesSelections.push(e.target.getAttribute("data-amenities"));
        }
        console.log(amenitiesSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-bathrooms"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          bathroomSelections.pop(e.target.getAttribute("data-bathroom"));
        } else {
          item.classList.add("pl-more-active");
          bathroomSelections.push(e.target.getAttribute("data-bathroom"));
        }
        console.log(bathroomSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-facing"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          facingSelections.pop(e.target.getAttribute("data-facing"));
        } else {
          item.classList.add("pl-more-active");
          facingSelections.push(e.target.getAttribute("data-facing"));
        }
        console.log(facingSelections);
      } else if (
        e.target.parentElement.parentElement.id === "pl-filter-ageOfProperty"
      ) {
        if (item.classList.contains("pl-more-active")) {
          item.classList.remove("pl-more-active");
          ageOfPropertySelections.pop(
            e.target.getAttribute("data-age-of-property")
          );
        } else {
          item.classList.add("pl-more-active");
          ageOfPropertySelections.push(
            e.target.getAttribute("data-age-of-property")
          );
        }
        console.log(ageOfPropertySelections);
      }
    });
  });

  let listedbySelections = [];
  let verifiedSelections = [];
  let amenitiesSelections = [];
  let bathroomSelections = [];
  let facingSelections = [];
  let ageOfPropertySelections = [];

  document.querySelectorAll(".more-filters").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const parentDiv = e.target.parentElement.parentElement;
      const selectedValue = e.target.getAttribute(e.target.dataset.filterKey);

      // Determine which selection array to use based on the parentDiv's id
      let selectionArray;
      if (parentDiv.id === "pl-filter-listedby") {
        selectionArray = listedbySelections;
      } else if (parentDiv.id === "pl-filter-verified") {
        selectionArray = verifiedSelections;
      } else if (parentDiv.id === "pl-filter-amenities") {
        selectionArray = amenitiesSelections;
      } else if (parentDiv.id === "pl-filter-bathrooms") {
        selectionArray = bathroomSelections;
      } else if (parentDiv.id === "pl-filter-facing") {
        selectionArray = facingSelections;
      } else if (parentDiv.id === "pl-filter-ageOfProperty") {
        selectionArray = ageOfPropertySelections;
      }

      // Toggle selection
      if (item.classList.contains("pl-more-active")) {
        item.classList.remove("pl-more-active");
        selectionArray.pop(selectedValue);
      } else {
        item.classList.add("pl-more-active");
        selectionArray.push(selectedValue);
      }

      // Add or remove the active class based on current selections
      const anySelected = [
        listedbySelections,
        verifiedSelections,
        amenitiesSelections,
        bathroomSelections,
        facingSelections,
        ageOfPropertySelections,
      ].some((selection) => selection.length > 0);

      const menuButton = document.getElementById("dropdownMoreFilters");
      if (anySelected) {
        menuButton.classList.add("menu-type-1-active");
      } else {
        menuButton.classList.remove("menu-type-1-active");
      }

      console.log(listedbySelections);
      console.log(verifiedSelections);
      console.log(amenitiesSelections);
      console.log(bathroomSelections);
      console.log(facingSelections);
      console.log(ageOfPropertySelections);
    });
  });

  /* if screen size is max-width 916px collapse pl-nav-2 */
  const plNav2 = document.querySelector("#pl-nav-2");
  const filterBtn = document.querySelector(".pl-mobile-filter-btn");
  if (window.innerWidth <= 916) {
    plNav2.classList.add("pl-nav-2-mob-hidden");
    filterBtn.addEventListener("click", () => {
      plNav2.classList.toggle("pl-nav-2-mob-hidden");
    });
  } else {
    plNav2.classList.remove("pl-nav-2-mob-hidden");
  }

  /* end */
};

// More filters
document.addEventListener("DOMContentLoaded", function () {
  let listedbySelections = [];
  let verifiedSelections = [];
  let amenitiesSelections = [];
  let bathroomSelections = [];
  let facingSelections = [];
  let ageOfPropertySelections = [];

  document.querySelectorAll(".more-filters").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const parentDiv = e.target.parentElement.parentElement;
      const selectedValue = e.target.getAttribute(e.target.dataset.filterKey);

      // Determine which selection array to use based on the parentDiv's id
      let selectionArray;
      if (parentDiv.id === "pl-filter-listedby") {
        selectionArray = listedbySelections;
      } else if (parentDiv.id === "pl-filter-verified") {
        selectionArray = verifiedSelections;
      } else if (parentDiv.id === "pl-filter-amenities") {
        selectionArray = amenitiesSelections;
      } else if (parentDiv.id === "pl-filter-bathrooms") {
        selectionArray = bathroomSelections;
      } else if (parentDiv.id === "pl-filter-facing") {
        selectionArray = facingSelections;
      } else if (parentDiv.id === "pl-filter-ageOfProperty") {
        selectionArray = ageOfPropertySelections;
      }

      // Toggle selection
      if (item.classList.contains("pl-more-active")) {
        item.classList.remove("pl-more-active");
        selectionArray.pop(selectedValue);
      } else {
        item.classList.add("pl-more-active");
        selectionArray.push(selectedValue);
      }

      // Add or remove the active class based on current selections
      const anySelected = [
        listedbySelections,
        verifiedSelections,
        amenitiesSelections,
        bathroomSelections,
        facingSelections,
        ageOfPropertySelections,
      ].some((selection) => selection.length > 0);

      const menuButton = document.getElementById("dropdownMoreFilters");
      if (anySelected) {
        menuButton.classList.add("menu-type-1-active");
      } else {
        menuButton.classList.remove("menu-type-1-active");
      }
    });
  });
});

/* Build Up Area JS */
document.addEventListener("DOMContentLoaded", function () {
  const builtupArea = document.getElementById("pl-filter-builtupArea");
  const builtupAreaStartLabel = document.getElementById(
    "builtupArea-start-label"
  );
  const builtupAreaEndLabel = document.getElementById("builtupArea-end-label");
  const builtupAreaMinSlider = document.getElementById(
    "builtupArea-slider-min"
  );
  const builtupAreaMaxSlider = document.getElementById(
    "builtupArea-slider-max"
  );
  const builtupAreaSliderTrack = document.querySelector(
    ".dual-range-slider .slider-track"
  );
  const builtupAreaLabels = document.querySelectorAll(
    ".dual-range-slider .labels span"
  );

  function setBuiltupAreaMinMax() {
    if (
      parseInt(builtupAreaMinSlider.value) >
      parseInt(builtupAreaMaxSlider.value)
    ) {
      let tmp = builtupAreaMinSlider.value;
      builtupAreaMinSlider.value = builtupAreaMaxSlider.value;
      builtupAreaMaxSlider.value = tmp;
    }

    if (builtupAreaMinSlider.value == 0) {
      builtupAreaStartLabel.textContent = "0";
    } else {
      builtupAreaStartLabel.textContent = builtupAreaMinSlider.value + "sq.ft";
    }
  }

  builtupAreaMinSlider.addEventListener("input", setBuiltupAreaMinMax);
  builtupAreaMaxSlider.addEventListener("input", setBuiltupAreaMinMax);

  builtupAreaMaxSlider.addEventListener("input", () => {
    if (builtupAreaMaxSlider.value == 5000) {
      builtupAreaEndLabel.textContent = "5000+ sq.ft";
    } else {
      builtupAreaEndLabel.textContent = builtupAreaMaxSlider.value + "sq.ft";
    }
  });
});

// Handle built-up area range change
document.addEventListener("DOMContentLoaded", function () {
  const builtUpAreaMin = document.getElementById("builtupArea-slider-min");
  const builtUpAreaMax = document.getElementById("builtupArea-slider-max");

  [builtUpAreaMin, builtUpAreaMax].forEach((slider) => {
    slider.addEventListener("input", () => {
      const minValue = parseInt(builtUpAreaMin.value);
      const maxValue = parseInt(builtUpAreaMax.value);

      // If the range is adjusted, make sure the active class is added
      if (minValue < maxValue) {
        document
          .getElementById("dropdownMoreFilters")
          .classList.add("menu-type-1-active");
      } else {
        // If both are at default values, remove the active class
        if (minValue === 0 && maxValue === 5000) {
          document
            .getElementById("dropdownMoreFilters")
            .classList.remove("menu-type-1-active");
        }
      }
    });
  });
});

/* handle searchbox input */
document.addEventListener("DOMContentLoaded", function () {
  let selectedTags = [];
  const searchInput = document.getElementById("pl-search-input");
  const searchDropDiv = document.querySelector("#pl-search-drop-div");
  const searchDropdownList = document.querySelector(".pl-search-drop");
  const tagDiv = document.querySelector("#pl-search-tag-div");
  const allTagDiv = document.querySelector(".pl-tag-list-all");
  const focusSearchInput = () => {
    searchInput.focus();
  };

  tagDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInput.value = "";
    focusSearchInput();
  });

  /* handle dropdiv visibility */
  searchInput.addEventListener("focus", () => {
    tagDiv.style.display = "none";
    searchDropDiv.style.display = "block";
  });

  searchInput.addEventListener("blur", (e) => {
    searchDropDiv.style.display = "none";
    tagDiv.style.display = "flex";
  });
  searchDropdownList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      /* tagDiv.style.display = "flex"; */
      /* check if it exists on selectedTags, push if not else nothing */
      if (!selectedTags.includes(e.target.textContent)) {
        selectedTags.push(e.target.textContent);
        const mainlocation = document.getElementById("pl-tag-location");
        if (mainlocation) {
          tagDiv.removeChild(mainlocation);
        }
        if (
          tagDiv.childElementCount > 1 &&
          tagDiv.firstChild.textContent !== "Vadodara"
        ) {
          /* check if the element exists*/
          if (document.getElementById("pl-tag-counter")) {
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.classList.add("pl-counter-part");
            newTag.id = "alltag-id";
            newTag.textContent = e.target.textContent;
            document.querySelector(".pl-tag-list-all").appendChild(newTag);

            return;
          }

          const counterTag = document.createElement("div");
          counterTag.classList.add("pl-search-tag");
          counterTag.id = "pl-tag-counter";
          counterTag.textContent = selectedTags.length - 1 + "+";
          tagDiv.appendChild(counterTag);
          const newTag = document.createElement("div");
          newTag.classList.add("pl-search-tag");
          newTag.classList.add("pl-counter-part");
          newTag.id = "alltag-id";
          newTag.textContent = e.target.textContent;
          document.querySelector(".pl-tag-list-all").appendChild(newTag);
          return;
        }

        const newTag = document.createElement("div");
        newTag.classList.add("pl-search-tag");
        newTag.textContent = e.target.textContent;
        tagDiv.appendChild(newTag);
        let copyChild = tagDiv.children[1].cloneNode(true);
        copyChild.id = "alltag-id";
        document.querySelector(".pl-tag-list-all").appendChild(copyChild);
      }
    });
  });

  /* handle tag removal from allTagDiv */
  allTagDiv.addEventListener("mousedown", (event) => {
    event.preventDefault();
    allTagDiv.querySelectorAll("#alltag-id").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        allTagDiv.removeChild(item);
        selectedTags = selectedTags.filter(
          (tag) => tag !== e.target.textContent
        );
        /* remove from tagDiv */
        if (selectedTags.length === 0) {
          const newTag = document.createElement("div");
          newTag.classList.add("pl-search-tag");
          newTag.textContent = "Vadodara";
          newTag.id = "pl-tag-location";
          /* remove all  */
          tagDiv.querySelectorAll(".pl-search-tag").forEach((item) => {
            tagDiv.removeChild(item);
          });
          tagDiv.appendChild(newTag);
        }
        tagDiv.querySelectorAll(".pl-search-tag").forEach((item) => {
          /* case 1: if len of selectedTags >= 2 and selected tag context is true */
          if (
            selectedTags.length >= 2 &&
            e.target.textContent == item.textContent
          ) {
            /* remove the item and decrease the counter */
            tagDiv.removeChild(item);
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            /* add the reduced item as tag*/
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[0];
            tagDiv.insertBefore(newTag, tagDiv.children[1]);
            return;
          }

          /* case 1.5: if len of selectedTags === 2 and selected tag context is false */
          if (
            selectedTags.length === 1 &&
            e.target.textContent !== item.textContent
          ) {
            const tagCounter = document.getElementById("pl-tag-counter");
            tagCounter.remove();
            /*  const newTag = document.createElement("div");
          newTag.classList.add("pl-search-tag");
          newTag.textContent = selectedTags[1];
          tagDiv.appendChild(newTag); */
            return;
          }

          /* case 2: if len of selectedTags >= 2 and selected tag context is false */
          if (
            selectedTags.length >= 2 &&
            e.target.textContent !== item.textContent
          ) {
            /* reduce counter */
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            return;
          }

          /* case 3: if len of selectedTags == 1 and selected tag context is true */
          if (
            selectedTags.length == 1 &&
            e.target.textContent == item.textContent
          ) {
            tagDiv.removeChild(item);
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[0];
            tagDiv.appendChild(newTag);

            return;
          }
        });
      });
    });
  });

  /* handle tag removal */
  tagDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    return;
  });
});

function shareToFacebook(url) {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareToWhatsApp(url) {
  window.open(`https://wa.me/?text=${url}`, "_blank");
}

function shareToEmail(url) {
  const subject = encodeURIComponent("Check out this article!");
  const body = encodeURIComponent(`I found this article interesting: ${url}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink(url) {
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy text: ", err));
}

// document.addEventListener("DOMContentLoaded", function () {
//   const modalButtons = document.querySelectorAll(".pl-posted-by-download-b");
//   const likeButtons = document.querySelectorAll(".pll-like");
//   const contactModalButtons = document.querySelectorAll(
//     ".pl-posted-by-contact-p"
//   );
//   const interestModalButtons = document.querySelector(".interested-btn");
// const closeIcon = document.querySelector(
//   ".brochure-modal-container .close-icon"
// );

function showContactModal(event) {
  event.preventDefault();
  event.stopPropagation();

  const brochureModal = document.querySelector(
    ".brochure-modal-container.form2"
  );

  brochureModal.style.display = "flex";
  brochureModal.offsetHeight;
  brochureModal.classList.add("show");
  brochureModal.classList.remove("hide");
}

function hideContactModal() {
  const brochureModal = document.querySelector(
    ".brochure-modal-container.form2"
  );

  brochureModal.classList.add("hide");
  brochureModal.classList.remove("show");

  setTimeout(() => {
    brochureModal.style.display = "none";
  }, 500);
}

function closeContactModal(event) {
  const brochureModal = document.querySelector(
    ".brochure-modal-container.form2"
  );

  if (event.target === brochureModal) {
    hideContactModal();
  }
}

function showModal(event) {
  event.preventDefault();
  event.stopPropagation();
  const brochureModal = document.querySelector(".brochure-modal-container");

  brochureModal.style.display = "flex";
  brochureModal.offsetHeight;
  brochureModal.classList.add("show");
  brochureModal.classList.remove("hide");
}

function hideModal() {
  const brochureModal = document.querySelector(".brochure-modal-container");

  brochureModal.classList.add("hide");
  brochureModal.classList.remove("show");

  setTimeout(() => {
    brochureModal.style.display = "none";
  }, 500);
}

function closeModal(event) {
  const brochureModal = document.querySelector(".brochure-modal-container");

  if (event.target === brochureModal) {
    hideModal();
  }
}

// Otp sent message
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".brochure-modal-container form");

  forms.forEach((form) => {
    const countryCodeSelect = form.querySelector("#country-code");
    const phoneNumberInput = form.querySelector("#phone-number");
    const sendOtpBtn = form.querySelector("#send-otp-btn");
    const otpSentMessage = form.querySelector("#otp-sent-message");
    const phoneNumberCont = form.querySelector(".phone-number-container");

    sendOtpBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const countryCode = countryCodeSelect.value;
      const phoneNumber = phoneNumberInput.value;

      if (phoneNumber) {
        otpSentMessage.textContent = `We have sent the OTP to ${countryCode} ${phoneNumber}.`;
        otpSentMessage.classList.add("active");
        phoneNumberCont.classList.add("sent");
        form
          .querySelector(".otp-container")
          .classList.add("otp-container-active");
        phoneNumberInput.style.marginBottom = "0";
      } else {
        alert("Please enter a valid phone number.");
        form
          .querySelector(".otp-container")
          .classList.remove("otp-container-active");
      }
    });
  });
});

// Check form validity
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".modals form");

  forms.forEach(function (form) {
    const submitButton = form.querySelector(".submit-btn");
    const checkBox = form.querySelector(".modals #checkboxId");
    const verifyOtpButton = form.querySelector("#verify-otp");
    const otpInput = form.querySelector("input[name='otp']");
    const otpLable = form.querySelector(".otp-container label");

    form.addEventListener("input", function () {
      const isValid = form.checkValidity();

      if (isValid && checkBox.checked) {
        submitButton.disabled = false;
        submitButton.classList.add("active");
      } else {
        submitButton.disabled = true;
        submitButton.classList.remove("active");
      }
    });

    otpInput.addEventListener("input", function () {
      if (otpInput.value.length === 4) {
        otpInput.setAttribute("disabled", true);
        otpLable.style.transform = "translateY(2px)";
        otpLable.style.backgroundColor = "#ffffff";
        verifyOtpButton.classList.remove("d-none");
      } else {
        otpInput.removeAttribute("disabled");
        verifyOtpButton.classList.add("d-none");
      }
    });
  });
});

// Confirmation Modal Popup and form reset
document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll(".submit-btn");
  const modals = document.querySelectorAll(".modals");
  const confirmationPopupModals = document.querySelectorAll(
    ".confirmation-popup-modal"
  );
  // const closeIcons = document.querySelectorAll(".modal-container .close-icon");

  submitButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      modals[index].style.display = "none";
      const form = modals[index].querySelector("form");
      if (form) form.reset();

      const confirmationModal = confirmationPopupModals[index];
      confirmationModal.style.display = "block";

      const video = confirmationModal.querySelector("video");
      video.play();

      setTimeout(function () {
        video.classList.add("shrink");
        confirmationModal.classList.add("show");
      }, 3500);
    });
  });

  // closeIcons.forEach((closeIcon, index) => {
  //   closeIcon.addEventListener("click", function () {
  //     const confirmationModal = confirmationPopupModals[index];
  //     const video = confirmationModal.querySelector("video");

  //     confirmationPopupModals[index].style.display = "none";
  //     modals[index].style.display = "block";
  //     confirmationModal.classList.remove("show");
  //     video.classList.remove("shrink");
  //   });
  // });
});

// Opening nav filter
document.addEventListener("DOMContentLoaded", function () {
  const locationBtn = document.querySelector("nav .dropdown");
  const nav = document.querySelector("nav");
  const navFilter = document.querySelector("nav .nav-filter");
  const dropdown = document.querySelector(".dropdown svg");

  locationBtn.addEventListener("click", function () {
    navFilter.classList.toggle("active");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      dropdown.style.transform = "rotate(180deg)";
    } else {
      dropdown.style.transform = "rotate(0deg)";
    }
  });
});

// Buy Rent toggle button
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button p");
  let activeToggle = document.querySelector(".toggle-button p.active");
  let toggleSlideLine = document.createElement("div");

  toggleSlideLine.classList.add("toggle-slide-line");
  document.querySelector(".toggle-button").appendChild(toggleSlideLine);

  gsap.set(toggleSlideLine, {
    height: 26,
    position: "absolute",
    top: 4,
    zIndex: -1,
    transformOrigin: "left center",
    borderRadius: 5,
  });

  if (activeToggle) {
    gsap.set(toggleSlideLine, {
      width: activeToggle.offsetWidth,
      left: activeToggle.offsetLeft,
      backgroundColor: "#ffffff",
    });
  }

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleButtons.forEach(function (p) {
        p.classList.remove("active");
      });
      this.classList.add("active");

      updateActiveToggle(this);

      const selectedOption = this.textContent.trim();
      toggleCanvasVisibility(selectedOption);
    });
  });

  function updateActiveToggle(newActiveToggle) {
    if (activeToggle !== newActiveToggle) {
      activeToggle.classList.remove("active");
      newActiveToggle.classList.add("active");

      const tl = gsap.timeline();

      const activeToggleRect = activeToggle.getBoundingClientRect();
      const newToggleRect = newActiveToggle.getBoundingClientRect();
      const direction =
        newToggleRect.left < activeToggleRect.left ? "left" : "right";

      tl.to(toggleSlideLine, {
        duration: 0.3,
        width: newActiveToggle.offsetWidth,
        left: newActiveToggle.offsetLeft,
        ease: "power2.out",
      })
        .to(
          toggleSlideLine,
          {
            duration: 0.1,
            x: direction === "left" ? "-3px" : "+3px",
            ease: "bounce.out",
          },
          "-=0.1"
        )
        .to(toggleSlideLine, {
          duration: 0.1,
          x: direction === "left" ? "+3px" : "-3px",
          ease: "bounce.out",
        })
        .to(toggleSlideLine, {
          duration: 0.2,
          x: "0px",
          ease: "power2.inOut",
        });

      activeToggle = newActiveToggle;
    }
  }

  const initialOption = document
    .querySelector(".toggle-button p.active")
    .textContent.trim();
  toggleCanvasVisibility(initialOption);
});

// Buy or Rent Toggle Button
function toggleCanvasVisibility(selectedOption) {
  const pgCanvas = document.querySelector(".pg");
  const coworkingSpaceCanvas = document.querySelector(".coworkingspace");
  const plotCanvas = document.querySelector(".plot");

  if (selectedOption === "Buy") {
    pgCanvas.classList.add("hidden");
    coworkingSpaceCanvas.classList.add("hidden");
    plotCanvas.classList.remove("hidden");
  } else if (selectedOption === "Rent") {
    pgCanvas.classList.remove("hidden");
    coworkingSpaceCanvas.classList.remove("hidden");
    plotCanvas.classList.add("hidden");
  }
}

// Selecting Property Type
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".nav-filter ul li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      listItems.forEach((li) => li.classList.remove("active"));

      item.classList.add("active");
    });
  });
});

// Change of Property Types
document.addEventListener("DOMContentLoaded", function () {
  const propertyTypes = {
    Residential: ["Apartment", "Duplex", "Villa", "Penthouse", "Studio"],
    Commercial: [
      "Ready to use office space",
      "Bare shell office space",
      "Shop",
      "Warehouse",
      "Showroom",
    ],
    Plots: ["Residential Plot", "Commercial Plot", "Agricultural Plots"],
    PG: ["Girls", "Boys", "Both"],
    "Co-working Space": [],
  };

  const dropdownContainer = document.querySelector(
    "#propertyTypeDropdown .item-box"
  );

  const filters = {
    propertyType: [],
  };

  function updateDropdown(type) {
    dropdownContainer.innerHTML = "";
    const options = propertyTypes[type] || [];

    if (options.length === 0) {
      dropdownContainer.innerHTML = "<p>No options available</p>";
    } else {
      options.forEach((option) => {
        const button = document.createElement("button");
        button.setAttribute("data-property-type", option);
        button.classList.add(
          "property-types",
          "item-type-2",
          "text-nowrap",
          "text-start"
        );
        button.innerText = option;

        button.addEventListener("click", (e) => {
          e.stopPropagation();
          handlePropertyTypeSelection(button, e);
        });

        dropdownContainer.appendChild(button);
      });

      filters.propertyType.forEach((selectedType) => {
        const selectedButton = dropdownContainer.querySelector(
          `[data-property-type="${selectedType}"]`
        );
        if (selectedButton) {
          selectedButton.classList.add("active-property-type");
        }
      });
    }
  }

  // Handle property type selection
  function handlePropertyTypeSelection(button, e) {
    e.preventDefault();

    button.classList.toggle("active-property-type");

    const propertyType = e.target.getAttribute("data-property-type");

    if (button.classList.contains("active-property-type")) {
      filters.propertyType.push(propertyType);

      button.parentElement.parentElement.parentElement
        .querySelector(".menu-type-1")
        .classList.add("menu-type-1-active");
    } else {
      filters.propertyType = filters.propertyType.filter(
        (type) => type !== propertyType
      );

      if (filters.propertyType.length === 0) {
        button.parentElement.parentElement.parentElement
          .querySelector(".menu-type-1")
          .classList.remove("menu-type-1-active");
      }
    }
  }

  // Event listeners for tabs (to switch between property types)
  const tabs = document.querySelectorAll("#propertyTypeTabs li");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((tab) => tab.classList.remove("active"));
      this.classList.add("active");
      const selectedType = this.getAttribute("data-type");
      updateDropdown(selectedType);
    });
  });

  updateDropdown("Residential");
});

// Opening Share div
document.addEventListener("DOMContentLoaded", () => {
  const plShare = document.querySelectorAll(".pll-share");
  const plShareDiv = document.querySelectorAll(".share-div");

  const toggleShareDiv = (index) => {
    plShareDiv.forEach((div, j) => {
      div.classList.toggle("share-div-active", j === index);
    });
  };

  plShare.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleShareDiv(i);
    });
  });

  const closeAllShareDivs = () => {
    plShareDiv.forEach((div) => {
      div.classList.remove("share-div-active");
    });
  };

  document.addEventListener("click", () => {
    closeAllShareDivs();
  });
});

// Expanding Property description
function expandPropertyDescription(event) {
  event.preventDefault();
  event.stopPropagation();
  const expandIcon = event.currentTarget;
  const card = expandIcon.closest(".property-list-card");
  const propertyDescription = card.querySelector(".property-description");
  const arrow = card.querySelector(".down-arrow");
  const propertyDetails = card.querySelector(".property-details");

  propertyDescription.classList.add("expand");
  arrow.classList.remove("d-none");
  expandIcon.classList.add("d-none");
  propertyDetails.style.marginTop = "29px";
}

// Closing Property description
function closePropertyDescription(event) {
  event.preventDefault();
  event.stopPropagation();
  const closeIcon = event.currentTarget;
  const card = closeIcon.closest(".property-list-card");
  const propertyDescription = card.querySelector(".property-description");
  const arrow = card.querySelector(".down-arrow");
  const moreBtn = card.querySelector(".expand-about-property");
  const propertyDetails = card.querySelector(".property-details");

  propertyDescription.classList.remove("expand");
  arrow.classList.add("d-none");
  moreBtn.classList.remove("d-none");

  propertyDetails.style.marginTop = "0px";
}

// Expanding Property features
function expandPropertyFeatures(event) {
  event.preventDefault();
  event.stopPropagation();
  const expandIcon = event.currentTarget;
  const card = expandIcon.closest(".property-list-card");
  const propertyDetails = card.querySelector(".property-details");
  const propertyDescription = card.querySelector(".property-description");

  if (
    window.innerWidth > 1400 ||
    (window.innerWidth >= 870 && window.innerWidth <= 1200)
  ) {
    const paragraphCount = propertyDetails.querySelectorAll("p").length;
    if (paragraphCount <= 4) {
      return;
    }
  }

  propertyDetails.classList.toggle("expand");
  expandIcon.classList.toggle("rotate");

  propertyDescription.style.marginBottom =
    propertyDescription.style.marginBottom === "64px" ? "0" : "64px";
}

// Expanding Property Amenities
function expandPropertyAmenities(event) {
  event.preventDefault();
  event.stopPropagation();
  const expandIcon = event.currentTarget;
  const card = expandIcon.closest(".property-list-card");
  const propertyAmenities = card.querySelector(".property-amenities");
  const propertyDescription = card.querySelector(".property-description");

  if (
    window.innerWidth > 1400 ||
    (window.innerWidth >= 850 && window.innerWidth <= 1200)
  ) {
    const imgCount = propertyAmenities.querySelectorAll("img").length;
    if (imgCount <= 6) {
      return;
    }
  }

  propertyAmenities.classList.toggle("expand");
  expandIcon.classList.toggle("rotate");

  propertyDescription.style.marginBottom =
    propertyDescription.style.marginBottom === "80px" ? "0" : "80px";
}

// Open Agreement card
function openAgreementDetails(event) {
  event.stopPropagation();
  event.preventDefault();
  const button = event.currentTarget;
  const card = button.closest(".property-list-details");
  const agreementCard = card.querySelector(".agreement-details-card");

  if (agreementCard.classList.contains("d-none")) {
    agreementCard.classList.remove("d-none");
  } else {
    agreementCard.classList.add("d-none");
  }
}

// Open Agreement card
function openMobileAgreementDetails(event) {
  event.stopPropagation();
  event.preventDefault();
  const button = event.currentTarget;
  const card = button.closest(".mob-card-cost");
  const agreementCard = card.querySelector(".agreement-details-card");

  if (agreementCard.classList.contains("d-none")) {
    agreementCard.classList.remove("d-none");
  } else {
    agreementCard.classList.add("d-none");
  }
}

// Closing Agreement Card when clicked anywhere
document.addEventListener("DOMContentLoaded", function () {
  const agreementCards = document.querySelectorAll(".agreement-details-card");

  agreementCards.forEach((card) => {
    document.addEventListener("click", function (event) {
      if (event.target.closest(".agreement-details-card") === card) {
        return;
      }
      card.classList.add("d-none");
    });
  });
});

// Expand Nearby Places
function expandNearbyPlaces(event) {
  event.stopPropagation();
  event.preventDefault();
  const moreBtn = event.currentTarget;
  const nearbyPlaces = moreBtn.closest(".nearby-places");
  const expandedNearbyPlaces = nearbyPlaces.querySelector(
    ".expanded-nearby-places"
  );

  expandedNearbyPlaces.classList.remove("d-none");
}

function closeNearbyPlaces(event) {
  event.stopPropagation();
  event.preventDefault();
  const closeBtn = event.currentTarget;
  const nearbyPlaces = closeBtn.closest(".nearby-places");
  const expandedNearbyPlaces = nearbyPlaces.querySelector(
    ".expanded-nearby-places"
  );

  expandedNearbyPlaces.classList.add("d-none");
}

// Expanding PG Amenities
function expandPGAmenities(event) {
  event.preventDefault();
  event.stopPropagation();
  const expandIcon = event.currentTarget;
  const card = expandIcon.closest(".property-list-card");
  const propertyAmenities = card.querySelector(".property-amenities");
  const nearbyPlaces = card.querySelector(".nearby-places");

  if (
    window.innerWidth > 1400 ||
    (window.innerWidth >= 850 && window.innerWidth <= 1200)
  ) {
    const imgCount = propertyAmenities.querySelectorAll("img").length;
    if (imgCount <= 6) {
      return;
    }
  }

  propertyAmenities.classList.toggle("expand");
  expandIcon.classList.toggle("rotate");

  nearbyPlaces.style.marginBottom =
    nearbyPlaces.style.marginBottom === "80px" ? "0" : "80px";
}

// Function to get the currently selected type
function getSelectedType() {
  const activeTab = document.querySelector("#propertyTypeTabs .active");
  return activeTab ? activeTab.getAttribute("data-type") : null;
}

// Function to get the currently selected status
function getSelectedStatus() {
  const activeButton = document.querySelector(".toggle-button p.active");
  return activeButton ? activeButton.textContent.toLowerCase() : null;
}

// Changing Filters
function changeFilter(status, type) {
  const rentBudget = document.querySelector(".rent-budget-dropdown");
  const budget = document.querySelector(".budget-dropdown");
  const bhkType = document.querySelector(".bhk-dropdown");
  const moreFilter = document.querySelector(".more-filters-dropdown");
  const saleType = document.querySelector(".sale-type-dropdown");
  const furnishingType = document.querySelector(".furnishing-type-dropdown");
  const possessionStage = document.querySelector(".possession-stage-dropdown");
  const propertyType = document.querySelector(".property-type-dropdown");
  const genderType = document.querySelector(".gender-type-dropdown");
  const foodType = document.querySelector(".food-type-dropdown");
  const roomType = document.querySelector(".room-type-dropdown");
  const sqft = document.querySelector(".sqft-dropdown");
  const suitable = document.querySelector(".suitable-type-dropdown");
  const location = document.querySelector(".location-type-dropdown");
  const filterLeaseType = document.querySelectorAll(".pl-filter-leaseType");
  const filterListedBy = document.querySelectorAll(".pl-filter-listedby");
  const filterSqft = document.querySelectorAll(".pl-filter-builtupArea");
  const filterRera = document.querySelectorAll(".pl-filter-rera");
  const filterFurnishing = document.querySelectorAll(".pl-filter-furnishing");
  const filterEntrance = document.querySelectorAll(".pl-filter-facing");

  if (status === "rent") {
    rentBudget.classList.remove("d-none");
    budget.classList.add("d-none");
    saleType.classList.add("d-none");
  } else if (status === "buy") {
    rentBudget.classList.add("d-none");
    budget.classList.remove("d-none");
    saleType.classList.remove("d-none");
  }

  if (status === "rent" || type === "plots") {
    possessionStage.classList.add("d-none");
  } else {
    possessionStage.classList.remove("d-none");
  }

  if (status === "rent" && type === "residential") {
    furnishingType.classList.remove("d-none");
    filterListedBy.forEach((element) => {
      element.classList.add("d-none");
    });
    filterLeaseType.forEach((element) => {
      element.classList.remove("d-none");
    });
    filterSqft.forEach((element) => {
      element.classList.remove("d-none");
    });
    filterRera.forEach((element) => {
      element.classList.add("d-none");
    });
    filterFurnishing.forEach((element) => {
      element.classList.add("d-none");
    });
    filterEntrance.forEach((element) => {
      element.classList.add("d-none");
    });
  } else {
    furnishingType.classList.add("d-none");
    filterListedBy.forEach((element) => {
      element.classList.remove("d-none");
    });
    filterLeaseType.forEach((element) => {
      element.classList.add("d-none");
    });
    filterSqft.forEach((element) => {
      element.classList.add("d-none");
    });
    filterRera.forEach((element) => {
      element.classList.remove("d-none");
    });
    filterFurnishing.forEach((element) => {
      element.classList.remove("d-none");
    });
    filterEntrance.forEach((element) => {
      element.classList.add("d-none");
    });
  }

  if (
    (type === "plots" && status === "buy") ||
    (status === "rent" && type === "pg") ||
    type === "commercial" ||
    type === "coworking-space"
  ) {
    bhkType.classList.add("d-none");
  } else {
    bhkType.classList.remove("d-none");
  }

  if (status === "rent" && (type === "pg" || type === "residential")) {
    sqft.classList.add("d-none");
  } else {
    sqft.classList.remove("d-none");
  }

  if (
    type === "plots" ||
    type === "commercial" ||
    (type === "coworking-space" && status === "rent")
  ) {
    sqft.classList.remove("d-none");
  } else {
    sqft.classList.add("d-none");
  }

  if (status === "rent" && type === "pg") {
    moreFilter.classList.add("d-none");
  } else {
    moreFilter.classList.remove("d-none");
  }

  if (
    (type === "coworking-space" && status === "rent") ||
    type === "plots" ||
    type === "commercial" ||
    (type === "residential" && status === "buy")
  ) {
    furnishingType.classList.add("d-none");
  } else {
    furnishingType.classList.remove("d-none");
  }

  if (type === "commercial") {
    suitable.classList.remove("d-none");
    location.classList.remove("d-none");
  } else {
    suitable.classList.add("d-none");
    location.classList.add("d-none");
  }

  if (
    (type === "coworking-space" && status === "rent") ||
    (status === "rent" && type === "pg")
  ) {
    propertyType.classList.add("d-none");
  } else {
    propertyType.classList.remove("d-none");
  }

  if (status === "rent" && type === "pg") {
    genderType.classList.remove("d-none");
    foodType.classList.remove("d-none");
    roomType.classList.remove("d-none");
  } else {
    genderType.classList.add("d-none");
    foodType.classList.add("d-none");
    roomType.classList.add("d-none");
  }
}

// Mobile view description expand
function expandMobilePropertyDescription(event) {
  event.stopPropagation();
  event.preventDefault();

  const moreBtn = event.currentTarget;
  const description = moreBtn.previousElementSibling;
  const isExpanded = description.classList.contains("expanded");

  if (isExpanded) {
    description.classList.remove("expanded");
    description.classList.add("single-line");
    moreBtn.textContent = "more";
  } else {
    description.classList.remove("single-line");
    description.classList.add("expanded");
    moreBtn.textContent = "collapse";
  }
}
