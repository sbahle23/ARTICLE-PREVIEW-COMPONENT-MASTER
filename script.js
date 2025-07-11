// 1. Select the element from the Dom
 const articleFooter = document.querySelector('.article-footer');  
 const shareButton = document.querySelector('.share-btn');
 const tooltip = document.querySelector('.share-tooltip');

//  2. Add a click event listener to the button
shareButton.addEventListener('click', (event) =>{
    // Prevent the click from bubbling up to the document
    event.stopPropagation();

    // 3. Toggle the 'active' class on all relevent elements
    articleFooter.classList.toggle('active');
    shareButton.classList.toggle('active');
    tooltip.classList.toogle('active');
});

// Optional: close the tooltip if clicking anywhere else on the page
document.addEventListener("click", function() {
    if(articleFooter.classList.contains('active')){
        articleFooter.classList.remove('active');
        shareButton.classList.remove('active');
        tooltip.classList.remove('active');
    }
});

