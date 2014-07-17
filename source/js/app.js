define(['lib/news_special/bootstrap', 'lib/news_special/share_tools/controller'], function (news, shareTools) {

    return {
        init: function (storyPageUrl) {

            news.$('.main select').on('change', function () {
                var url = news.$(this).val();
                window.parent.location.href = url;
            });

        }
    };

});