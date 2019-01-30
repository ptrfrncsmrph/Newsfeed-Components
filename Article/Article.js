class Article {
  constructor(domElement) {
    this.domElement = domElement
    this.domElement.classList.add("article-open")
    this.height = getComputedStyle(domElement).height
    this.domElement.classList.remove("article-open")
    this.expandButton = domElement.querySelector(".expandButton")
    this.expandButton.innerText = "expand"
    this.expandButton.addEventListener("click", this.expandArticle.bind(this))
    this.isExpanded = false
  }
  static of(domElement) {
    return new Article(domElement)
  }
  expandArticle() {
    this.isExpanded
      ? (this.domElement.style.height = "50px")
      : (this.domElement.style.height = this.height)
    this.isExpanded = !this.isExpanded
    this.expandButton.innerText = this.isExpanded ? "collapse" : "expand"
  }
}

const renderArticle = () => {
  let articles = document.querySelectorAll(".article")
  articles.forEach(Article.of)
}
