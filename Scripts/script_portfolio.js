//**Duplicate articles with data
const articleMock = $('#mock');
for (const work of portfolioArray) {
    //cloning
    const articleClone = articleMock.clone();
    //apending
    articleClone.appendTo($('#works'));
    //modifying contents
    articleClone.attr('id', work.name);
    articleClone.find('img').attr('src', work.img);
    articleClone.find('img').attr('alt', work.alt);
    articleClone.find('h3').text(work.name);
    articleClone.find('h4').text(work.date);
    articleClone.find('#description').text(work.description);
    articleClone.find('a').attr('href', work.link);
    //check the link site
    if (work.link.includes("behance")) {
        articleClone.find('a').text('More information');
    }
    if (work.link.includes("tumblr")) {
        articleClone.find('a').text('Best Resolution');
    }
    if (work.link.includes("None")) {
        articleClone.find('a').css('display', 'none');
    }
    articleClone.find('#cat').text(work.category);
    articleClone.addClass(work.category);
}
//Delete original after use
articleMock.remove();


//hide modal
$(document).ready(function () {
    $('.shadow').hide();
});
//Img click
$('.able').on('click', function () {
    let image = $(this).attr('src');
    let alter = $(this).attr('alt');
    $('.modal').find('img').attr({
        src: image,
        alt: alter
    })
    $('.shadow').fadeIn();
})
//close window
//by click
$('#close').on('click', function () {
    $('.shadow').fadeOut();
})
//keypress
$(document).keyup(function (e) {
    if (e.key === "Escape") {
        $('.shadow').fadeOut();
    }
});

//Cateogry Selection Filter
$('.cat').on('click', function (e) {
    //create a constant get the value from the bottons
    const selectCategory = $(this).text();
    console.log(selectCategory);
    //console.log(selectCategory);
    $('.project').hide();
    //to pick a category based on cnst do this
    //turned to lower case because value are Capitalized (big dum dum)
    $('.' + selectCategory).show();
});
//for all
$('#all').on('click', function (e) {
    $('.project').show();
});
