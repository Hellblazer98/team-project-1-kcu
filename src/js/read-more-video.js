window.addEventListener('DOMContentLoaded', function () {

    var video = document.querySelector('.read-more__video');


    video.addEventListener('click', function () {
        if (video.classList.contains('ready')) {
            return;
        }

        var src = video.dataset.src;

        video.classList.add('ready');
        video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" class="read-more__iframe" style="border-radius: 10px;"></iframe>')
    });
})