class Article {
  constructor(domElement) {
    this.domElement = domElement
    this.expandArticle()
    this.height = getComputedStyle(domElement).height
    this.expandArticle()
    this.expandButton = domElement.querySelector(".expandButton")
    this.expandButton.innerText = "expand"
    this.expandButton.addEventListener("click", this.$expandArticle.bind(this))
    this.isExpanded = false
  }
  static of(domElement) {
    return new Article(domElement)
  }
  expandArticle() {
    this.domElement.classList.toggle("article-open")
  }
  $expandArticle() {
    this.isExpanded
      ? (this.domElement.style.height = "50px")
      : (this.domElement.style.height = this.height)
    this.isExpanded = !this.isExpanded
  }
}

const renderArticle = () => {
  let articles = document.querySelectorAll(".article")
  articles.forEach(Article.of)
}
