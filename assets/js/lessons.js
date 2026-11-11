/* Category and lesson manifest. Add a lesson by pushing to LESSONS; the
   landing page renders itself from this data, grouped by category domain. */

const CATEGORIES = [
  { id: "cs-algorithms", name: "Algorithms & Data Structures", domain: "Computer Science" },
  { id: "cs-programming", name: "Programming & Software Engineering", domain: "Computer Science" },
  { id: "cs-databases", name: "Databases & Data Management", domain: "Computer Science" },
  { id: "cs-ml", name: "Machine Learning & AI", domain: "Computer Science" },
  { id: "bc-molecular", name: "Molecular & Cell Biology", domain: "Biochemistry" },
  { id: "bc-genetics", name: "Genetics & Genomics", domain: "Biochemistry" },
  { id: "bc-protein", name: "Protein Structure & Biochemistry", domain: "Biochemistry" },
  { id: "bc-immunology", name: "Immunology", domain: "Biochemistry" },
  { id: "st-probability", name: "Probability & Statistical Foundations", domain: "Statistics" },
  { id: "st-modeling", name: "Statistical Modeling & Inference", domain: "Statistics" },
  { id: "st-design", name: "Experimental Design & Analysis", domain: "Statistics" },
  { id: "bi-sequence", name: "Sequence Analysis", domain: "Bioinformatics" },
  { id: "bi-omics", name: "Omics Data Analysis", domain: "Bioinformatics" },
  { id: "bi-structural", name: "Structural Bioinformatics", domain: "Bioinformatics" },
  { id: "bi-phylo", name: "Phylogenetics & Evolution", domain: "Bioinformatics" },
]

const DOMAIN_COLORS = {
  "Computer Science": "#5aa2ec",
  "Biochemistry": "#4cc2a0",
  "Statistics": "#b680e4",
  "Bioinformatics": "#f2c14e",
}

/* matter: free-text topic tags for search. classes: UdeM course codes this lesson supports, e.g. "BIN6007". */
const LESSONS = [
  {
    id: "immune-system-atlas",
    title: "Immune System Atlas",
    blurb: "An explorable map of the immune system: click any cell to see its markers, roles, products, and how it connects to everything else.",
    href: "lessons/immune-system-atlas/index.html",
    category: "bc-immunology",
    matter: ["immunology", "immune cells", "cytokines", "cell biology"],
    classes: [],
    icon: "ctl",
  },
]
