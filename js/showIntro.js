// 保存初始状态的HTML内容
var initialHTML;

// 简介是否已经显示的标志
var introShown = false;


function showIntro() {
    // 如果简介已经显示，则不执行任何操作
    if (introShown) return;

    // 获取头像
    var avatar = document.querySelector('.avatar');
    
    //放大头像
    imgUrl = avatar.src;
    changeImage(imgUrl)
    
    // 获取主内容区域
    var mainContent = document.querySelector('.main-content');
    
    // 创建并添加文本内容到主内容区域右侧
    var sideText = document.createElement('div');
    sideText.classList.add('side-text');
    sideText.style.marginRight = '30px';
    sideText.innerHTML = '<p>出生于2001年，毕业于厦门工学院，大学所学专业为智能科学与技术。在大学生活中，其。。。。。。</p>';
    mainContent.appendChild(sideText);
    
    // 隐藏其他部分
    var otherSections = document.querySelectorAll('div.bq, p.bio');
    otherSections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // 简介已显示
    introShown = true;
}


function showInit() {

    if (!introShown) return;

    // 获取主内容区域
    var mainContent = document.querySelector('.main-content');
    
    var avatar = document.querySelector('.avatar');

    //恢复头像
    imgUrl = avatar.src;
    toggleZoom(imgUrl)

    avatar.classList.remove('enlarged-avatar');

    var sideText = document.querySelector('.side-text');

    sideText.classList.remove('side-text');

    mainContent.removeChild(sideText);

    var otherSections = document.querySelectorAll('.hidden');

    otherSections.forEach(function(section) {
        section.classList.remove('hidden');
    });

    introShown = false;
}


function changeImage(imgUrl) {

    var avatar = document.querySelector('.avatar');

    // 找到要更改的图片并添加放大类
    if (avatar.src.endsWith(imgUrl)) {
        avatar.classList.add('zoomed');
    };
}
  

function toggleZoom(imgUrl) {

    var avatar = document.querySelector('.avatar');
    element = avatar.src.endsWith(imgUrl);
    // 检查当前图片是否已经被放大
    var isZoomed = document.querySelector('.zoomed')
    
    if (isZoomed) {
        isZoomed.classList.remove('zoomed');
    }
}