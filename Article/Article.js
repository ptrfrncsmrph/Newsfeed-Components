class Article {
  constructor(domElement) {
    this.domElement = domElement
    this.expandButton = domElement.querySelector(".expandButton")
    this.expandButton.innerText = "expand"
    this.expandButton.addEventListener("click", this.expandArticle.bind(this))
  }
  static of(domElement) {
    return new Article(domElement)
  }
  expandArticle() {
    this.domElement.classList.toggle("article-open")
  }
}

window.onload = () => {
  let articles = document.querySelectorAll(".article")
  articles.forEach(Article.of)
}
