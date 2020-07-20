window.onload = function () {
  // 获取元素
  const container = document.getElementsByClassName('container')[0];
  const prev = document.getElementsByClassName("prev")[0];
  const next = document.getElementsByClassName("next")[0];
  const banner = document.getElementsByClassName("banner")[0];
  const li = document.querySelectorAll(".banner li");
  const spanNode = document.querySelectorAll(".buttons span");
  const img = document.getElementsByTagName("img")[0];

  // 索引值
  let index = 1;

  // 给banner设置宽高
  banner.style.height = img.offsetHeight + 'px';
  banner.style.width = img.offsetWidth * li.length + 'px';


  // 点击左右按钮实现切换
  function switchImg(offset) {
    banner.style.transition = '0.5s';
    banner.style.left = -parseInt(offset) * index + 'px';

  }

  next.onclick = function () {
    if (index == spanNode.length) {
      index = 0;
      banner.style.transition = '0s';
      banner.style.left = '0';
    }
    index++;
    switchImg(img.offsetWidth);
    showButton()
    console.log(index);
  }

  prev.onclick = function () {
    if (index == 1) {
      index = li.length - 1;
      banner.style.transition = '0s';
      banner.style.left = '-4800px';
    }
    index--;
    switchImg(img.offsetWidth);
    showButton()
    console.log(index);

  }

  // 自动播放
  var timer = null;

  function paly() {
    timer = setInterval(function () {
      next.onclick();
    }, 1500);
  }
  paly();
  container.onmouseover = function () {
    // 清除定时器
    clearInterval(timer);
  }
  container.onmouseleave = function () {
    paly();
  }
  // 同步底部指针

  function showButton() {
    for (var i = 0; i < spanNode.length; i++) {
      spanNode[i].className = '';
    }
    spanNode[index - 1].className = 'active'
  }

  // 点击底部按钮切换
  function btnChangeImg() {
    for (let i = 0; i < spanNode.length; i++) {
      spanNode[i].onclick = function () {
        let myIndex = parseInt(this.getAttribute('index'));
        index = myIndex;
        switchImg(img.offsetWidth);
        showButton();
      }
    }
  }
  btnChangeImg();
}