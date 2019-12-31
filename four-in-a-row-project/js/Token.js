class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  drawHTMLToken() {
    const div = createElement("DIV");
    document.getElementById("game-board-underlay").appendChild(div);
    div.setAttribute("id", this.id);
    div.setAttribute("class", "token");
    Token.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {
    return document.getElementById(this.id);
  }
}
