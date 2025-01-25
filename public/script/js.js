const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

function displayResults() {
  const resultsList = document.querySelector("#results-list");

  function createResultItem(title, result) {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = result;
    li.appendChild(strong);
    li.appendChild(paragraph);
    resultsList.appendChild(li);
  }

  // 1. Filtrar inventores nascidos entre 1500 e 1599
  const inventors1500s = inventors
    .filter((inventor) => inventor.year >= 1500 && inventor.year < 1600)
    .map((inventor) => `${inventor.first} ${inventor.last} (${inventor.year})`);
  createResultItem(
    "Inventores nascidos entre 1500 e 1599",
    inventors1500s.join(", ")
  );

  // 2. Retornar um array com os primeiros e últimos nomes
  const inventorNames = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
  );
  createResultItem("Nomes dos inventores", inventorNames.join(", "));

  // 3. Ordenar inventores por data de nascimento (mais antigo para o mais novo)
  const sortedByBirthDate = inventors
    .slice()
    .sort((a, b) => a.year - b.year)
    .map((inventor) => `${inventor.first} ${inventor.last} (${inventor.year})`);
  createResultItem(
    "Inventores ordenados por data de nascimento",
    sortedByBirthDate.join(", ")
  );

  // 4. Calcular o total de anos vividos por todos os inventores
  const totalYearsLived = inventors.reduce(
    (total, inventor) => total + (inventor.passed - inventor.year),
    0
  );
  createResultItem("Total de anos vividos", `${totalYearsLived} anos`);

  // 5. Ordenar inventores pelos anos vividos
  const sortedByYearsLived = inventors
    .slice()
    .sort((a, b) => b.passed - b.year - (a.passed - a.year))
    .map(
      (inventor) =>
        `${inventor.first} ${inventor.last} (${
          inventor.passed - inventor.year
        } anos)`
    );
  createResultItem(
    "Inventores ordenados por anos vividos",
    sortedByYearsLived.join(", ")
  );

  // 6. Remover redundâncias em um array
  const uniqueData = [...new Set(data)];
  createResultItem("Dados sem redundância", uniqueData.join(", "));
}

displayResults();
