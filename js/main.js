getCourses();

function getCourses() {
  var courses = window._courses;
  var principal = document.querySelector('#cursos');
  principal.innerHTML = "";

  var credits = document.querySelector('#credits').value;
  var stars = document.querySelector('#stars').value;
  var price = document.querySelector('#price').value;
  document.querySelector('#filter-credits').innerHTML = credits;
  document.querySelector('#filter-stars').innerHTML = stars;
  document.querySelector('#filter-price').innerHTML = price;

  var filters = courses.filter(curso => curso.maximumCredits >= credits && curso.rating >= stars && curso.price >= price);
  document.querySelector('#showing').innerHTML = `Showing ${filters.length} of ${courses.length}`;

  filters.forEach(curso => {
      const starPercentage = (curso.rating / 5) * 100;
      const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

      var divCurso = document.createElement("DIV");
      divCurso.className = "curso";
      principal.appendChild(divCurso);

      var img = document.createElement("IMG");
      img.src = `https://techtransit.com/mission.courses${curso.imageUrl}`;
      img.alt = curso.imageText;
      divCurso.appendChild(img);

      var spanCredits = document.createElement("SPAN");
      spanCredits.className = "credits";
      spanCredits.innerHTML = `${curso.maximumCredits} Credits`;
      divCurso.appendChild(spanCredits);

      var hr = document.createElement("HR");
      divCurso.appendChild(hr);

      var h3 = document.createElement("H3");
      h3.innerHTML = curso.name;
      divCurso.appendChild(h3);

      var p = document.createElement("P");
      p.className = "description";
      p.innerHTML = curso.description;
      divCurso.appendChild(p);

      var spanPrice = document.createElement("SPAN");
      spanPrice.className = "price";
      spanPrice.innerHTML = `$${curso.price}`;
      divCurso.appendChild(spanPrice);

      var spanRating = document.createElement("SPAN");
      spanRating.className = "rating";
      divCurso.appendChild(spanRating);

      var divStarsOuter = document.createElement("DIV");
      divStarsOuter.className = "stars-outer";
      spanRating.appendChild(divStarsOuter);

      var divStarsInner = document.createElement("DIV");
      divStarsInner.className = "stars-inner";
      divStarsInner.style.width = starPercentageRounded;
      divStarsOuter.appendChild(divStarsInner);
  });
};
